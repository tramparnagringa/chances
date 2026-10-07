<template>
  <component
    :is="as"
    class="flex flex-col rounded-card bg-night-2"
    :class="stamp ? 'gap-[18px] border-[1.5px] border-night-3 p-[clamp(20px,4vw,32px)] shadow-stamp-lima' : 'gap-3.5 border border-night-3 p-5'"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
/** stamp: borda 1.5px e sombra lime (formulário e CTA). */
withDefaults(defineProps<{ stamp?: boolean, as?: string }>(), { stamp: false, as: 'div' })
</script>
