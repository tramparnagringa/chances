// Paridade com o protótipo: os valores esperados saíram da lógica original
// (result() em 'Quiz TNG v2 escuro.dc.html') rodada nos perfis DEMO de lá.
// Se um destes testes quebrar, a conta divergiu do handoff.
import { describe, expect, it } from 'vitest'
import {
  answerLabel, blocker, computeScores, englishSkills, isValidAnswer, MEDIAN_SCORE,
  percentile, QUESTIONS, tierIndex, TIERS, topPriorities, type Answers,
} from '../shared/utils/scoring'

const DEMO: Record<string, Answers> = {
  baixo: { area: 0, funcao: 'Analista de suporte', exp: 1, nivel: 0, leitura: 1, escrita: 1, escuta: 0, fala: 1, pedra: 0, passiva: 0, ativa: 0, convites: 0, entrevista: 0, regime: 3, renda: 1, satisfacao: 1, alvo: 1, plano: 0 },
  medio: { area: 0, funcao: 'Desenvolvedor backend', exp: 2, nivel: 1, leitura: 3, escrita: 2, escuta: 3, fala: 2, pedra: 1, passiva: 2, ativa: 1, convites: 1, entrevista: 2, regime: 0, renda: 2, satisfacao: 3, alvo: 2, plano: 0 },
  alto: { area: 2, funcao: 'Product Designer', exp: 4, nivel: 2, leitura: 4, escrita: 3, escuta: 4, fala: 3, pedra: 4, passiva: 3, ativa: 3, convites: 2, entrevista: 3, regime: 0, renda: 3, satisfacao: 3, alvo: 3, plano: 1 },
}

const EXPECTED = {
  baixo: { score: 15, tier: 'Primeiros passos', pct: 1, dims: [14, 19, 13], subs: [23, 23, 14, 24], prio: ['Volume de candidaturas', 'Conversão em entrevistas', 'Compreensão auditiva'], block: 'Os recrutadores não estão te encontrando.', today: 'R$ 2.500 a R$ 5.000 · 100% presencial' },
  medio: { score: 47, tier: 'Em construção', pct: 31, dims: [62, 51, 28], subs: [62, 38, 62, 38], prio: ['Conversão em entrevistas', 'Volume de candidaturas', 'Inglês falado'], block: 'Suas candidaturas param na triagem.', today: 'R$ 5.000 a R$ 10.000 · 100% remoto' },
  alto: { score: 81, tier: 'Pronto para acelerar', pct: 96, dims: [100, 82, 62], subs: [100, 62, 100, 62], prio: ['Conversão em entrevistas', 'Escrita em inglês', 'Visibilidade no LinkedIn'], block: 'Você chega na final e não fecha.', today: 'R$ 10.000 a R$ 20.000 · 100% remoto' },
}

describe('paridade com o protótipo', () => {
  for (const [name, answers] of Object.entries(DEMO)) {
    const exp = EXPECTED[name as keyof typeof EXPECTED]
    it(`perfil ${name}`, () => {
      const { pillars, ratio, total, score } = computeScores(answers)
      expect(score).toBe(exp.score)
      expect(TIERS[tierIndex(score)]!.name).toBe(exp.tier)
      expect(percentile(total)).toBe(exp.pct)
      expect([pillars.exp, pillars.eng, pillars.proc].map(x => Math.round(x * 100))).toEqual(exp.dims)
      expect(englishSkills(ratio).map(s => s.pct)).toEqual(exp.subs)
      expect(topPriorities(ratio).map(p => p.title)).toEqual(exp.prio)
      expect(blocker(answers).title).toBe(exp.block)
      expect([answerLabel(answers, 'renda'), answerLabel(answers, 'regime')].join(' · ')).toBe(exp.today)
    })
  }
})

describe('limites', () => {
  it('faixas nas bordas', () => {
    expect(tierIndex(0)).toBe(0)
    expect(tierIndex(44)).toBe(0)
    expect(tierIndex(45)).toBe(1)
    expect(tierIndex(64)).toBe(1)
    expect(tierIndex(65)).toBe(2)
    expect(tierIndex(100)).toBe(2)
  })

  it('percentil fica entre 1 e 99', () => {
    expect(percentile(0)).toBe(1)
    expect(percentile(1)).toBe(99)
    expect(MEDIAN_SCORE).toBe(55)
  })

  it('nota máxima é 100', () => {
    const best: Answers = {}
    for (const q of QUESTIONS) best[q.id] = q.type === 'text' ? 'x' : q.options!.length - 1
    expect(computeScores(best).score).toBe(100)
  })

  it('valida respostas', () => {
    const exp = QUESTIONS.find(q => q.id === 'exp')!
    const funcao = QUESTIONS.find(q => q.id === 'funcao')!
    expect(isValidAnswer(exp, 4)).toBe(true)
    expect(isValidAnswer(exp, 5)).toBe(false)
    expect(isValidAnswer(exp, '1')).toBe(false)
    expect(isValidAnswer(funcao, 'QA')).toBe(true)
    expect(isValidAnswer(funcao, '  ')).toBe(false)
  })
})
