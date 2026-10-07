import {
  answerLabel, blocker, computeScores, englishSkills, MEDIAN_SCORE, percentile,
  pillarText, QUESTIONS, tierIndex, TIERS, topPriorities, type Answers,
} from '#shared/utils/scoring'

export type Step = 'intro' | 'quiz' | 'captura' | 'resultado'

export interface Lead {
  nome: string
  email: string
  whats: string
  consent: boolean
}

const STORAGE_KEY = 'tng-quiz-chances-v1'
const AUTO_ADVANCE_MS = 220

export function useQuiz() {
  const config = useRuntimeConfig().public

  const step = ref<Step>('intro')
  const qi = ref(0)
  const answers = ref<Answers>({})
  /** Primeiro nome, para a saudação do resultado. */
  const nome = ref('')
  const sending = ref(false)

  const question = computed(() => QUESTIONS[qi.value]!)
  const total = QUESTIONS.length
  const progress = computed(() =>
    Math.round(((qi.value + (answers.value[question.value.id] !== undefined ? 1 : 0)) / total) * 100))
  const sectionStep = computed(() => {
    const list = QUESTIONS.filter(q => q.section === question.value.section)
    return `${list.indexOf(question.value) + 1} de ${list.length}`
  })
  const isComplete = computed(() => QUESTIONS.every(q => answers.value[q.id] !== undefined))

  function go(next: Step, nextQi = qi.value) {
    step.value = next
    qi.value = nextQi
    if (import.meta.client) window.scrollTo({ top: 0 })
  }

  let advanceTimer: ReturnType<typeof setTimeout> | undefined

  function pick(index: number) {
    answers.value = { ...answers.value, [question.value.id]: index }
    clearTimeout(advanceTimer)
    advanceTimer = setTimeout(next, AUTO_ADVANCE_MS)
  }

  function answerText(text: string) {
    const v = text.trim()
    if (!v) return
    answers.value = { ...answers.value, [question.value.id]: v }
    next()
  }

  function next() {
    if (qi.value >= total - 1) return go('captura')
    go('quiz', qi.value + 1)
  }

  function back() {
    clearTimeout(advanceTimer)
    if (step.value === 'captura') return go('quiz', total - 1)
    if (qi.value === 0) return go('intro', 0)
    go('quiz', qi.value - 1)
  }

  function restart() {
    answers.value = {}
    nome.value = ''
    go('intro', 0)
  }

  const result = computed(() => {
    const a = answers.value
    const { pillars, ratio, total: t, score } = computeScores(a)
    const tier = TIERS[tierIndex(score)]!
    const block = blocker(a)
    const url = (config as Record<string, unknown>)[tier.cta.ctaUrlKey]
    return {
      score,
      tier,
      percentile: percentile(t),
      median: MEDIAN_SCORE,
      pillars: [
        { label: 'Experiência', pct: Math.round(pillars.exp * 100), text: pillarText('exp', pillars.exp), chips: [] },
        { label: 'Inglês', pct: Math.round(pillars.eng * 100), text: pillarText('eng', pillars.eng), chips: englishSkills(ratio) },
        { label: 'Processos seletivos', pct: Math.round(pillars.proc * 100), text: pillarText('proc', pillars.proc), chips: [] },
      ],
      block,
      priorities: topPriorities(ratio),
      meta: [
        { label: 'Hoje', text: [answerLabel(a, 'renda'), answerLabel(a, 'regime')].join(' · ') },
        { label: 'Meta', text: [answerLabel(a, 'alvo'), answerLabel(a, 'plano')].join(' · ') },
      ],
      cta: { ...tier.cta, url: typeof url === 'string' ? url : '#' },
    }
  })

  async function submitLead(lead: Lead) {
    if (sending.value) return
    sending.value = true
    nome.value = lead.nome.trim().split(/\s+/)[0] ?? ''
    const { score, tier } = result.value

    try {
      ;((window as any).dataLayer ||= []).push({ event: 'quiz_lead', score, faixa: tier.name })
    }
    catch {}

    try {
      // O resultado aparece mesmo se o envio falhar (requisito do handoff).
      await $fetch('/api/lead', {
        method: 'POST',
        timeout: 10000,
        body: {
          nome: lead.nome.trim(),
          email: lead.email.trim(),
          whatsapp: lead.whats.replace(/\D/g, ''),
          consent: lead.consent,
          consentVersion: CONSENT_VERSION,
          answers: answers.value,
          referrer: window.location.href,
          empresa: '', // honeypot: o servidor descarta se vier preenchido
        },
      })
    }
    catch (err) {
      console.error('[quiz] falha ao enviar o lead', err)
    }
    finally {
      sending.value = false
      go('resultado')
    }
  }

  // Persistência local: a pessoa não perde o progresso se recarregar.
  onMounted(() => {
    if (import.meta.dev && previewState()) return
    restore()

    watch([step, qi, answers, nome], () => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ step: step.value, qi: qi.value, answers: answers.value, nome: nome.value }))
      }
      catch {}
    }, { deep: true })
  })

  function restore() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
      if (!saved || typeof saved !== 'object') return
      answers.value = sanitizeAnswers(saved.answers)
      nome.value = typeof saved.nome === 'string' ? saved.nome : ''
      qi.value = Number.isInteger(saved.qi) ? Math.min(Math.max(saved.qi, 0), total - 1) : 0
      // Captura e resultado exigem todas as respostas; senão, volta pro quiz.
      if ((saved.step === 'captura' || saved.step === 'resultado') && !isComplete.value) step.value = 'quiz'
      else if (['intro', 'quiz', 'captura', 'resultado'].includes(saved.step)) step.value = saved.step
    }
    catch {}
  }

  // Só em dev: ?tela=resultado&perfil=medio abre direto numa tela, como os Tweaks do protótipo.
  function previewState() {
    const params = new URLSearchParams(window.location.search)
    const tela = params.get('tela') as Step | null
    if (!tela) return false
    const perfil = DEMO_PROFILES[params.get('perfil') ?? 'medio'] ?? DEMO_PROFILES.medio!
    if (tela !== 'intro' && tela !== 'quiz') {
      answers.value = { ...perfil }
      nome.value = 'Ana'
    }
    step.value = tela
    qi.value = Math.min(Number(params.get('q') ?? 1) - 1 || 0, total - 1)
    return true
  }

  return {
    step, qi, answers, nome, sending, question, total, progress, sectionStep, result,
    pick, answerText, back, restart, submitLead, start: () => go('quiz', 0),
  }
}

