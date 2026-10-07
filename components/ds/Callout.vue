<template>
  <div class="flex flex-col gap-3 rounded-card bg-roxo-700 p-[clamp(22px,4vw,32px)] text-creme">
    <div class="font-mono text-xs uppercase tracking-[0.18em] text-lima">{{ eyebrow }}</div>
    <div class="font-display text-[clamp(21px,3.4vw,26px)] font-semibold leading-[1.25] tracking-[-0.01em] [text-wrap:balance]">{{ title }}</div>
    <div class="text-base leading-[1.6] text-on-roxo [text-wrap:pretty]">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ eyebrow: string, title: string, text: string }>()
</script>
