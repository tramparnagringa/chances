<template>
  <footer class="border-t border-night-3">
    <div class="mx-auto flex max-w-[720px] flex-wrap justify-between gap-2 px-5 py-[18px] text-[13px] text-night-ink-3">
      <span>© Trampar na Gringa</span>
      <a :href="privacyUrl" target="_blank" rel="noopener" class="text-night-ink-3 underline decoration-lima hover:text-lima">Política de Privacidade</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ privacyUrl: string }>()
</script>
