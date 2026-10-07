<template>
  <section class="flex flex-col" :class="[padding[kind], gap[kind]]">
    <slot />
  </section>
</template>

<script setup lang="ts">
type Kind = 'intro' | 'question' | 'capture' | 'result'
withDefaults(defineProps<{ kind?: Kind }>(), { kind: 'intro' })

// Paddings e gaps de cada tela, como no protótipo.
const padding: Record<Kind, string> = {
  intro: 'pt-[clamp(40px,9vw,96px)] pb-16',
  question: 'pt-[clamp(28px,6vw,64px)] pb-16',
  capture: 'pt-[clamp(32px,7vw,72px)] pb-16',
  result: 'pt-[clamp(32px,7vw,72px)] pb-[72px]',
}
const gap: Record<Kind, string> = {
  intro: 'gap-7',
  question: 'gap-6',
  capture: 'gap-7',
  result: 'gap-10',
}
</script>
