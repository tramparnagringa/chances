# Handoff: Quiz "Calcule suas chances de trampar na gringa" + Roadmaps por faixa (Trampar na Gringa)

## Overview
Funil web responsivo de captação de leads para a Trampar na Gringa (TNG):

1. **Entrada**: a pessoa entende o quiz e começa.
2. **Quiz**: 18 perguntas, uma por tela.
3. **Captura**: nome, email, WhatsApp e aceite LGPD. Este é o gate, e o resultado só aparece depois do envio.
4. **Resultado na tela**: nota de 0 a 100, faixa, percentil, nota por pilar, "onde você trava", 3 prioridades e um CTA que muda conforme a faixa.
5. **Email (via Kit)**: entrega o **roadmap em PDF da faixa da pessoa** (3 versões).

O quiz precisa ser integrado a um **formulário do Kit (kit.com, antigo ConvertKit)**, de modo que cada lead entre na sequência que envia o roadmap certo.

## About the Design Files
Os arquivos deste pacote são **referências de design feitas em HTML**: protótipos que mostram o visual e o comportamento esperados. **Não são código de produção para copiar.** A tarefa é **recriar esses designs no ambiente do projeto de destino**, usando os padrões dele. Se ainda não houver um projeto, escolha o framework mais adequado. Sugestão: uma página estática (Astro, Next.js ou Vite + React) mais uma função serverless para o envio ao Kit.

Os arquivos `.dc.html` abrem direto no navegador (dependem de `support.js`, que está na mesma pasta). Toda a lógica está na classe `Component` dentro de `<script data-dc-script>`, em cada arquivo. **A lógica do quiz também está extraída em `quiz-data.json`, que é a fonte de verdade para pontuação e copy.**

## Fidelity
**High-fidelity.** As cores, a tipografia, os espaçamentos e a copy são finais. Recrie fiel ao protótipo, com a copy exatamente como está.

---

## Screens / Views (quiz — `Quiz TNG v2 escuro.dc.html`)

Tema escuro. Coluna única centralizada com `max-width: 720px`, padding lateral de 20px e layout fluido (mobile-first). Fundo da página `#0B0F0D`.

### Header (fixo no topo)
- `position: sticky; top: 0`. Fundo `rgba(11,15,13,.85)` com `backdrop-filter: blur(10px)`, borda inferior de 1px `#2A2F2B`.
- Conteúdo: logo `assets/logo-circle.svg` (32×32), texto "Trampar na Gringa" (Bricolage Grotesque 700, 16px, `#F2EEDC`) e, à direita, durante o quiz, o contador "N/18" (JetBrains Mono 12px, uppercase, tracking .12em, `#8F897A`).
- Durante o quiz: barra de progresso de 3px com trilho `#2A2F2B` e preenchimento `#C9F23D`, largura = (pergunta atual + respondida?1:0)/18, transição de 320ms com `cubic-bezier(.2,.7,.2,1)`.

### 1. Entrada
- Padding vertical `clamp(40px, 9vw, 96px)` no topo e 64px embaixo. Gap de 28px entre os blocos.
- Eyebrow: "Quiz gratuito · 3 minutos". JetBrains Mono 12px, uppercase, tracking .18em, `#C9F23D`, 500.
- H1: "Calcule suas chances de trampar na *gringa*". Bricolage Grotesque 700, `clamp(38px, 7vw, 64px)`, line-height 1.04, tracking -0.025em, `#F2EEDC`. A palavra "gringa" vai em Instrument Serif itálico 400, `#C9F23D`.
- Parágrafo: "Responda 18 perguntas rápidas sobre sua experiência, seu inglês e seus processos seletivos. No final você vê sua nota de 0 a 100, onde está travando e as 3 coisas que mais aumentam suas chances agora." Geist `clamp(17px, 2.2vw, 19px)`, lh 1.6, `#B7B1A0`, max-width 560px.
- 3 cards de pilares: grid `repeat(auto-fit, minmax(180px, 1fr))`, gap 12px. Card com fundo `#181C19`, borda 1px `#2A2F2B`, radius 14px, padding 18×20. Número em mono 12px `#8F897A`, título em Bricolage 600 18px, descrição em 15px `#B7B1A0`:
  - 01 Experiência — "Quanto tempo você tem na área."
  - 02 Inglês — "Ler, escrever, ouvir e falar."
  - 03 Processos seletivos — "Ser encontrado, se candidatar e passar nas entrevistas."
