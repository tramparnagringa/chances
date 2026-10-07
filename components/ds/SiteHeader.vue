<template>
  <header class="sticky top-0 z-[5] border-b border-night-3 bg-[rgba(11,15,13,.85)] backdrop-blur-[10px]">
    <div class="mx-auto flex max-w-[720px] items-center gap-3 px-5 py-3">
      <img src="/logo-circle.svg" alt="Trampar na Gringa" width="32" height="32" class="block h-8 w-8">
      <div class="font-display text-base font-bold tracking-[-0.01em] text-night-ink">Trampar na Gringa</div>
      <div class="flex-1" />
      <div v-if="counter" class="font-mono text-xs uppercase tracking-[0.12em] text-night-ink-3">{{ counter }}</div>
    </div>
    <div
      v-if="progress !== null"
      class="h-[3px] bg-night-3"
      role="progressbar"
      :aria-valuenow="progress"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div class="h-[3px] bg-lima transition-[width] duration-[320ms] ease-tng" :style="{ width: `${progress}%` }" />
    </div>
  </header>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  /** Ex.: "3/18". Some quando vazio. */
  counter?: string
  /** 0–100. null esconde a barra. */
  progress?: number | null
}>(), { counter: '', progress: null })
</script>
