<template>
  <DsPage>
    <template #header>
      <DsSiteHeader
        :counter="quiz.step.value === 'quiz' ? `${quiz.qi.value + 1}/${quiz.total}` : ''"
        :progress="quiz.step.value === 'quiz' ? quiz.progress.value : null"
      />
    </template>

    <QuizIntroScreen v-if="quiz.step.value === 'intro'" @start="quiz.start" />
    <QuizQuestionScreen
      v-else-if="quiz.step.value === 'quiz'"
      :key="quiz.question.value.id"
      :question="quiz.question.value"
      :answer="quiz.answers.value[quiz.question.value.id]"
      :section-step="quiz.sectionStep.value"
      @pick="quiz.pick"
      @text="quiz.answerText"
      @back="quiz.back"
    />
    <QuizCaptureScreen
      v-else-if="quiz.step.value === 'captura'"
      :sending="quiz.sending.value"
      :privacy-url="config.privacyUrl"
      @submit="quiz.submitLead"
      @back="quiz.back"
    />
    <QuizResultScreen
      v-else
      :result="quiz.result.value"
      :nome="quiz.nome.value"
      @restart="quiz.restart"
    />

    <template #footer>
      <DsSiteFooter :privacy-url="config.privacyUrl" />
    </template>
  </DsPage>
</template>

<script setup lang="ts">
const config = useRuntimeConfig().public
const quiz = useQuiz()
</script>
