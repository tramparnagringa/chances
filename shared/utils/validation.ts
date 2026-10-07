// Mesmas regras no cliente (CaptureScreen) e no servidor (/api/lead).
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * Normaliza um WhatsApp de qualquer país para E.164 (+5511912345678).
 * - Começa com "+" ou "00": já tem código do país.
 * - Sem código e com 10 ou 11 dígitos: assume Brasil (DDD + número) e põe +55.
 * - Senão, trata os dígitos como já incluindo o código do país.
 * Retorna null se não parecer um telefone (E.164: 8 a 15 dígitos).
 */
export function normalizeWhatsapp(raw: string): string | null {
  const v = raw.trim()
  if (!v || /[^\d\s()+\-.]/.test(v)) return null
  let digits = v.replace(/\D/g, '')
  const hasCountry = v.startsWith('+') || digits.startsWith('00')
  if (digits.startsWith('00')) digits = digits.slice(2)
  if (!hasCountry && (digits.length === 10 || digits.length === 11)) digits = `55${digits}`
  if (digits.length < 8 || digits.length > 15) return null
  return `+${digits}`
}
