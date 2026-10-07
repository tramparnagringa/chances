import { describe, expect, it } from 'vitest'
import { normalizeWhatsapp } from '../shared/utils/validation'

describe('normalizeWhatsapp', () => {
  it('Brasil sem código do país vira +55', () => {
    expect(normalizeWhatsapp('(11) 91234-5678')).toBe('+5511912345678')
    expect(normalizeWhatsapp('11 3456-7890')).toBe('+551134567890')
  })
  it('mantém o código do país quando informado', () => {
    expect(normalizeWhatsapp('+55 11 91234-5678')).toBe('+5511912345678')
    expect(normalizeWhatsapp('+351 912 345 678')).toBe('+351912345678')
    expect(normalizeWhatsapp('+1 (415) 555-0123')).toBe('+14155550123')
    expect(normalizeWhatsapp('0044 7911 123456')).toBe('+447911123456')
    expect(normalizeWhatsapp('351912345678')).toBe('+351912345678')
  })
  it('recusa o que não é telefone', () => {
    expect(normalizeWhatsapp('')).toBeNull()
    expect(normalizeWhatsapp('1234')).toBeNull()
    expect(normalizeWhatsapp('meu zap')).toBeNull()
    expect(normalizeWhatsapp('+1234567890123456')).toBeNull()
  })
})
