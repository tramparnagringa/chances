<template>
  <div class="flex flex-col gap-1.5 rounded-card border border-night-3 bg-night-2 px-5 py-[18px]">
    <div class="font-mono text-xs text-night-ink-3">{{ num }}</div>
    <div class="font-display text-lg font-semibold">{{ title }}</div>
    <div class="text-[15px] leading-normal text-night-ink-2">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ num: string, title: string, text: string }>()
</script>