- Botão primário "Calcular minhas chances →": fundo `#C9F23D`, texto `#141414`, Geist 600 17px, padding 16×30, radius 999px, min-height 52px. Hover: fundo `#D8F76E`. Active: `translateY(1px)`.
- Prova social ao lado: "Mais de 8.000 profissionais já fizeram." 14px `#8F897A`.

### 2. Pergunta (uma por tela)
- Eyebrow com o nome da seção (Perfil / Inglês / Processos seletivos / Momento atual / Objetivo), em mono 12px `#C9F23D`, seguido de "· N de M" (posição dentro da seção) em `#8F897A`.
- Pergunta: Bricolage 600, `clamp(26px, 4.6vw, 38px)`, lh 1.15, tracking -0.02em.
- Texto de ajuda opcional (só na pergunta 17): 15px `#8F897A`.
- **Opções** (escolha única): botões em largura total, coluna única. Quando a pergunta tem mais de 5 opções (pergunta 1), usar grid `minmax(240px, 1fr)`. Gap de 10px.
  - Padrão: fundo `#181C19`, borda 1.5px `#2A2F2B`, radius 14px, padding 14×18, min-height 60px, texto Geist 16px `#F2EEDC`.
  - À esquerda, uma badge com a letra (A, B, C…) de 28×28, radius 8, mono 12px, fundo `#2A2F2B`, texto `#B7B1A0`.
  - Hover: `translateY(-2px)`, sombra `0 2px 0 rgba(20,20,20,.04), 0 8px 24px -8px rgba(20,20,20,.18)`, borda `#C9F23D`.
  - Selecionada: fundo `#430049`, borda `#C9F23D`, badge com fundo `#C9F23D` e texto `#141414`.
  - Ao clicar, a opção é marcada e o quiz **avança sozinho depois de 220ms**.
  - Teclado: as teclas A–H ou 1–9 escolhem a opção (ignorado quando o foco está num input).
- **Pergunta de texto** (pergunta 2, cargo): input de 56px de altura, fundo `#181C19`, borda 1.5px `#2A2F2B`, radius 8. No foco, borda `#C9F23D` mais `box-shadow 0 0 0 3px rgba(201,242,61,.25)`. Botão "Continuar →", desabilitado com opacidade .4 enquanto o campo estiver vazio. Enter envia.
- Rodapé: "← Voltar" à esquerda (volta uma pergunta; na primeira, volta pra Entrada) e a dica "Dica: use as teclas A–E" à direita.
- Ao trocar de tela: `window.scrollTo(0,0)`.

### 3. Captura (gate)
- Eyebrow: "Pronto, terminou". H2: "Suas chances estão calculadas." (Bricolage 700, `clamp(30px, 5.4vw, 46px)`).
- Texto: "Seu resultado aparece aqui na hora. No email você recebe um roadmap feito pra sua faixa, com as etapas pra subir sua nota. Na tela, você vai ver:"
- 3 itens com ✓ em `#C9F23D`:
  - "Sua nota de 0 a 100 e como ela se compara à de mais de 8.000 profissionais"
  - "Sua nota em experiência, inglês e processos seletivos"
  - "As 3 prioridades que mais aumentam suas chances no seu caso"
