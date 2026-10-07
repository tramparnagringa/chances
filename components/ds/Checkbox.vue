<template>
  <label class="flex cursor-pointer items-start gap-3 pt-0.5">
    <input
      v-model="model"
      type="checkbox"
      class="mt-0.5 h-5 w-5 flex-none accent-lima"
      :aria-invalid="error || undefined"
    >
    <span class="text-sm leading-normal text-night-ink-2 [&_a]:text-night-ink [&_a]:underline [&_a]:decoration-lima hover:[&_a]:text-lima"><slot /></span>
  </label>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ error?: boolean }>(), { error: false })
const model = defineModel<boolean>({ default: false })
</script>
