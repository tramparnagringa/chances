<template>
  <h1 class="m-0 mb-[18px] font-display text-[40px] font-bold leading-[1.05] tracking-[-0.025em] text-roxo-900">
    <slot /> <DsAccent tone="paper">{{ accent }}</DsAccent>
  </h1>
</template>

<script setup lang="ts">
defineProps<{ accent: string }>()
</script>
