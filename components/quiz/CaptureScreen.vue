<template>
  <DsScreen kind="capture">
    <DsStack :gap="3.5">
      <DsEyebrow>Pronto, terminou</DsEyebrow>
      <DsHeading size="capture">Suas chances estão calculadas.</DsHeading>
      <DsText>Seu resultado aparece aqui na hora. No email você recebe um roadmap feito pra sua faixa, com as etapas pra subir sua nota. Na tela, você vai ver:</DsText>
      <DsCheckList :items="[
        'Sua nota de 0 a 100 e como ela se compara à de mais de 8.000 profissionais',
        'Sua nota em experiência, inglês e processos seletivos',
        'As 3 prioridades que mais aumentam suas chances no seu caso',
      ]" />
    </DsStack>

    <DsCard as="form" stamp novalidate @submit.prevent="submit">
      <DsField label="Nome" :error="err.nome ? 'Conta pra gente seu nome.' : ''">
        <DsInput v-model="lead.nome" type="text" autocomplete="given-name" placeholder="Como você quer ser chamado" :error="err.nome" @update:model-value="err.nome = false" />
      </DsField>
      <DsField label="Email" :error="err.email ? 'Confere o email, parece que tem algo errado.' : ''">
        <DsInput v-model="lead.email" type="email" autocomplete="email" inputmode="email" placeholder="voce@email.com" :error="err.email" @update:model-value="err.email = false" />
      </DsField>
      <DsField label="WhatsApp" :error="err.whats ? 'Coloca o número com DDD.' : ''">
        <DsInput :model-value="lead.whats" type="tel" autocomplete="tel" inputmode="tel" placeholder="(11) 91234-5678" :error="err.whats" @update:model-value="onWhats" />
      </DsField>
      <DsStack :gap="1">
        <DsCheckbox v-model="lead.consent" :error="err.consent" @update:model-value="err.consent = false">
          Aceito receber conteúdos da Trampar na Gringa por email e WhatsApp e concordo com a <a :href="privacyUrl" target="_blank" rel="noopener">Política de Privacidade</a>. Sem spam, e dá para sair quando quiser.
        </DsCheckbox>
        <DsErrorText v-if="err.consent">Precisamos do seu aceite pra continuar.</DsErrorText>
      </DsStack>
      <DsButton type="submit" size="xl" block :disabled="sending">{{ sending ? 'Calculando…' : 'Ver minhas chances →' }}</DsButton>
    </DsCard>

    <div>
      <DsButton variant="ghost" @click="$emit('back')">← Revisar respostas</DsButton>
    </div>
  </DsScreen>
</template>

<script setup lang="ts">
import type { Lead } from '~/composables/useQuiz'

defineProps<{ sending: boolean, privacyUrl: string }>()
const emit = defineEmits<{ submit: [lead: Lead], back: [] }>()

const lead = reactive<Lead>({ nome: '', email: '', whats: '', consent: false })
const err = reactive({ nome: false, email: false, whats: false, consent: false })

// Máscara BR: (DD) NNNN-NNNN ou (DD) NNNNN-NNNN, até 11 dígitos.
function onWhats(value: string) {
  err.whats = false
  const d = value.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) lead.whats = d.length ? `(${d}` : ''
  else if (d.length <= 6) lead.whats = `(${d.slice(0, 2)}) ${d.slice(2)}`
  else if (d.length <= 10) lead.whats = `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  else lead.whats = `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

function submit() {
  const digits = lead.whats.replace(/\D/g, '')
  err.nome = lead.nome.trim().length < 2
  err.email = !EMAIL_RE.test(lead.email.trim())
  err.whats = digits.length < 10 || digits.length > 13
  err.consent = !lead.consent
  if (Object.values(err).some(Boolean)) return
  emit('submit', { ...lead })
}
</script>
