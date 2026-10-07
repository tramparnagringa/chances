<template>
  <span class="font-serif font-normal italic" :class="tone === 'paper' ? 'text-roxo-700' : 'text-lima'"><slot /></span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'night' | 'paper' }>(), { tone: 'night' })
</script>
