<template>
  <div class="grid gap-2.5" :class="wide ? '[grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]' : 'grid-cols-1'" role="group">
    <slot />
  </div>
</template>

<script setup lang="ts">
/** wide: grade de 2+ colunas, para perguntas com mais de 5 opções. */
withDefaults(defineProps<{ wide?: boolean }>(), { wide: false })
</script>
