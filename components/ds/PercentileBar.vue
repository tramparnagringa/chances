<template>
  <div class="flex flex-col gap-3.5">
    <div class="relative h-[34px]" aria-hidden="true">
      <div class="absolute inset-x-0 top-3.5 h-1.5 rounded-pill bg-[linear-gradient(90deg,#2A2F2B,#6A1A74_55%,#C9F23D)]" />
      <div class="absolute top-2 h-[18px] w-0.5 bg-night-ink-3" :style="{ left: `${median}%` }" />
      <div class="absolute top-1 -ml-[13px] h-[26px] w-[26px] rounded-pill border-2 border-night bg-lima" :style="{ left: `${score}%` }" />
    </div>
    <div class="flex justify-between font-mono text-xs text-night-ink-3" aria-hidden="true">
      <span>0</span><span>mediana {{ median }}</span><span>100</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ score: number, median: number }>()
</script>
