<template>
  <DsScreen kind="result">
    <DsStack :gap="4.5">
      <DsEyebrow>Seu preparo para trampar na gringa</DsEyebrow>
      <DsScore :score="result.score" :tier="result.tier.name" />
      <DsText size="result">{{ nome ? `${nome}. ` : '' }}{{ result.tier.text }}</DsText>
      <DsCard>
        <DsText size="card" as="div">Sua nota é maior que a de <strong>{{ result.percentile }}%</strong> das mais de 8.000 pessoas que fizeram o quiz. Ela mostra seu preparo hoje, não garante vaga.</DsText>
        <DsPercentileBar :score="result.score" :median="result.median" />
      </DsCard>
    </DsStack>

    <DsStack>
      <DsHeading as="h3">Sua nota em cada pilar</DsHeading>
      <DsPillarScore v-for="p in result.pillars" :key="p.label" v-bind="p" />
    </DsStack>

    <DsCallout eyebrow="Onde você trava" :title="result.block.title" :text="result.block.text" />

    <DsStack>
      <DsHeading as="h3">Suas 3 prioridades</DsHeading>
      <DsText size="help">Os pontos com menor nota nas suas respostas, em ordem.</DsText>
      <DsPriorityList :items="result.priorities" />
    </DsStack>

    <DsMetaLine :items="result.meta" />

    <DsCard stamp>
      <DsEyebrow>Próximo passo pra você</DsEyebrow>
      <DsHeading as="h3" size="cta">{{ result.cta.title }}</DsHeading>
      <DsText size="card">{{ result.cta.text }}</DsText>
      <DsCheckList :items="result.cta.bullets" size="sm" />
      <div>
        <DsButton :href="result.cta.url" target="_blank">{{ result.cta.button }} →</DsButton>
      </div>
    </DsCard>

    <DsStack align="start">
      <DsText>Boa sorte nos próximos passos!<br>✌️</DsText>
      <DsButton variant="ghost-underline" @click="$emit('restart')">Refazer o quiz</DsButton>
    </DsStack>
  </DsScreen>
</template>

<script setup lang="ts">
import type { useQuiz } from '~/composables/useQuiz'

defineProps<{
  result: ReturnType<typeof useQuiz>['result']['value']
  nome: string
}>()
defineEmits<{ restart: [] }>()
</script>
