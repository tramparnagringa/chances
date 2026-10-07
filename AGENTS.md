# AGENTS.md — Quiz "Calcule suas chances" (Trampar na Gringa)

Guia para qualquer agente de codificação (Claude Code, Codex CLI, Cursor etc.) trabalhando neste repositório.

## O que é

Funil de captação de leads da TNG, em página única:

1. **Entrada** → 2. **Quiz** (18 perguntas, uma por tela) → 3. **Captura** (nome, email, WhatsApp e aceite LGPD; é o gate) → 4. **Resultado** (nota 0–100, faixa, percentil, nota por pilar, "onde você trava", 3 prioridades e um CTA por faixa).
5. Em paralelo, o lead entra no **Kit** (kit.com, antigo ConvertKit), que manda por email o **roadmap em PDF da faixa** (3 versões).

O protótipo e a especificação completa estão em `docs/Quiz com funil de email (2)/design_handoff_quiz_chances/`. Leia o `README.md` de lá antes de mexer em tela ou em lógica.

- `Quiz TNG v2 escuro.dc.html`: as 4 telas e a lógica (classe `Component`).
- `Roadmap por Faixa.dc.html`: documento imprimível, tema claro, com 3 variações (prop `faixa`).
- `Guia Como Calculamos (opcional).dc.html`: página pública opcional explicando a conta.
- `quiz-data.json`: **fonte de verdade** de perguntas, pontos, quantis e textos.
- `screenshots/`: referência visual (desktop, 924px).
- `support.js`, `doc-page.js`, `_ds/`: runtime do protótipo. **Não levar para produção.**

O protótipo é referência de design, não código para copiar. A fidelidade é alta: cores, tipografia, espaçamento e **copy são finais**. Não reescreva textos sem pedir ao Adal.

## Stack

Espelha `~/Work/tramparnagringa.com.br` (site principal), com uma diferença: **sem `@nuxt/content` e sem banco de dados**.

- Nuxt 4 (Vue 3, Composition API, `<script setup lang="ts">`), Node 24 (`.nvmrc`; a Vercel exige 24.x), **npm** (nunca yarn/pnpm).
- Tailwind CSS via `@nuxtjs/tailwindcss`, **confinado a `components/ds/**`** (mesma regra do site principal, ver abaixo).
- Tokens de marca em CSS custom properties (`assets/styles/tokens/*.css`), expostos como aliases semânticos no `tailwind.config.ts`.
- Deploy na **Vercel** (preset detectado automaticamente pelo Nitro). `/` e `/roadmap/*` são pré-renderizados; só `/api/lead` roda como função.
- Testes com Vitest (`tests/`).
- Fontes do Google Fonts: Bricolage Grotesque (display), Geist (corpo), JetBrains Mono (eyebrows/números), Instrument Serif itálico (acento, no máximo uma vez por tela).
- Sem banco: perguntas, textos e roadmaps vêm de `shared/data/*.json` e as respostas em andamento ficam no `localStorage` do navegador. O lead só sai do navegador para o Kit.

## Estrutura

```
app.vue
nuxt.config.ts
tailwind.config.ts
assets/styles/tokens/   # tokens night (quiz) e paper (roadmap)
components/ds/          # único lugar com Tailwind; vira <Ds*> automaticamente
components/quiz/        # telas do funil (Intro, Question, Capture, Result), só compõem Ds*
composables/useQuiz.ts  # estado (step, qi, answers) + persistência em localStorage + envio do lead
shared/                 # usado pela página E pelo servidor (alias #shared)
  utils/scoring.ts      # funções puras: nota, pilares, percentil, faixa, prioridades, trava
  utils/validation.ts   # regex de email (mesma no cliente e no servidor)
  data/quiz-data.json   # fonte de verdade das perguntas e pontos (cópia do handoff)
  data/tiers.json       # textos das faixas e dos CTAs do resultado
  data/roadmaps.json    # conteúdo dos 3 roadmaps
pages/index.vue         # o quiz
pages/roadmap/[faixa].vue  # roadmap imprimível (primeiros-passos | em-construcao | pronto-para-acelerar)
server/api/lead.post.ts # valida, recalcula a nota e envia ao Kit (chave só no servidor)
tests/scoring.test.ts   # paridade com o protótipo nos perfis DEMO
public/                 # logo; PDFs gerados vão para public/roadmaps/
scripts/check-no-tailwind-outside-ds.js
scripts/generate-roadmap-pdfs.js
```

