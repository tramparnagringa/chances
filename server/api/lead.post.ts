// Recebe o lead do quiz e envia ao Kit (API v4). A chave fica só aqui.
// A nota é recalculada no servidor a partir das respostas: o Kit nunca
// recebe uma nota mandada pelo cliente.
import { answerLabel, computeScores, isValidAnswer, QUESTIONS, tierIndex, TIERS, type Answers } from '#shared/utils/scoring'
import { EMAIL_RE, normalizeWhatsapp } from '#shared/utils/validation'


interface LeadBody {
  nome?: unknown
  email?: unknown
  whatsapp?: unknown
  consent?: unknown
  consentVersion?: unknown
  answers?: unknown
  referrer?: unknown
  empresa?: unknown
}

export default defineEventHandler(async (event) => {
  const body = await readBody<LeadBody>(event)

  // Honeypot: robô preencheu o campo escondido. Finge sucesso e descarta.
  if (typeof body?.empresa === 'string' && body.empresa.trim()) return { ok: true }

  const lead = validate(body)
  if (!lead) throw createError({ statusCode: 422, statusMessage: 'Dados inválidos' })

  const { pillars, score } = computeScores(lead.answers)
  const tier = tierIndex(score)
  const a = lead.answers

  const fields: Record<string, string> = {
    whatsapp: lead.whatsapp,
    tng_score: String(score),
    tng_faixa: TIERS[tier]!.name,
    score_experiencia: String(Math.round(pillars.exp * 100)),
    score_ingles: String(Math.round(pillars.eng * 100)),
    score_processos: String(Math.round(pillars.proc * 100)),
    area: answerLabel(a, 'area'),
    cargo: answerLabel(a, 'funcao'),
    trava_principal: answerLabel(a, 'pedra'),
    renda_atual: answerLabel(a, 'renda'),
    renda_meta: answerLabel(a, 'alvo'),
    plano: answerLabel(a, 'plano'),
    lgpd_consent_at: new Date().toISOString(),
    lgpd_consent_versao: lead.consentVersion,
  }

  const config = useRuntimeConfig(event)
  const tagId = [config.kitTagFaixa1, config.kitTagFaixa2, config.kitTagFaixa3][tier]

  if (!config.kitApiKey || !config.kitFormId || !tagId) {
    console.warn('[lead] Kit não configurado (NUXT_KIT_*); lead não enviado.', { score, faixa: fields.tng_faixa })
    return { ok: true, kit: 'skipped' }
  }

  const kit = $fetch.create({
    baseURL: config.kitApiBase,
    headers: { 'X-Kit-Api-Key': config.kitApiKey, 'Accept': 'application/json' },
    timeout: 8000,
    retry: 1,
  })

  try {
    // 1. Cria ou atualiza o inscrito só com email e nome. Com mais de 10
    //    custom fields o Kit cria de forma assíncrona (202) e os passos
    //    seguintes falhariam porque o inscrito ainda não existe.
    const created = await kit<{ subscriber: { id: number } }>('/subscribers', {
      method: 'POST',
      body: { email_address: lead.email, first_name: lead.nome },
    })

    // 2. Custom fields (podem ser gravados de forma assíncrona; tudo bem).
    await kit(`/subscribers/${created.subscriber.id}`, {
      method: 'PUT',
      body: { email_address: lead.email, fields },
    })

    // 3. Formulário do quiz (referrer leva as UTMs).
    await kit(`/forms/${config.kitFormId}/subscribers`, {
      method: 'POST',
      body: { email_address: lead.email, referrer: lead.referrer },
    })

    // 4. Tag da faixa: dispara a automação que manda o roadmap certo.
    await kit(`/tags/${tagId}/subscribers`, {
      method: 'POST',
      body: { email_address: lead.email },
    })
  }
  catch (err: any) {
    console.error('[lead] falha no Kit', err?.status, err?.data ?? err?.message)
    throw createError({ statusCode: 502, statusMessage: 'Falha ao enviar ao Kit' })
  }

  return { ok: true }
})

function validate(body: LeadBody | undefined) {
  if (!body || typeof body !== 'object') return null
  const nome = typeof body.nome === 'string' ? body.nome.trim().slice(0, 100) : ''
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  const whatsapp = typeof body.whatsapp === 'string' ? normalizeWhatsapp(body.whatsapp) : null

  if (nome.length < 2) return null
  if (email.length > 254 || !EMAIL_RE.test(email)) return null
  if (!whatsapp) return null
  // LGPD: nada vai pro Kit sem aceite explícito.
  if (body.consent !== true) return null

  if (!body.answers || typeof body.answers !== 'object') return null
  const raw = body.answers as Record<string, unknown>
  const answers: Answers = {}
  for (const q of QUESTIONS) {
    const v = raw[q.id]
    if (!isValidAnswer(q, v)) return null
    answers[q.id] = typeof v === 'string' ? v.trim() : (v as number)
  }

  return {
    nome,
    email,
    whatsapp,
    answers,
    consentVersion: typeof body.consentVersion === 'string' ? body.consentVersion.slice(0, 40) : 'desconhecida',
    referrer: typeof body.referrer === 'string' ? body.referrer.slice(0, 500) : undefined,
  }
}