- Card do formulário (estilo "stamp"): fundo `#181C19`, borda 1.5px `#2A2F2B`, radius 14, `box-shadow: 4px 4px 0 #C9F23D`, padding `clamp(20px, 4vw, 32px)`, gap de 18px entre os campos.
  - Label: 14px 600. Input de 52px, fundo `#181C19`, borda 1.5px `#2A2F2B` (`#F08A6E` quando há erro), radius 8, 16px.
  - **Nome**: placeholder "Como você quer ser chamado", `autocomplete=given-name`. Erro: "Conta pra gente seu nome." (mínimo de 2 caracteres)
  - **Email**: placeholder "voce@email.com", `type=email`. Validação `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`. Erro: "Confere o email, parece que tem algo errado."
  - **WhatsApp**: placeholder "(11) 91234-5678", `type=tel`, com máscara BR enquanto digita: `(DD) NNNN-NNNN` ou `(DD) NNNNN-NNNN`, até 11 dígitos. Válido com 10 a 13 dígitos. Erro: "Coloca o número com DDD."
  - **Checkbox LGPD** (obrigatório, `accent-color #C9F23D`): "Aceito receber conteúdos da Trampar na Gringa por email e WhatsApp e concordo com a [Política de Privacidade]. Sem spam, e dá para sair quando quiser." Erro: "Precisamos do seu aceite pra continuar."
  - Botão em largura total: "Ver minhas chances →". Durante o envio, mostra "Calculando…".
  - Os erros aparecem só ao tentar enviar e somem quando a pessoa edita o campo.
- "← Revisar respostas" volta pra última pergunta.

### 4. Resultado
Gap de 40px entre os blocos.
- Eyebrow: "Seu preparo para trampar na gringa".
- Nota: número grande em Bricolage 800, `clamp(88px, 18vw, 144px)`, lh .85, `#C9F23D`. Ao lado: "de 100" (mono 13px) e o nome da faixa em Instrument Serif itálico `clamp(28px, 4.4vw, 38px)`.
- Parágrafo: "{PrimeiroNome}. {texto da faixa}" (18px `#B7B1A0`).
- Card de percentil (fundo `#181C19`): "Sua nota é maior que a de **X%** das mais de 8.000 pessoas que fizeram o quiz. Ela mostra seu preparo hoje, não garante vaga." Abaixo, uma régua de 0 a 100: trilho de 6px com gradiente `#2A2F2B → #6A1A74 → #C9F23D`, um traço na mediana (55) e um marcador circular de 26px `#C9F23D` (borda 2px `#0B0F0D`) na posição da nota. Legendas "0 · mediana 55 · 100".
- "Sua nota em cada pilar": 3 cards, cada um com nome, % em mono `#C9F23D`, barra de 8px (trilho `#2A2F2B`, preenchimento `#C9F23D`) e o texto do pilar. O card de Inglês também mostra 4 chips (Leitura, Escrita, Escuta, Fala) com a % de cada um. Cores dos chips: abaixo de 40%, `#2A2F2B`/`#F2EEDC`; de 40 a 69%, `#430049`/`#F2EEDC`; 70% ou mais, `#C9F23D`/`#141414`.
- "Onde você trava": card com fundo `#430049`, eyebrow em `#C9F23D`, título em Bricolage 600 `clamp(21px, 3.4vw, 26px)` e texto `#E9DCEB`.
- "Suas 3 prioridades": lista numerada 01, 02, 03 (Bricolage 800 30px `#B59BB7`) com título e ação, separada por hairlines `#2A2F2B`.
- Linha de contexto: "HOJE · {renda} · {regime}" e "META · {renda desejada} · {plano}".
- Card de CTA (stamp com sombra lime): eyebrow "Próximo passo pra você", título, texto, 3 bullets ✓ e botão lime com link.
- Fechamento: "Boa sorte nos próximos passos! ✌️" e o link "Refazer o quiz" (zera as respostas e volta pra Entrada).

### Footer
Hairline em cima. "© Trampar na Gringa" à esquerda e o link "Política de Privacidade" à direita, em 13px `#8F897A`.

---

## Lógica (ver `quiz-data.json`)

- **Pilares e máximos:** Experiência (pergunta 3, até 21), Inglês (perguntas 4 a 8, até 102), Processos (perguntas 9 a 13, até 102). As perguntas 1, 2 e 14 a 18 não pontuam e servem de contexto.
- Os pontos seguem a sequência de Fibonacci: 2, 3, 5, 8, 13, 21, 34.
- **Nota** = `round(100 × (min(1, exp/21) + min(1, eng/102) + min(1, proc/102)) / 3)`.
- **Faixas:**
  - 0–44: Primeiros passos → CTA Comunidade
  - 45–64: Em construção → CTA Premium
  - 65–100: Pronto para acelerar → CTA Mentoria
