<template>
  <!-- Na tela: folha sobre fundo neutro. Na impressão: só o conteúdo, e o
       rodapé vai para as margin boxes do @page (ver pages/roadmap). -->
  <div class="min-h-screen bg-[#EDEAE3] px-4 py-12 print:min-h-0 print:bg-transparent print:p-0">
    <article class="mx-auto max-w-[8.27in] rounded-[10px] bg-white px-[0.75in] py-[0.75in] font-body text-[15px] leading-[1.65] text-tinta shadow-[0_1px_3px_rgba(0,0,0,.08),0_12px_32px_-12px_rgba(0,0,0,.18)] max-sm:px-6 max-sm:py-8 print:max-w-none print:rounded-none print:p-0 print:shadow-none [&_a]:text-roxo-700 [&_a]:underline [&_a]:decoration-lima [&_a]:decoration-2 [&_a]:underline-offset-[3px] hover:[&_a]:text-roxo-500">
      <slot />
      <footer class="mt-12 flex justify-between border-t border-regra pt-2.5 font-mono text-xs text-tinta-3 print:hidden">
        <span>Trampar na Gringa</span>
        <span>{{ footer }}</span>
      </footer>
    </article>
  </div>
</template>

<script setup lang="ts">
defineProps<{ footer: string }>()
</script>
