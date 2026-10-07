<template>
  <input
    v-model="model"
    class="w-full rounded-field border-[1.5px] bg-night-2 font-body text-night-ink outline-none placeholder:text-night-placeholder focus:border-lima focus:shadow-focus-lima"
    :class="[size === 'lg' ? 'h-14 px-4 text-[17px]' : 'h-[52px] px-3.5 text-base', error ? 'border-night-error' : 'border-night-3']"
    :aria-invalid="error || undefined"
  >
</template>

<script setup lang="ts">
withDefaults(defineProps<{ size?: 'md' | 'lg', error?: boolean }>(), { size: 'md', error: false })
const model = defineModel<string>({ default: '' })
</script>
