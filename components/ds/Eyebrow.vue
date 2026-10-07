<template>
  <div class="flex flex-wrap items-center gap-2.5">
    <span class="font-mono text-xs font-medium uppercase tracking-[0.18em] text-lima"><slot /></span>
    <span v-if="$slots.meta" class="font-mono text-xs text-night-ink-3">· <slot name="meta" /></span>
  </div>
</template>
