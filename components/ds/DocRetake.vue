<template>
  <div class="mb-11 flex break-inside-avoid flex-col gap-3 rounded-card bg-roxo-700 p-[26px] text-creme">
    <div class="font-display text-[22px] font-bold leading-[1.2] tracking-[-0.015em]">{{ title }}</div>
    <div class="text-[15px] text-on-roxo">{{ text }}</div>
    <div>
      <a :href="href" class="!inline-block rounded-pill bg-lima px-6 py-3 text-[15px] font-semibold !text-tinta !no-underline">{{ button }} →</a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string, text: string, button: string, href: string }>()
</script>