## Regra do Design System: Tailwind confinado

Igual ao site principal: **classes Tailwind só existem em `components/ds/**`**. Páginas e `components/quiz/**` só compõem componentes `Ds*` (ex. `DsButton`, `DsOption`, `DsCard`).

- `tailwind.config.ts` tem `content: ['./components/ds/**/*.vue']`, então classe usada fora dali não é gerada.
- `npm run lint:ds` falha se aparecer classe com jeito de Tailwind fora de `components/ds/**`.
- Arquivos em `components/ds/` não levam o prefixo no nome: `components/ds/Button.vue` vira `<DsButton>`.
- Precisa de um layout que nenhum `Ds*` cobre? Crie ou estenda um componente em `components/ds/`.
- Quando um componente for equivalente a um do site principal (`~/Work/tramparnagringa.com.br/components/ds/`), siga a mesma API de props, para facilitar portar depois.

## Tokens

Há duas superfícies, ambas definidas no handoff (`README.md` → "Design Tokens"):

- **Night (quiz):** bg `#0B0F0D`, superfície `#181C19`, borda `#2A2F2B`, texto `#F2EEDC` / `#B7B1A0` / `#8F897A`, placeholder `#6E6A5E`, erro `#F08A6E`, texto sobre roxo `#E9DCEB`.
- **Paper (roadmap):** cream `#F5EFE2`, paper `#FBF8F1`, ink `#141414` / `#3A352E` / `#6E665B`, regra `#D9D0BD`.
- **Marca:** roxo 900 `#2A002E`, 700 `#430049`, 500 `#6A1A74`, 300 `#B59BB7`, 100 `#F2E6F4`. Acento lime `#C9F23D` (hover `#D8F76E`). Coral só no logo.
- Raios: campos 8px, cards 14px, botões 999px. Sombra "stamp" `4px 4px 0 <cor>`.
- Movimento: `cubic-bezier(.2,.7,.2,1)`; hover 120ms, lift 200ms, progresso 320ms. Sem bounce.

Atenção: o fundo do quiz (`#0B0F0D`, quase preto esverdeado) **não** é o `--ameixa #120014` do site principal. É intencional no handoff; não "corrija" para o token do site.

## Lógica do quiz

Toda a conta fica em `shared/utils/scoring.ts`, em funções puras e testáveis, lendo `shared/data/quiz-data.json`. O servidor usa as mesmas funções para recalcular a nota antes de mandar ao Kit: nunca confie na nota vinda do cliente. Resumo (detalhes no README do handoff):

- Pilares: Experiência (`exp`, máx. 21), Inglês (`nivel`…`fala`, máx. 102), Processos (`pedra`…`entrevista`, máx. 102). As perguntas `area`, `funcao` e de 14 a 18 não pontuam.
- Nota = `round(100 × (min(1, exp/21) + min(1, eng/102) + min(1, proc/102)) / 3)`.
- Faixas: 0–44 Primeiros passos (CTA Comunidade), 45–64 Em construção (CTA Premium), 65–100 Pronto para acelerar (CTA Mentoria).
- Percentil: interpolação linear nos 21 quantis, limitado a 1–99.
- Prioridades: as 3 menores razões `pontos / máximo da pergunta` entre `leitura, escrita, escuta, fala, passiva, ativa, convites, entrevista`, com sort estável.
- "Onde você trava": texto pela opção escolhida em `pedra`.
- Textos das faixas e dos CTAs: `shared/data/tiers.json` (no protótipo estavam só em `result()`).

