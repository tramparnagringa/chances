<template>
  <DsScreen kind="question">
    <DsEyebrow>
      {{ question.section }}
      <template #meta>{{ sectionStep }}</template>
    </DsEyebrow>
    <DsHeading :id="headingId" size="question">{{ question.question }}</DsHeading>
    <DsText v-if="question.help" size="help">{{ question.help }}</DsText>

    <DsOptionList v-if="question.options" :wide="question.options.length > 5" :aria-labelledby="headingId">
      <DsOption
        v-for="(o, i) in question.options"
        :key="o.label"
        :letter="KEYS[i]!"
        :selected="answer === i"
        @click="$emit('pick', i)"
      >
        {{ o.label }}
      </DsOption>
    </DsOptionList>

    <form v-else @submit.prevent="$emit('text', text)">
      <DsStack :gap="3.5" align="start">
        <DsInput
          ref="input"
          v-model="text"
          size="lg"
          type="text"
          :placeholder="question.placeholder ?? ''"
          :aria-labelledby="headingId"
          maxlength="200"
        />
        <DsButton type="submit" size="md" :disabled="!text.trim()">Continuar →</DsButton>
      </DsStack>
    </form>

    <DsRow justify="between">
      <DsButton variant="ghost" @click="$emit('back')">← Voltar</DsButton>
      <DsText v-if="question.options" size="hint" as="div">Dica: use as teclas A–{{ KEYS[question.options.length - 1] }}</DsText>
    </DsRow>
  </DsScreen>
</template>

<script setup lang="ts">
import type { QuizQuestion } from '#shared/utils/scoring'

const props = defineProps<{
  question: QuizQuestion
  answer: number | string | undefined
  sectionStep: string
}>()
const emit = defineEmits<{ pick: [index: number], text: [value: string], back: [] }>()

const KEYS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const headingId = computed(() => `q-${props.question.id}`)
const text = ref(typeof props.answer === 'string' ? props.answer : '')
const input = ref<{ $el: HTMLInputElement } | null>(null)

// Teclas A–H ou 1–9 escolhem a opção (fora de inputs).
function onKey(e: KeyboardEvent) {
  const opts = props.question.options
  if (!opts || e.metaKey || e.ctrlKey || e.altKey) return
  const tag = (e.target as HTMLElement | null)?.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA') return
  let idx = KEYS.indexOf(e.key.toUpperCase())
  if (idx < 0 && /^[1-9]$/.test(e.key)) idx = Number(e.key) - 1
  if (idx >= 0 && idx < opts.length) emit('pick', idx)
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  if (props.question.type === 'text') input.value?.$el.focus()
})
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>
