<template>
  <div class="flex flex-wrap items-center" :class="[justify === 'between' ? 'justify-between' : '', gaps[gap]]">
    <slot />
  </div>
</template>

<script setup lang="ts">
type Gap = 'sm' | 'md' | 'lg'
withDefaults(defineProps<{ justify?: 'start' | 'between', gap?: Gap }>(), { justify: 'start', gap: 'md' })

const gaps: Record<Gap, string> = {
  sm: 'gap-2.5',
  md: 'gap-3',
  lg: 'gap-x-5 gap-y-4 pt-2',
}
</script>
