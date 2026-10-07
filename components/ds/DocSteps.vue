<template>
  <ol class="m-0 mb-10 list-none border-b border-regra p-0">
    <li
      v-for="(step, i) in steps"
      :key="step.title"
      class="grid break-inside-avoid grid-cols-[52px_minmax(0,1fr)] gap-3.5 border-t border-regra py-5"
    >
      <div class="font-display text-[34px] font-extrabold leading-none text-roxo-300" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</div>
      <div>
        <h3 class="m-0 mb-2 font-display text-[19px] font-semibold">{{ step.title }}</h3>
        <ul class="m-0 mb-2.5 list-disc pl-[18px] text-tinta-2">
          <li v-for="a in step.actions" :key="a">{{ a }}</li>
        </ul>
        <p class="m-0 text-sm text-tinta-2" :class="step.resource ? 'mb-1' : ''"><strong class="text-tinta">Você terminou quando</strong> {{ step.done }}</p>
        <p v-if="step.resource" class="m-0 text-sm text-roxo-700"><strong>Recurso TNG:</strong> {{ step.resource }}</p>
      </div>
    </li>
  </ol>
</template>

<script setup lang="ts">
defineProps<{
  steps: { title: string, actions: string[], done: string, resource?: string }[]
}>()
</script>
