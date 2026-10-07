<template>
  <p class="m-0 text-tinta-2 [&_strong]:text-tinta" :class="sizes[size]"><slot /></p>
</template>

<script setup lang="ts">
type Size = 'lede' | 'body' | 'last'
withDefaults(defineProps<{ size?: Size }>(), { size: 'body' })

const sizes: Record<Size, string> = {
  lede: 'mb-7 text-[17px]',
  body: 'mb-3',
  last: 'mb-10',
}
</script>
