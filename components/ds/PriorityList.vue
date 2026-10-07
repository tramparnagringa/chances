<template>
  <ol class="m-0 flex list-none flex-col border-t border-night-3 p-0">
    <li
      v-for="(item, i) in items"
      :key="item.title"
      class="grid grid-cols-[44px_minmax(0,1fr)] gap-3 border-b border-night-3 py-5"
    >
      <div class="font-display text-[30px] font-extrabold leading-none text-roxo-300" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</div>
      <div class="flex flex-col gap-1.5">
        <div class="font-display text-lg font-semibold">{{ item.title }}</div>
        <div class="text-[15px] leading-[1.6] text-night-ink-2 [text-wrap:pretty]">{{ item.text }}</div>
      </div>
    </li>
  </ol>
</template>

<script setup lang="ts">
defineProps<{ items: { title: string, text: string }[] }>()
</script>
