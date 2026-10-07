<template>
  <ul class="m-0 flex list-none flex-col p-0 text-night-ink-2" :class="size === 'sm' ? 'gap-1.5 text-[15px]' : 'gap-2 text-base'">
    <li v-for="item in items" :key="item" class="flex gap-2.5">
      <span class="font-bold text-lima" aria-hidden="true">✓</span>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ items: string[], size?: 'sm' | 'md' }>(), { size: 'md' })
</script>
