<template>
  <div class="flex min-h-screen flex-col bg-night font-body text-night-ink">
    <slot name="header" />
    <main class="mx-auto w-full max-w-[720px] flex-1 px-5">
      <slot />
    </main>
    <slot name="footer" />
  </div>
</template>
