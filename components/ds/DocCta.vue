<template>
  <div class="mb-10 break-inside-avoid rounded-card border-[1.5px] border-tinta bg-papel px-[26px] py-6 shadow-stamp-tinta">
    <div class="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-roxo-700">{{ eyebrow }}</div>
    <div class="mb-2 font-display text-[22px] font-bold leading-[1.2]">{{ title }}</div>
    <p class="m-0 mb-3.5 text-tinta-2">{{ text }}</p>
    <a :href="href" class="font-semibold">{{ button }} →</a>
  </div>
</template>

<script setup lang="ts">
defineProps<{ eyebrow: string, title: string, text: string, button: string, href: string }>()
</script>
