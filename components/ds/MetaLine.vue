<template>
  <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-night-ink-3">
    <span v-for="item in items" :key="item.label">
      <span class="font-mono text-xs uppercase tracking-[0.1em]">{{ item.label }}</span> · {{ item.text }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ items: { label: string, text: string }[] }>()
</script>