- **Percentil:** interpolação linear nos 21 quantis de `percentileQuantiles` (extraídos de 8.273 respostas históricas), limitado a 1–99.
- **Texto do pilar:** primeiro limite maior que a razão do usuário (Experiência: < 0,5; Inglês: < 0,4 / < 0,7; Processos: < 0,35 / < 0,6).
- **Prioridades:** as 3 menores razões `pontos / máximo da pergunta` entre `leitura, escrita, escuta, fala, passiva, ativa, convites, entrevista`. Em caso de empate, vale a ordem da lista (sort estável).
- **Onde você trava:** o texto vem da opção escolhida na pergunta `pedra` (índice 0 a 4).
- **Textos da faixa e dos CTAs:** estão em `result()`, no arquivo do quiz.

## State Management
`step` ('intro' | 'quiz' | 'captura' | 'resultado'), `qi` (índice da pergunta), `answers` (`{ [id]: índice da opção | texto }`), `text` (input da pergunta de texto), `lead` (`{ nome, email, whats, consent }`), `err` (por campo) e `sending`.

Recomendado: guardar as respostas em `localStorage` pra que a pessoa não perca o progresso se recarregar a página. O protótipo não faz isso.

---

## Integração com o Kit

> Confirme os detalhes de endpoint e autenticação na documentação atual do Kit (developers.kit.com). O desenho abaixo é a recomendação de fluxo, não uma especificação da API.

**Fluxo recomendado**
1. No Kit, crie os **custom fields**: `whatsapp`, `tng_score`, `tng_faixa`, `score_experiencia`, `score_ingles`, `score_processos`, `area`, `cargo`, `trava_principal`, `renda_atual`, `renda_meta`, `plano`.
2. Escolha **uma** destas formas de segmentar:
   - **A (mais simples):** 3 formulários no Kit, um por faixa. Cada formulário dispara a sua sequência/automação, que entrega o roadmap correspondente.
   - **B:** 1 formulário e 3 tags (`quiz-faixa-1`, `quiz-faixa-2`, `quiz-faixa-3`). Uma automação do Kit, acionada pela tag, envia o roadmap certo.
3. Ao enviar a captura, o front faz POST para uma **função serverless** (ex.: `/api/lead`). Ela valida os dados, inscreve no formulário ou aplica a tag com a API do Kit e grava os custom fields. **A API key/secret fica só no servidor.**
4. Mostre o resultado **mesmo se a chamada ao Kit falhar**. Registre o erro, mas não bloqueie a pessoa (o protótipo já se comporta assim).
5. Envie o evento `quiz_lead` pro `dataLayer`/analytics com `score` e `faixa` (o protótipo já envia `{event:'quiz_lead', score}`).

**Payload que o protótipo envia (POST JSON pro `webhookUrl`)**
```json
{
  "nome": "Ana", "email": "ana@email.com", "whats": "(11) 91234-5678", "whatsapp": "11912345678",
  "consent": true,
  "answers": { "area": "TI / Desenvolvimento", "funcao": "Desenvolvedor backend", "exp": "3 a 5 anos", "...": "rótulo da opção escolhida" },
  "score": 47, "scoreExperiencia": 62, "scoreIngles": 51, "scoreProcessos": 28,
  "createdAt": "2026-10-07T12:00:00.000Z"
}
```
Acrescente `faixa` ("Primeiros passos" | "Em construção" | "Pronto para acelerar") no payload de produção.

**LGPD:** guarde o aceite (data e hora, versão do texto, IP se possível). Não envie nada pro Kit sem `consent: true`.

---

## Roadmaps (`Roadmap por Faixa.dc.html`)

É um documento imprimível, em tema claro, pra exportar em **3 PDFs**. A versão muda pela prop `faixa` (no protótipo, pelo painel Tweaks). Pra gerar cada PDF, abra o arquivo, escolha a faixa e use Imprimir → Salvar como PDF. Página Letter/A4 com margem de 0.75in e rodapé repetido.

