// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Calcule suas chances de trampar na gringa',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Responda 18 perguntas e veja sua nota de 0 a 100, onde está travando e as 3 coisas que mais aumentam suas chances de trampar na gringa.' },
        { name: 'theme-color', content: '#0B0F0D' },
        { property: 'og:title', content: 'Calcule suas chances de trampar na gringa' },
        { property: 'og:description', content: 'Quiz gratuito da Trampar na Gringa: sua nota de 0 a 100 em 3 minutos.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo-circle.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Geist:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Instrument+Serif:ital@1&display=swap' },
      ],
    },
  },

  css: ['~/assets/styles/tokens/index.css'],

  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    cssPath: false,
    viewer: false,
  },

  components: [
    { path: '~/components/ds', pathPrefix: false, prefix: 'Ds' },
    { path: '~/components', ignore: ['ds/**'] },
  ],

  runtimeConfig: {
    // Só no servidor. Preencher via env (NUXT_KIT_API_KEY etc.), nunca no código.
    kitApiKey: '',
    kitApiBase: 'https://api.kit.com/v4', // trocar só em teste local
    kitFormId: '',
    kitTagFaixa1: '',
    kitTagFaixa2: '',
    kitTagFaixa3: '',
    public: {
      // NUXT_PUBLIC_* — URLs ainda a confirmar (ver AGENTS.md, "Pendências do negócio").
      quizUrl: 'https://chances.tramparnagringa.com.br',
      ctaUrlComunidade: '#comunidade',
      ctaUrlPremium: '#premium',
      ctaUrlMentoria: '#mentoria',
      privacyUrl: '#privacidade',
    },
  },

  routeRules: {
    '/': { prerender: true },
    // Roadmaps: ferramenta interna para gerar os PDFs, fora de busca.
    '/roadmap/**': { prerender: true, headers: { 'X-Robots-Tag': 'noindex, nofollow' } },
  },
})
