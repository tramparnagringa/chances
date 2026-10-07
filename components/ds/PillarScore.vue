<template>
  <div class="flex flex-col gap-2.5 rounded-card border border-night-3 bg-night-2 p-5">
    <div class="flex items-baseline justify-between gap-3">
      <div class="font-display text-[19px] font-semibold">{{ label }}</div>
      <div class="font-mono text-[15px] font-medium text-lima">{{ pct }}%</div>
    </div>
    <div class="h-2 overflow-hidden rounded-pill bg-night-3" aria-hidden="true">
      <div class="h-2 rounded-pill bg-lima" :style="{ width: `${pct}%` }" />
    </div>
    <div class="text-[15px] leading-[1.55] text-night-ink-2 [text-wrap:pretty]">{{ text }}</div>
    <div v-if="chips.length" class="flex flex-wrap gap-2 pt-1">
      <span
        v-for="c in chips"
        :key="c.label"
        class="inline-flex items-center gap-1.5 rounded-pill px-2.5 py-[5px] text-[13px]"
        :class="chipTone(c.pct)"
      >{{ c.label }} <span class="font-mono text-xs">{{ c.pct }}%</span></span>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  pct: number
  text: string
  chips?: { label: string, pct: number }[]
}>(), { chips: () => [] })

// < 40% neutro, 40–69% roxo, ≥ 70% lime.
function chipTone(pct: number) {
  if (pct < 40) return 'bg-night-3 text-night-ink'
  if (pct < 70) return 'bg-roxo-700 text-night-ink'
  return 'bg-lima text-tinta'
}
</script>
