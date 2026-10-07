<template>
  <label class="flex flex-col gap-1.5">
    <span class="text-sm font-semibold text-night-ink">{{ label }}</span>
    <slot />
    <DsErrorText v-if="error">{{ error }}</DsErrorText>
  </label>
</template>

<script setup lang="ts">
/** error: mensagem a mostrar, ou vazio. */
withDefaults(defineProps<{ label: string, error?: string }>(), { error: '' })
</script>