Qualquer mudança de pontuação ou de copy começa no JSON, nunca no componente. `npm test` checa os 3 perfis de demo do protótipo (`DEMO.baixo/medio/alto`) contra os valores que a lógica original do `.dc.html` produz. Se o handoff mudar de propósito, atualize os valores esperados.

## Comportamento obrigatório (fácil de esquecer)

- Clicar numa opção marca e avança sozinho após 220ms. Teclas A–H ou 1–9 escolhem (ignorar com foco em input).
- Pergunta 2 é texto livre: botão desabilitado com campo vazio; Enter envia.
- `window.scrollTo(0,0)` a cada troca de tela.
- WhatsApp **sem máscara** e de qualquer país (decisão do Adal, 2026-10-07). `normalizeWhatsapp()` em `shared/utils/validation.ts` valida e grava em E.164: com `+`/`00` mantém o código do país; sem código e com 10–11 dígitos assume Brasil (+55).
- Erros da captura só aparecem ao enviar e somem quando o campo é editado.
- **O resultado aparece mesmo se o envio ao Kit falhar.** Registre o erro, não bloqueie a pessoa.
- Ao enviar: `dataLayer.push({ event: 'quiz_lead', score, faixa })`.
- Nada vai para o Kit sem `consent: true`. Guarde data/hora e versão do texto do aceite no payload.
- Persistir respostas em `localStorage` (o protótipo não faz; chave `tng-quiz-chances-v1`). Só o primeiro nome é guardado, não email nem WhatsApp. Limpar ao clicar "Refazer o quiz".
- Honeypot `empresa` no payload: se vier preenchido, o servidor responde ok e descarta.
- Em dev, `/?tela=resultado&perfil=medio` (ou `tela=quiz&q=5`, `tela=captura`; perfis `baixo|medio|alto`) abre direto numa tela, como os Tweaks do protótipo.

## Integração com o Kit

**Decisões do Adal (2026-10-07):** Nuxt com servidor na Vercel; leads entram no **formulário da newsletter** (6613793, "TNG Inline"; a API do Kit não cria formulários); segmentação por **3 tags** (uma por faixa). A chave fica em env var e **nunca vai para o cliente**. O site principal expõe o segredo do ConvertKit no navegador (ver AGENTS.md de lá); não repetir isso aqui.

`server/api/lead.post.ts` valida tudo (inclusive cada resposta), recalcula a nota e faz, nesta ordem, com a API v4 (`X-Kit-Api-Key`):

1. `POST /v4/subscribers` só com `email_address` e `first_name`. **Não mandar os custom fields aqui:** com mais de 10 campos o Kit cria o inscrito de forma assíncrona (202) e os passos 3 e 4 falhariam porque ele ainda não existe.
2. `PUT /v4/subscribers/{id}` com os custom fields.
3. `POST /v4/forms/{NUXT_KIT_FORM_ID}/subscribers` com `referrer` (o Kit extrai as UTMs).
4. `POST /v4/tags/{tag da faixa}/subscribers`: a automação dessa tag manda o roadmap certo.

Custom fields: **reaproveita os do quiz antigo (TNG Score)**, um por pergunta, mapeados em `KIT_FIELD_BY_QUESTION` no endpoint: `area`, `current_situation_role` (cargo), `current_situation_experience_years`, `english_level`, `english_reading/writing/listening/speaking`, `hiring_status` ("onde você trava"), `hiring_optimized_profile`, `hiring_search_attitude`, `hiring_interview_invites`, `hiring_interview_performance`, `current_situation_regime`, `current_situation_compensation`, `current_situation_self_evaluation`, `goal_compensation`, `goal_working_type`. Notas 0–100 em `tng_score_total`, `tng_score_experience`, `tng_score_english`, `tng_score_hiring`. Novos (sem equivalente antigo): `whatsapp` (E.164), `tng_faixa`, `lgpd_consent_at`, `lgpd_consent_versao`. As respostas vão como rótulo da opção; se o quiz antigo gravava outro formato (código, pontos), os dois convivem no mesmo campo.

