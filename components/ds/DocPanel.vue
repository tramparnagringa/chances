<template>
  <div class="mb-[18px] break-inside-avoid rounded-card border border-regra bg-papel px-6 py-[22px]">
    <div class="mb-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-roxo-700">{{ eyebrow }}</div>
    <ul class="m-0 list-disc pl-5 text-tinta-2">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{ eyebrow: string, items: string[] }>()
</script>
