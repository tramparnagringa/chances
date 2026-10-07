<template>
  <component :is="as" class="m-0 [text-wrap:pretty] [&_strong]:text-night-ink" :class="sizes[size]">
    <slot />
  </component>
</template>

<script setup lang="ts">
type Size = 'lede' | 'result' | 'body' | 'card' | 'help' | 'hint' | 'small'
withDefaults(defineProps<{ size?: Size, as?: string }>(), { size: 'body', as: 'p' })

const sizes: Record<Size, string> = {
  lede: 'max-w-[560px] text-[clamp(17px,2.2vw,19px)] leading-[1.6] text-night-ink-2',
  result: 'max-w-[600px] text-lg leading-[1.6] text-night-ink-2',
  body: 'text-[17px] leading-[1.6] text-night-ink-2',
  card: 'text-[15px] leading-[1.55] text-night-ink-2',
  help: '-mt-2.5 text-[15px] text-night-ink-3',
  hint: 'text-[13px] text-night-ink-3',
  small: 'text-sm text-night-ink-3',
}
</script>
