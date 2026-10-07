<template>
  <div class="flex flex-wrap items-end gap-5">
    <div class="font-display text-[clamp(88px,18vw,144px)] font-extrabold leading-[0.85] tracking-[-0.04em] text-lima">{{ score }}</div>
    <div class="flex flex-col gap-1 pb-2">
      <div class="font-mono text-[13px] text-night-ink-3">de 100</div>
      <div class="font-serif text-[clamp(28px,4.4vw,38px)] italic leading-none text-night-ink">{{ tier }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ score: number, tier: string }>()
</script>
