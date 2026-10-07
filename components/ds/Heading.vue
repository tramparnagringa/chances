<template>
  <component :is="as" class="m-0 font-display text-night-ink [text-wrap:balance]" :class="sizes[size]">
    <slot />
  </component>
</template>

<script setup lang="ts">
type Size = 'hero' | 'question' | 'capture' | 'section' | 'cta'
withDefaults(defineProps<{ as?: 'h1' | 'h2' | 'h3', size?: Size }>(), { as: 'h2', size: 'section' })

const sizes: Record<Size, string> = {
  hero: 'text-[clamp(38px,7vw,64px)] font-bold leading-[1.04] tracking-[-0.025em]',
  question: 'text-[clamp(26px,4.6vw,38px)] font-semibold leading-[1.15] tracking-[-0.02em]',
  capture: 'text-[clamp(30px,5.4vw,46px)] font-bold leading-[1.08] tracking-[-0.025em]',
  section: 'text-2xl font-semibold tracking-[-0.01em]',
  cta: 'text-[clamp(24px,4vw,32px)] font-bold leading-[1.12] tracking-[-0.02em]',
}
</script>
