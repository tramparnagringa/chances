<template>
  <DsDocPage :footer="`Roadmap · ${roadmap.name}`">
    <DsDocHeader>Roadmap · {{ roadmap.name }} · {{ roadmap.range }}</DsDocHeader>
    <DsDocTitle :accent="roadmap.titleAccent">Seu roadmap:</DsDocTitle>
    <DsDocText size="lede">{{ roadmap.intro }}</DsDocText>

    <DsDocPanel eyebrow="O que costuma travar nessa fase" :items="roadmap.blockers" />
    <DsDocText size="last"><strong>O que evitar agora:</strong> {{ roadmap.avoid }}</DsDocText>

    <DsDocHeading>As 4 etapas</DsDocHeading>
    <DsDocSteps :steps="roadmap.steps" />

    <DsDocCta v-bind="roadmap.cta" :href="url(roadmap.cta.ctaUrlKey)" />

    <DsDocRetake
      title="Refaça o diagnóstico daqui a 30 dias."
      text="Compare com a nota de hoje. Ela não garante vaga, mas mostra se o seu trabalho está mexendo nos pilares certos."
      button="Refazer o diagnóstico"
      :href="config.quizUrl"
    />

    <DsDocHeading appendix>Apêndice: como sua nota é calculada</DsDocHeading>
    <DsDocText>Das 18 perguntas, 11 valem pontos, divididas em 3 pilares: Experiência (1 pergunta, até 21 pontos), Inglês (5 perguntas, até 102) e Processos seletivos (5 perguntas, até 102). Cada pilar vira uma porcentagem, e a nota final é a média simples das três.</DsDocText>
    <DsDocText>Os pontos de cada resposta seguem a sequência de Fibonacci (2, 3, 5, 8, 13, 21, 34), em que cada número é a soma dos dois anteriores. Assim, cada degrau vale mais que o anterior: o que separa quem está pronto de quem está quase são os últimos degraus. As perguntas de fala e de entrevista vão até 34 pontos, porque é nelas que a vaga é decidida.</DsDocText>
    <DsDocText size="last">Faixas: 0 a 44, Primeiros passos · 45 a 64, Em construção · 65 a 100, Pronto para acelerar. Entre as mais de 8.000 pessoas que já fizeram o quiz, a nota do meio é 55.</DsDocText>
    <DsDocText>Boa sorte nos próximos passos!<br>✌️</DsDocText>
  </DsDocPage>
</template>

<script setup lang="ts">
// Versão imprimível de cada roadmap. Os PDFs saem daqui (npm run roadmaps:pdf).
import roadmaps from '#shared/data/roadmaps.json'

const route = useRoute()
const config = useRuntimeConfig().public
const roadmap = roadmaps.items.find(r => r.slug === route.params.faixa)
if (!roadmap) throw createError({ statusCode: 404, statusMessage: 'Roadmap não encontrado', fatal: true })

const url = (key: string) => {
  const v = (config as Record<string, unknown>)[key]
  return typeof v === 'string' ? v : '#'
}

// Rodapé repetido em cada página do PDF, via margin boxes do @page (Chrome 131+).
const footerCss = (s: string) => JSON.stringify(s)
useHead({
  title: `Seu roadmap · ${roadmap.name}`,
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
  style: [{
    innerHTML: `
      @page {
        size: A4;
        margin: 0.75in 0.75in 0.9in;
        @bottom-left { content: ${footerCss('Trampar na Gringa')}; font: 500 9pt 'JetBrains Mono', monospace; color: #6E665B; border-top: 1px solid #D9D0BD; vertical-align: top; padding-top: 10px; }
        @bottom-right { content: ${footerCss(`Roadmap · ${roadmap.name}`)}; font: 500 9pt 'JetBrains Mono', monospace; color: #6E665B; border-top: 1px solid #D9D0BD; vertical-align: top; padding-top: 10px; }
      }
      @media print { html, body { background: #fff !important; } }
    `,
  }],
})

</script>
