<template>
  <DsScreen kind="intro">
    <DsEyebrow>Quiz gratuito · 3 minutos</DsEyebrow>
    <DsHeading as="h1" size="hero">Calcule suas chances de trampar na <DsAccent>gringa</DsAccent></DsHeading>
    <DsText size="lede">Responda 18 perguntas rápidas sobre sua experiência, seu inglês e seus processos seletivos. No final você vê sua nota de 0 a 100, onde está travando e as 3 coisas que mais aumentam suas chances agora.</DsText>
    <DsGrid>
      <DsPillarCard num="01" title="Experiência" text="Quanto tempo você tem na área." />
      <DsPillarCard num="02" title="Inglês" text="Ler, escrever, ouvir e falar." />
      <DsPillarCard num="03" title="Processos seletivos" text="Ser encontrado, se candidatar e passar nas entrevistas." />
    </DsGrid>
    <DsRow gap="lg">
      <DsButton @click="$emit('start')">Calcular minhas chances →</DsButton>
      <DsText size="small" as="div">Mais de 8.000 profissionais já fizeram.</DsText>
    </DsRow>
  </DsScreen>
</template>

<script setup lang="ts">
defineEmits<{ start: [] }>()
</script>