Cada versão tem:
- o título (montar a base / sair do improviso / da final à proposta);
- "onde você está", "o que costuma travar nessa fase" e "o que evitar agora";
- 4 etapas, cada uma com ações, "Você terminou quando…" e o recurso da TNG;
- o CTA da faixa;
- um bloco "Refaça o diagnóstico daqui a 30 dias" com o link do quiz;
- um apêndice com a conta da nota (incluindo a explicação de Fibonacci).

**Links a configurar** (props): `quizUrl`, `ctaUrlComunidade`, `ctaUrlPremium`, `ctaUrlMentoria`. No quiz, as props são `webhookUrl`, `ctaUrl*` e `privacyUrl`.

Hospede os PDFs (no Kit ou num CDN) e coloque os links no email de entrega de cada sequência.

`Guia Como Calculamos (opcional).dc.html`: guia anterior, que explica todas as perguntas e pontos. Use só se quiserem uma página pública "como calculamos".

---

## Design Tokens
- **Brand:** purple-900 `#2A002E`, purple-700 `#430049` (primária), purple-500 `#6A1A74`, purple-300 `#B59BB7`, purple-100 `#F2E6F4`
- **Acento:** lime `#C9F23D` (hover `#D8F76E`). Coral `#FF6B35` está no logo e não é usado na UI.
- **Night (quiz):** bg `#0B0F0D`, superfície `#181C19`, borda `#2A2F2B`, texto `#F2EEDC`, texto 2 `#B7B1A0`, texto 3 `#8F897A`, placeholder `#6E6A5E`, erro `#F08A6E`, texto sobre roxo `#E9DCEB`
- **Paper (roadmap):** cream `#F5EFE2`, paper `#FBF8F1`, ink `#141414`, ink-2 `#3A352E`, ink-3 `#6E665B`, regra `#D9D0BD`
- **Fontes (Google Fonts):** Bricolage Grotesque (display, 600–800), Geist (corpo), Instrument Serif itálico (acento, uma vez por tela), JetBrains Mono (eyebrows e números)
- **Radius:** campos 8px, cards 14px, botões 999px
- **Sombras:** stamp `4px 4px 0 <cor>` (lime no escuro, ink no claro); hover dos cards `0 2px 0 rgba(20,20,20,.04), 0 8px 24px -8px rgba(20,20,20,.18)`
- **Movimento:** easing `cubic-bezier(.2,.7,.2,1)`; hover 120ms, lift 200ms, progresso 320ms. Sem bounce.
- **Espaçamento:** escala 4pt (4/8/12/16/24/32/48/64/96)
- Todos os tokens estão em `_ds/…/colors_and_type.css`.

## Assets
- `assets/logo-circle.svg`: marca TNG (bússola em disco roxo), do design system da marca.
- Sem fotos nem ícones externos. Os ícones são caracteres (✓ → ✌️).

## Files
- `Quiz TNG v2 escuro.dc.html`: quiz completo (as 4 telas mais a lógica).
- `Roadmap por Faixa.dc.html`: os 3 roadmaps (prop `faixa`).
- `Guia Como Calculamos (opcional).dc.html`: guia da conta.
- `quiz-data.json`: perguntas, opções, pontos, quantis, textos de prioridade, de trava e de pilar.
- `support.js`, `doc-page.js`, `_ds/…`: runtime pra abrir os protótipos localmente (não levar pra produção).
- `assets/logo-circle.svg`
- `screenshots/`: telas do quiz (01 entrada, 02–03 perguntas, 04 captura, 05–08 resultado, viewport desktop de 924px) e o topo de cada roadmap.

## Pendências do negócio
- URLs reais: Comunidade, Premium, WhatsApp da mentoria, política de privacidade e URL pública do quiz.
- Os preços não aparecem de propósito (confirmar antes de incluir).
- Escolher a forma de segmentar no Kit (A ou B) e escrever os 3 emails de entrega.
