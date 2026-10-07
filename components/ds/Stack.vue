<template>
  <component :is="as" class="flex flex-col" :class="[gaps[gap], align === 'start' ? 'items-start' : '']">
    <slot />
  </component>
</template>

<script setup lang="ts">
type Gap = 0 | 1 | 1.5 | 2 | 3 | 3.5 | 4 | 4.5 | 6
withDefaults(defineProps<{ gap?: Gap, as?: string, align?: 'stretch' | 'start' }>(), { gap: 4, as: 'div', align: 'stretch' })

// Mapa estático para o Tailwind enxergar as classes.
const gaps: Record<Gap, string> = {
  0: 'gap-0', 1: 'gap-1', 1.5: 'gap-1.5', 2: 'gap-2', 3: 'gap-3', 3.5: 'gap-3.5', 4: 'gap-4', 4.5: 'gap-[18px]', 6: 'gap-6',
}
</script>
