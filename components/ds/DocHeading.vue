<template>
  <h2
    class="m-0 font-display font-semibold leading-[1.2] tracking-[-0.015em]"
    :class="appendix ? 'mb-3 text-[22px] break-before-page' : 'mb-5 text-[26px]'"
  >
    <slot />
  </h2>
</template>

<script setup lang="ts">
/** appendix: começa numa página nova na impressão. */
withDefaults(defineProps<{ appendix?: boolean }>(), { appendix: false })
</script>