- Sem `NUXT_KIT_*` configurado (dev), o endpoint valida, loga e responde `{ ok: true, kit: 'skipped' }`.
- Falha no Kit: loga e responde 502. O cliente ignora e mostra o resultado mesmo assim.
- IDs no Kit: formulário `6613793`; tags `24372850` [QUIZ CHANCES] Primeiros passos, `24372851` Em construção, `24372852` Pronto para acelerar.
- Como o formulário é o da newsletter, o lead do quiz também entra no que estiver ligado a ele (sequência, automações). Se esse formulário tiver double opt-in, a API dispara o email de confirmação.
- Campos criados por engano em 2026-10-07 e sem uso (podem ser apagados no Kit): `tng_score`, `score_experiencia`, `score_ingles`, `score_processos`, `cargo`, `trava_principal`, `renda_atual`, `renda_meta`, `plano`.
- `CONSENT_VERSION` em `composables/useQuiz.ts`: mudou o texto do checkbox LGPD, mude a versão.
- `NUXT_KIT_API_BASE` existe só para apontar para um mock em teste local.

## Roadmaps (PDF)

`pages/roadmap/[faixa].vue` recria o `Roadmap por Faixa.dc.html` em tema paper. Na impressão: A4, margem 0.75in, apêndice em página nova e rodapé repetido via margin boxes do `@page` (Chrome 131+).

`npm run roadmaps:pdf` (com o app rodando; `--base` muda a URL) usa o Chrome/Chromium instalado para gerar `public/roadmaps/<slug>.pdf`. Os links dos PDFs vêm do `runtimeConfig`: **gere de novo depois de configurar as URLs reais**, senão o PDF sai com os placeholders. Essas rotas são ferramenta interna: `noindex` e não linkadas no site.

## Configuração (env / runtimeConfig)

Tudo em `nuxt.config.ts` → `runtimeConfig`, sobrescrito por env (ver `.env.example`; em produção, no painel da Vercel).

- Servidor: `NUXT_KIT_API_KEY`, `NUXT_KIT_FORM_ID`, `NUXT_KIT_TAG_FAIXA1..3`.
- Público (`NUXT_PUBLIC_*`): `quizUrl`, `ctaUrlComunidade`, `ctaUrlPremium`, `ctaUrlMentoria` (WhatsApp), `privacyUrl`. Hoje com placeholder; nunca hardcode em componente.

## Comandos

- `npm run dev`: dev server
- `npm run build`: build de produção (na Vercel o preset é automático; local, `NITRO_PRESET=node-server npm run build` e `node .output/server/index.mjs`)
- `npm test`: testes de pontuação (Vitest)
- `npm run typecheck`
- `npm run lint:ds`: checa Tailwind fora de `components/ds/**`
- `npm run roadmaps:pdf`: gera os 3 PDFs

Rodar `build` ou `typecheck` com `npm run dev` ligado regenera o `.nuxt` e pode travar o dev server em "Reloading Nuxt". Reinicie o dev depois.

## Pendências do negócio

- URLs reais: Comunidade, Premium, WhatsApp da mentoria, política de privacidade, URL pública do quiz (domínio: este repo se chama `changes.tramparnagringa.com.br`, confirmar se é "chances").
- Preços não aparecem de propósito.
- No Kit: criar as 3 automações (tag da faixa → email com o roadmap) e escrever os 3 emails de entrega. Tags e campos já existem.
- Na Vercel: cadastrar as env vars do Kit (ver "Configuração") e fazer redeploy.
- Analytics: o quiz só faz `dataLayer.push`. Falta decidir quais tags (GA, Meta Pixel etc., como no site principal) entram aqui.

## Convenções

- Documentação, commits e comentários em português, como no site principal.
- Git: branch `main`, sem remoto configurado ainda.
