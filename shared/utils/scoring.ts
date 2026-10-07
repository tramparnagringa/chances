// Lógica do quiz, compartilhada entre a página (resultado na tela) e o
// servidor (que recalcula a nota antes de mandar ao Kit, sem confiar no
// cliente). Funções puras: tudo vem de shared/data/*.json.
import quizData from '../data/quiz-data.json'
import tiersData from '../data/tiers.json'

export type PillarId = 'exp' | 'eng' | 'proc'

export interface QuizOption {
  label: string
  points?: number
}

export interface QuizQuestion {
  n: number
  id: string
  section: string
  pillar: PillarId | null
  question: string
  help: string | null
  type: 'single_choice' | 'text'
  placeholder: string | null
  options: QuizOption[] | null
}

/** Índice da opção escolhida (perguntas de escolha) ou texto (pergunta de texto). */
export type Answers = Record<string, number | string>

export const QUESTIONS = quizData.questions as QuizQuestion[]
export const PILLAR_MAX = quizData.pillarMax as Record<PillarId, number>
export const QUANTILES: number[] = quizData.percentileQuantiles.values
export const MEDIAN_SCORE = Math.round(quizData.percentileQuantiles.median * 100)
export const TIERS = tiersData.items
export type Tier = (typeof TIERS)[number]

const TIER_RANGES = quizData.tiers as { name: string, min: number, max: number }[]

function questionMax(q: QuizQuestion): number {
  return Math.max(...(q.options ?? []).map(o => o.points ?? 0))
}

/** Valida uma resposta contra a pergunta. Usado pelo servidor. */
export function isValidAnswer(q: QuizQuestion, v: unknown): boolean {
  if (q.type === 'text') return typeof v === 'string' && v.trim().length > 0 && v.length <= 200
  return Number.isInteger(v) && (v as number) >= 0 && (v as number) < (q.options?.length ?? 0)
}

export function computeScores(answers: Answers) {
  const sum: Record<PillarId, number> = { exp: 0, eng: 0, proc: 0 }
  const ratio: Record<string, number> = {}

  for (const q of QUESTIONS) {
    if (!q.pillar) continue
    const i = answers[q.id]
    const pts = typeof i === 'number' ? (q.options?.[i]?.points ?? 0) : 0
    sum[q.pillar] += pts
    ratio[q.id] = pts / questionMax(q)
  }

  const pillars: Record<PillarId, number> = {
    exp: Math.min(1, sum.exp / PILLAR_MAX.exp),
    eng: Math.min(1, sum.eng / PILLAR_MAX.eng),
    proc: Math.min(1, sum.proc / PILLAR_MAX.proc),
  }
  const total = (pillars.exp + pillars.eng + pillars.proc) / 3

  return { pillars, ratio, total, score: Math.round(total * 100) }
}

export function tierIndex(score: number): number {
  const i = TIER_RANGES.findIndex(t => score >= t.min && score <= t.max)
  return i < 0 ? 0 : i
}

/** Percentil por interpolação linear nos 21 quantis (0, 5, …, 100), limitado a 1–99. */
export function percentile(total: number): number {
  if (total <= QUANTILES[0]!) return 1
  for (let i = 1; i < QUANTILES.length; i++) {
    const hi = QUANTILES[i]!
    const lo = QUANTILES[i - 1]!
    if (total <= hi) {
      const f = (total - lo) / (hi - lo)
      return Math.max(1, Math.min(99, Math.round((i - 1 + f) * 5)))
    }
  }
  return 99
}

export function pillarText(pillar: PillarId, value: number): string {
  const list = quizData.pillarTexts[pillar]
  const hit = list.find(x => x.lessThan === null || value < x.lessThan)
  return (hit ?? list[list.length - 1]!).text
}

/** As 3 menores razões entre os ids de priorities.items. Empate: ordem da lista (sort estável). */
export function topPriorities(ratio: Record<string, number>, count = 3) {
  return quizData.priorities.items
    .map(p => ({ ...p, r: ratio[p.id] ?? 0 }))
    .sort((a, b) => a.r - b.r)
    .slice(0, count)
}

export function blocker(answers: Answers) {
  const i = answers.pedra
  const items = quizData.blockers.items
  // Fallback do protótipo: sem resposta em 'pedra', usa o índice 1.
  return items[typeof i === 'number' ? i : 1] ?? items[1]!
}

/** Rótulo da opção escolhida, ou o texto livre. '—' quando não respondida. */
export function answerLabel(answers: Answers, id: string): string {
  const q = QUESTIONS.find(x => x.id === id)
  const v = answers[id]
  if (!q || v === undefined || v === null) return '—'
  if (q.type === 'text') return String(v)
  return q.options?.[v as number]?.label ?? '—'
}

export function englishSkills(ratio: Record<string, number>) {
  return [
    ['leitura', 'Leitura'],
    ['escrita', 'Escrita'],
    ['escuta', 'Escuta'],
    ['fala', 'Fala'],
  ].map(([id, label]) => ({ id: id!, label: label!, pct: Math.round((ratio[id!] ?? 0) * 100) }))
}
