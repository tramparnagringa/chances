<template>
  <button
    type="button"
    :aria-pressed="selected"
    class="flex min-h-[60px] w-full cursor-pointer appearance-none items-center gap-3.5 rounded-card border-[1.5px] px-[18px] py-3.5 text-left font-body text-base leading-[1.4] text-night-ink transition-[transform,box-shadow,border-color] duration-[120ms,200ms,120ms] ease-tng hover:-translate-y-0.5 hover:border-lima hover:shadow-lift focus-visible:border-lima focus-visible:outline-none focus-visible:shadow-focus-lima"
    :class="selected ? 'border-lima bg-roxo-700' : 'border-night-3 bg-night-2'"
  >
    <span
      class="grid h-7 w-7 flex-none place-items-center rounded-field font-mono text-xs font-medium"
      :class="selected ? 'bg-lima text-tinta' : 'bg-night-3 text-night-ink-2'"
      aria-hidden="true"
    >{{ letter }}</span>
    <span class="[text-wrap:pretty]"><slot /></span>
  </button>
</template>

<script setup lang="ts">
defineProps<{ letter: string, selected: boolean }>()
</script>