/** Versão do texto de aceite LGPD. Mudou o texto do checkbox? Mude aqui. */
export const CONSENT_VERSION = '2026-10-07'

function sanitizeAnswers(raw: unknown): Answers {
  if (!raw || typeof raw !== 'object') return {}
  const out: Answers = {}
  for (const q of QUESTIONS) {
    const v = (raw as Record<string, unknown>)[q.id]
    if (q.type === 'text' ? typeof v === 'string' : Number.isInteger(v) && (v as number) < (q.options?.length ?? 0))
      out[q.id] = v as number | string
  }
  return out
}

const DEMO_PROFILES: Record<string, Answers> = {
  baixo: { area: 0, funcao: 'Analista de suporte', exp: 1, nivel: 0, leitura: 1, escrita: 1, escuta: 0, fala: 1, pedra: 0, passiva: 0, ativa: 0, convites: 0, entrevista: 0, regime: 3, renda: 1, satisfacao: 1, alvo: 1, plano: 0 },
  medio: { area: 0, funcao: 'Desenvolvedor backend', exp: 2, nivel: 1, leitura: 3, escrita: 2, escuta: 3, fala: 2, pedra: 1, passiva: 2, ativa: 1, convites: 1, entrevista: 2, regime: 0, renda: 2, satisfacao: 3, alvo: 2, plano: 0 },
  alto: { area: 2, funcao: 'Product Designer', exp: 4, nivel: 2, leitura: 4, escrita: 3, escuta: 4, fala: 3, pedra: 4, passiva: 3, ativa: 3, convites: 2, entrevista: 3, regime: 0, renda: 3, satisfacao: 3, alvo: 3, plano: 1 },
}
