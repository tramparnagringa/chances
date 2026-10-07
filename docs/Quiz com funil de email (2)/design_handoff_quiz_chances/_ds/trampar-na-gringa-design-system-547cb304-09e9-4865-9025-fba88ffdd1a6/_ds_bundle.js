/* @ds-bundle: {"format":3,"namespace":"TramparNaGringaDesignSystem_547cb3","components":[],"sourceHashes":{"ui_kits/marketing/App.jsx":"1dd4824d6665","ui_kits/marketing/Footer.jsx":"53a2396f3d02","ui_kits/marketing/HeroSubscribe.jsx":"78a2e0fe8836","ui_kits/marketing/IssueArticle.jsx":"79811aa0389d","ui_kits/marketing/IssueRow.jsx":"a7cca7870879","ui_kits/marketing/Logo.jsx":"de184d4c3d5e","ui_kits/marketing/ProductCards.jsx":"3b50bb420469","ui_kits/marketing/TopNav.jsx":"bbdbb8627d9c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TramparNaGringaDesignSystem_547cb3 = window.TramparNaGringaDesignSystem_547cb3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing/App.jsx
try { (() => {
// App.jsx — stitches everything together

const ISSUES = [{
  id: "037",
  date: "25 de Novembro de 2024",
  title: "Recebi uma oferta de trabalho no exterior — como me preparar para trabalhar remotamente",
  cover: "gradient1"
}, {
  id: "036",
  date: "11 de Novembro de 2024",
  title: "Como pensar e falar inglês com confiança para Trampar na Gringa",
  cover: "gradient2"
}, {
  id: "035",
  date: "12 de Agosto de 2024",
  title: "Como saber se você está pronto para conseguir uma vaga no exterior",
  cover: "gradient3"
}, {
  id: "034",
  date: "5 de Agosto de 2024",
  title: "Por que é tão difícil passar em um processo seletivo internacional",
  cover: "gradient4"
}, {
  id: "033",
  date: "28 de Julho de 2024",
  title: "Como se preparar para entrevistas de live coding",
  cover: "gradient5"
}, {
  id: "032",
  date: "24 de Julho de 2023",
  title: "4 passos para turbinar sua compreensão em inglês",
  cover: "gradient2"
}, {
  id: "031",
  date: "17 de Julho de 2023",
  title: "5 passos para se preparar bem para entrevistas",
  cover: "gradient1"
}, {
  id: "030",
  date: "19 de Junho de 2023",
  title: "Como encontrar vagas do seu número",
  cover: "gradient3"
}, {
  id: "029",
  date: "14 de Junho de 2023",
  title: "4 erros que eliminam qualquer currículo",
  cover: "gradient4"
}, {
  id: "028",
  date: "29 de Maio de 2023",
  title: "Por que você deveria fazer entrevistas em inglês",
  cover: "gradient5"
}];
function App() {
  const [route, setRoute] = React.useState({
    name: "home"
  });
  const go = (name, payload) => {
    setRoute({
      name,
      payload
    });
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };
  const openIssue = issue => go("issue", issue);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": `Marketing · ${route.name}`
  }, /*#__PURE__*/React.createElement(TopNav, {
    current: route.name === "issue" ? "home" : route.name,
    onNavigate: id => go(id)
  }), route.name === "home" && /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(HeroSubscribe, null), /*#__PURE__*/React.createElement(IssueList, {
    title: "Edi\xE7\xF5es recentes",
    issues: ISSUES.slice(0, 4),
    onOpen: openIssue,
    onSeeAll: () => go("archive")
  }), /*#__PURE__*/React.createElement(ProductCards, null)), route.name === "archive" && /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 760,
      margin: "0 auto",
      padding: "64px 28px 16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--tng-font-mono)",
      fontSize: 12,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--tng-green-700)"
    }
  }, "Newsletter \xB7 arquivo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--tng-font-display)",
      fontSize: "clamp(40px, 5vw, 64px)",
      lineHeight: 1.02,
      letterSpacing: "-0.025em",
      color: "var(--tng-green-900)",
      fontWeight: 700,
      margin: "12px 0 12px"
    }
  }, "Todas as edi\xE7\xF5es."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      color: "var(--tng-ink-3)",
      maxWidth: 540
    }
  }, "Toda segunda de manh\xE3 desde 2023, uma estrat\xE9gia passo a passo para voc\xEA evoluir na carreira. ", ISSUES.length, " edi\xE7\xF5es publicadas.")), /*#__PURE__*/React.createElement(IssueList, {
    title: "Arquivo completo",
    issues: ISSUES,
    onOpen: openIssue
  })), route.name === "issue" && /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(IssueArticle, {
    issue: route.payload,
    onBack: () => go("archive")
  })), route.name === "curso" && /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: "72px 28px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--tng-font-mono)",
      fontSize: 12,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--tng-green-700)"
    }
  }, "O Curso \xB7 M\xE9todo Trampar na Gringa"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--tng-font-display)",
      fontSize: "clamp(40px, 5.5vw, 64px)",
      lineHeight: 1.02,
      letterSpacing: "-0.025em",
      fontWeight: 700,
      color: "var(--tng-green-900)",
      margin: "12px 0 16px"
    }
  }, "Masterize processos seletivos e conquiste empregos no exterior."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--tng-ink-2)",
      lineHeight: 1.6,
      maxWidth: 580
    }
  }, "Para profissionais de tecnologia com capacidade t\xE9cnica e n\xEDvel de ingl\xEAs no m\xEDnimo intermedi\xE1rio. Conte\xFAdo, comunidade e a prepara\xE7\xE3o que ningu\xE9m te deu."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 13,
      fontStyle: "italic",
      color: "var(--tng-ink-3)"
    }
  }, "(Placeholder \u2014 copy this layout for the real curso landing page.)")), route.name === "cvplus" && /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: "72px 28px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--tng-font-mono)",
      fontSize: 12,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--tng-green-700)"
    }
  }, "CV+ \xB7 O curr\xEDculo que funciona"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--tng-font-display)",
      fontSize: "clamp(40px, 5.5vw, 64px)",
      lineHeight: 1.02,
      letterSpacing: "-0.025em",
      fontWeight: 700,
      color: "var(--tng-green-900)",
      margin: "12px 0 16px"
    }
  }, "3.500+ profissionais revolucionaram a carreira."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--tng-ink-2)",
      lineHeight: 1.6,
      maxWidth: 580
    }
  }, "Um curr\xEDculo otimizado e um LinkedIn que se destaca. Inclui agente de IA para criar, editar, analisar e personalizar o seu CV."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 13,
      fontStyle: "italic",
      color: "var(--tng-ink-3)"
    }
  }, "(Placeholder \u2014 same layout system, swap the photo and the proof.)")), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: id => go(id)
  }));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
// Footer.jsx — night surface, sign-off, social

const footerStyles = {
  wrap: {
    background: "var(--tng-night)",
    color: "var(--tng-night-ink)",
    paddingTop: 80,
    paddingBottom: 40,
    marginTop: 80
  },
  inner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 28px"
  },
  signoff: {
    textAlign: "center",
    marginBottom: 48
  },
  signoffSerif: {
    fontFamily: "var(--tng-font-serif)",
    fontStyle: "italic",
    fontSize: 38,
    color: "var(--tng-night-ink)",
    margin: "0 0 16px",
    lineHeight: 1.15,
    letterSpacing: "-0.01em"
  },
  peace: {
    fontSize: 56,
    lineHeight: 1
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
    gap: 40,
    paddingTop: 40,
    borderTop: "1px solid var(--tng-night-3)"
  },
  col: {
    display: "flex",
    flexDirection: "column",
    gap: 12
  },
  colHead: {
    fontFamily: "var(--tng-font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--tng-lime)",
    fontWeight: 500,
    marginBottom: 4
  },
  colLink: {
    color: "var(--tng-night-ink)",
    textDecoration: "none",
    fontSize: 14,
    cursor: "pointer"
  },
  about: {
    fontSize: 14,
    color: "var(--tng-night-ink2)",
    lineHeight: 1.55,
    maxWidth: 280
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 28,
    marginTop: 36,
    borderTop: "1px solid var(--tng-night-3)",
    fontSize: 12,
    color: "var(--tng-night-ink2)",
    fontFamily: "var(--tng-font-mono)",
    letterSpacing: "0.05em"
  },
  social: {
    display: "flex",
    gap: 14
  },
  socialA: {
    width: 32,
    height: 32,
    border: "1px solid var(--tng-night-3)",
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--tng-night-ink)",
    textDecoration: "none",
    fontSize: 14
  }
};
function Footer({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: footerStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.signoff
  }, /*#__PURE__*/React.createElement("p", {
    style: footerStyles.signoffSerif
  }, "Um grande abra\xE7o e at\xE9 a pr\xF3xima!"), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.peace
  }, "\u270C\uFE0F")), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.grid
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.col
  }, /*#__PURE__*/React.createElement(LogoLockup, {
    size: 56,
    dark: true
  }), /*#__PURE__*/React.createElement("p", {
    style: footerStyles.about
  }, "Programa de prepara\xE7\xE3o para processos seletivos internacionais. Sal\xE1rio em moeda forte e qualidade de vida."), /*#__PURE__*/React.createElement("div", {
    style: {
      ...footerStyles.social,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: footerStyles.socialA,
    title: "Instagram"
  }, "IG"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.socialA,
    title: "LinkedIn"
  }, "IN"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.socialA,
    title: "Threads"
  }, "TH"))), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.col
  }, /*#__PURE__*/React.createElement("span", {
    style: footerStyles.colHead
  }, "Conte\xFAdo"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink,
    onClick: () => onNavigate("home")
  }, "Newsletter"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink,
    onClick: () => onNavigate("archive")
  }, "Edi\xE7\xF5es anteriores"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink
  }, "Threads")), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.col
  }, /*#__PURE__*/React.createElement("span", {
    style: footerStyles.colHead
  }, "Produtos"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink
  }, "CV+"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink
  }, "O Curso"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink
  }, "Mentoria B2C"), /*#__PURE__*/React.createElement("a", {
    style: footerStyles.colLink
  }, "GVG \xB7 Guia da Vaga Gringa")), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.col
  }, /*#__PURE__*/React.createElement("span", {
    style: footerStyles.colHead
  }, "Newsletter"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...footerStyles.about,
      maxWidth: 220
    }
  }, "9.134+ profissionais recebem uma dica para aplicar agora. Toda segunda de manh\xE3."), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("home"),
    style: {
      marginTop: 8,
      background: "var(--tng-lime)",
      color: "var(--tng-green-900)",
      border: 0,
      fontWeight: 700,
      padding: "10px 16px",
      borderRadius: 999,
      fontSize: 13,
      cursor: "pointer",
      alignSelf: "flex-start",
      fontFamily: "var(--tng-font-body)"
    }
  }, "Assinar gr\xE1tis"))), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.bottom
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 \xB7 TRAMPAR NA GRINGA"), /*#__PURE__*/React.createElement("span", null, "contato@tramparnagringa.com.br"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HeroSubscribe.jsx
try { (() => {
// HeroSubscribe.jsx — hero block with display headline + email form

const heroStyles = {
  wrap: {
    maxWidth: 880,
    margin: "0 auto",
    padding: "96px 28px 64px",
    textAlign: "center",
    position: "relative"
  },
  peace: {
    fontSize: 56,
    lineHeight: 1,
    marginBottom: 24
  },
  eyebrow: {
    fontFamily: "var(--tng-font-mono)",
    fontSize: 12,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--tng-green-700)",
    marginBottom: 18
  },
  headline: {
    fontFamily: "var(--tng-font-display)",
    fontSize: "clamp(44px, 6vw, 78px)",
    lineHeight: 1.02,
    letterSpacing: "-0.025em",
    color: "var(--tng-green-900)",
    fontWeight: 700,
    margin: "0 0 20px",
    textWrap: "balance"
  },
  green: {
    color: "var(--tng-green-700)"
  },
  sub: {
    fontSize: 19,
    lineHeight: 1.5,
    color: "var(--tng-ink-2)",
    maxWidth: 580,
    margin: "0 auto 36px",
    textWrap: "pretty"
  },
  form: {
    display: "flex",
    border: "1.5px solid var(--tng-ink)",
    borderRadius: 999,
    overflow: "hidden",
    background: "var(--tng-paper)",
    boxShadow: "4px 4px 0 var(--tng-ink)",
    maxWidth: 460,
    margin: "0 auto"
  },
  input: {
    flex: 1,
    border: 0,
    background: "transparent",
    fontFamily: "var(--tng-font-body)",
    fontSize: 15,
    padding: "16px 22px",
    outline: "none",
    color: "var(--tng-ink)"
  },
  submit: {
    border: 0,
    background: "var(--tng-green-700)",
    color: "#fff",
    fontFamily: "var(--tng-font-body)",
    fontWeight: 600,
    fontSize: 15,
    padding: "0 24px",
    cursor: "pointer"
  },
  stat: {
    marginTop: 22,
    fontSize: 13,
    color: "var(--tng-ink-3)",
    fontFamily: "var(--tng-font-mono)",
    letterSpacing: "0.08em",
    textTransform: "uppercase"
  },
  thanks: {
    background: "var(--tng-green-100)",
    border: "1.5px solid var(--tng-green-300)",
    borderRadius: 14,
    padding: "18px 22px",
    fontSize: 15,
    color: "var(--tng-green-900)",
    maxWidth: 460,
    margin: "0 auto",
    boxShadow: "4px 4px 0 var(--tng-green-700)"
  }
};
function HeroSubscribe() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "subscribe",
    style: heroStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.peace
  }, "\u270C\uFE0F"), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.eyebrow
  }, "Newsletter \xB7 toda segunda"), /*#__PURE__*/React.createElement("h1", {
    style: heroStyles.headline
  }, "Sal\xE1rio em ", /*#__PURE__*/React.createElement("span", {
    style: heroStyles.green
  }, "moeda forte"), " e qualidade de vida."), /*#__PURE__*/React.createElement("p", {
    style: heroStyles.sub
  }, "Toda segunda de manh\xE3, uma estrat\xE9gia passo a passo para evoluir na carreira e conquistar trampo na gringa."), submitted ? /*#__PURE__*/React.createElement("div", {
    style: heroStyles.thanks
  }, /*#__PURE__*/React.createElement("strong", null, "Pronto."), " Te enviei um e-mail de confirma\xE7\xE3o. Clica no link e a pr\xF3xima edi\xE7\xE3o (TNG #038) chega segunda. \u270C\uFE0F") : /*#__PURE__*/React.createElement("form", {
    style: heroStyles.form,
    onSubmit: e => {
      e.preventDefault();
      if (email.trim()) setSubmitted(true);
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    style: heroStyles.input,
    placeholder: "seu melhor e-mail",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: heroStyles.submit
  }, "Assinar gr\xE1tis")), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.stat
  }, "9.134+ inscritos \xB7 gr\xE1tis \xB7 sem spam"));
}
window.HeroSubscribe = HeroSubscribe;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HeroSubscribe.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/IssueArticle.jsx
try { (() => {
// IssueArticle.jsx — reading view for a single newsletter

const articleStyles = {
  wrap: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "48px 28px 24px"
  },
  back: {
    fontFamily: "var(--tng-font-mono)",
    fontSize: 12,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--tng-green-700)",
    cursor: "pointer",
    marginBottom: 26,
    display: "inline-block",
    textDecoration: "none"
  },
  eyebrow: {
    fontFamily: "var(--tng-font-mono)",
    fontSize: 12,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--tng-green-700)",
    fontWeight: 500
  },
  title: {
    fontFamily: "var(--tng-font-display)",
    fontSize: "clamp(34px, 4vw, 50px)",
    lineHeight: 1.05,
    letterSpacing: "-0.025em",
    fontWeight: 700,
    color: "var(--tng-green-900)",
    margin: "12px 0 18px",
    textWrap: "balance"
  },
  meta: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 13,
    color: "var(--tng-ink-3)",
    marginBottom: 30
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 999,
    background: "linear-gradient(135deg,#FFD7A8 0%,#C57F4A 100%)",
    display: "inline-block"
  },
  cover: {
    width: "100%",
    height: 360,
    borderRadius: 18,
    marginBottom: 36,
    background: "linear-gradient(135deg,#E8B783 0%,#C57F4A 60%,#7A4B22 100%)",
    position: "relative",
    overflow: "hidden"
  },
  p: {
    margin: "0 0 18px",
    fontSize: 18,
    lineHeight: 1.65,
    color: "var(--tng-ink-2)"
  },
  h2: {
    fontFamily: "var(--tng-font-display)",
    fontSize: 30,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    color: "var(--tng-ink)",
    margin: "40px 0 14px"
  },
  h3: {
    fontFamily: "var(--tng-font-display)",
    fontSize: 22,
    fontWeight: 600,
    color: "var(--tng-ink)",
    margin: "28px 0 10px"
  },
  ul: {
    margin: "0 0 18px",
    paddingLeft: 22,
    color: "var(--tng-ink-2)"
  },
  li: {
    fontSize: 17,
    lineHeight: 1.6,
    margin: "4px 0"
  },
  quote: {
    fontFamily: "var(--tng-font-serif)",
    fontStyle: "italic",
    fontSize: 36,
    lineHeight: 1.15,
    color: "var(--tng-green-900)",
    borderLeft: "3px solid var(--tng-lime)",
    paddingLeft: 22,
    margin: "32px 0",
    letterSpacing: "-0.01em"
  },
  divider: {
    textAlign: "center",
    color: "var(--tng-rule)",
    margin: "40px 0",
    fontSize: 24
  },
  inline: {
    background: "var(--tng-green-100)",
    border: "1px solid var(--tng-green-300)",
    borderRadius: 14,
    padding: "20px 22px",
    margin: "26px 0",
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  inlineForm: {
    display: "flex",
    border: "1.5px solid var(--tng-green-700)",
    borderRadius: 999,
    overflow: "hidden",
    background: "var(--tng-paper)"
  },
  ps: {
    background: "var(--tng-paper)",
    border: "1.5px solid var(--tng-ink)",
    borderRadius: 18,
    padding: "26px 28px",
    margin: "44px 0 16px",
    boxShadow: "4px 4px 0 var(--tng-ink)"
  },
  psHead: {
    fontFamily: "var(--tng-font-mono)",
    fontSize: 12,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--tng-coral)",
    fontWeight: 700,
    marginBottom: 8
  }
};
function IssueArticle({
  issue,
  onBack
}) {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    style: articleStyles.wrap
  }, /*#__PURE__*/React.createElement("a", {
    style: articleStyles.back,
    onClick: onBack
  }, "\u2190 /newsletter/"), /*#__PURE__*/React.createElement("span", {
    style: articleStyles.eyebrow
  }, "TNG #", issue.id, " \xB7 NEWSLETTER"), /*#__PURE__*/React.createElement("h1", {
    style: articleStyles.title
  }, issue.title), /*#__PURE__*/React.createElement("div", {
    style: articleStyles.meta
  }, /*#__PURE__*/React.createElement("span", {
    style: articleStyles.avatar
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--tng-ink)"
    }
  }, "Adal Bueno"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, issue.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "6 min de leitura")), /*#__PURE__*/React.createElement("div", {
    style: articleStyles.cover
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,transparent 40%,rgba(11,15,13,.5) 100%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      bottom: 18,
      color: "var(--tng-cream)",
      fontFamily: "var(--tng-font-mono)",
      fontSize: 12,
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, "Cover \xB7 person at laptop, golden hour")), /*#__PURE__*/React.createElement("p", {
    style: articleStyles.p
  }, "Receber uma oferta de trabalho de uma empresa internacional \xE9 um grande passo para sua carreira."), /*#__PURE__*/React.createElement("p", {
    style: articleStyles.p
  }, "Al\xE9m de proporcionar uma remunera\xE7\xE3o mais alta e acesso a oportunidades globais, trabalhar para o exterior permite que voc\xEA tenha liberdade geogr\xE1fica, podendo exercer sua fun\xE7\xE3o de qualquer lugar \u2014 em casa ou at\xE9 enquanto viaja."), /*#__PURE__*/React.createElement("p", {
    style: articleStyles.p
  }, "Mas para aproveitar ao m\xE1ximo essa oportunidade, \xE9 essencial organizar-se bem."), /*#__PURE__*/React.createElement("h2", {
    style: articleStyles.h2
  }, "O que voc\xEA vai aprender"), /*#__PURE__*/React.createElement("ul", {
    style: articleStyles.ul
  }, /*#__PURE__*/React.createElement("li", {
    style: articleStyles.li
  }, "Como regularizar sua situa\xE7\xE3o como Pessoa Jur\xEDdica (PJ)."), /*#__PURE__*/React.createElement("li", {
    style: articleStyles.li
  }, "Os passos para formalizar o contrato com uma empresa internacional."), /*#__PURE__*/React.createElement("li", {
    style: articleStyles.li
  }, "Dicas sobre como organizar suas finan\xE7as e impostos."), /*#__PURE__*/React.createElement("li", {
    style: articleStyles.li
  }, "As melhores pr\xE1ticas para receber pagamentos em d\xF3lar, euro ou outras moedas.")), /*#__PURE__*/React.createElement("div", {
    style: articleStyles.inline
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--tng-font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--tng-green-700)",
      fontWeight: 600
    }
  }, "Inline subscribe"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: "var(--tng-green-900)"
    }
  }, "Se achar interessante receber artigos como este no seu e-mail, talvez fa\xE7a sentido assinar a newsletter:"), done ? /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--tng-green-700)"
    }
  }, "\u2713 Pronto. Confirma no e-mail.") : /*#__PURE__*/React.createElement("form", {
    style: articleStyles.inlineForm,
    onSubmit: e => {
      e.preventDefault();
      if (email.trim()) setDone(true);
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    placeholder: "seu@email.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    style: {
      flex: 1,
      border: 0,
      background: "transparent",
      fontFamily: "var(--tng-font-body)",
      fontSize: 15,
      padding: "13px 18px",
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      border: 0,
      background: "var(--tng-green-700)",
      color: "#fff",
      fontFamily: "var(--tng-font-body)",
      fontWeight: 600,
      fontSize: 14,
      padding: "0 22px",
      cursor: "pointer"
    }
  }, "Assinar gr\xE1tis"))), /*#__PURE__*/React.createElement("h2", {
    style: articleStyles.h2
  }, "1. Entenda o regime de contrata\xE7\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: articleStyles.p
  }, "Trabalhar para uma empresa internacional geralmente significa atuar como Pessoa Jur\xEDdica (PJ). Esse modelo \xE9 amplamente usado por empresas estrangeiras porque facilita a rela\xE7\xE3o contratual, permitindo flexibilidade para ambas as partes."), /*#__PURE__*/React.createElement("blockquote", {
    style: articleStyles.quote
  }, "\"Voc\xEA ter\xE1 autonomia para negociar seu valor e condi\xE7\xF5es \u2014 mas ser\xE1 respons\xE1vel pelos encargos tribut\xE1rios.\""), /*#__PURE__*/React.createElement("h3", {
    style: articleStyles.h3
  }, "O que voc\xEA precisa saber"), /*#__PURE__*/React.createElement("ul", {
    style: articleStyles.ul
  }, /*#__PURE__*/React.createElement("li", {
    style: articleStyles.li
  }, "Voc\xEA ser\xE1 um prestador de servi\xE7os, sem v\xEDnculo empregat\xEDcio."), /*#__PURE__*/React.createElement("li", {
    style: articleStyles.li
  }, "Benef\xEDcios tradicionais como f\xE9rias ou 13\xBA sal\xE1rio n\xE3o est\xE3o inclu\xEDdos."), /*#__PURE__*/React.createElement("li", {
    style: articleStyles.li
  }, "Conte com um contador especializado desde o primeiro m\xEAs.")), /*#__PURE__*/React.createElement("div", {
    style: articleStyles.divider
  }, "\u270C\uFE0F"), /*#__PURE__*/React.createElement("p", {
    style: articleStyles.p
  }, "Um grande abra\xE7o e at\xE9 a pr\xF3xima!"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...articleStyles.p,
      fontSize: 32
    }
  }, "\u270C\uFE0F"), /*#__PURE__*/React.createElement("div", {
    style: articleStyles.ps
  }, /*#__PURE__*/React.createElement("span", {
    style: articleStyles.psHead
  }, "P.S."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: 16,
      color: "var(--tng-ink-2)"
    }
  }, "O momento em que voc\xEA estiver pronto, existem 2 maneiras que eu posso te ajudar:"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: "0 0 0 20px",
      padding: 0,
      color: "var(--tng-ink-2)"
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: 6,
      fontSize: 16,
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--tng-green-700)"
    }
  }, "CV+"), " \u2014 o curr\xEDculo que funciona. 3.500+ profissionais j\xE1 passaram por ele."), /*#__PURE__*/React.createElement("li", {
    style: {
      fontSize: 16,
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--tng-green-700)"
    }
  }, "Mentoria B2C"), " ", "\u2014 programa 1:1 para seniores com ingl\xEAs intermedi\xE1rio+."))));
}
window.IssueArticle = IssueArticle;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/IssueArticle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/IssueRow.jsx
try { (() => {
// IssueRow.jsx + IssueList.jsx — newsletter archive rows

const issueRowStyles = {
  row: {
    display: "flex",
    gap: 22,
    padding: "22px 0",
    borderTop: "1px solid var(--tng-rule)",
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
    transition: "transform 200ms var(--tng-ease)"
  },
  cover: {
    width: 160,
    flexShrink: 0,
    height: 100,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative"
  },
  body: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: 0
  },
  eyebrow: {
    fontFamily: "var(--tng-font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--tng-green-700)",
    fontWeight: 500
  },
  title: {
    margin: "8px 0 0",
    fontFamily: "var(--tng-font-display)",
    fontWeight: 600,
    fontSize: 22,
    lineHeight: 1.2,
    letterSpacing: "-0.015em",
    color: "var(--tng-ink)",
    textWrap: "balance"
  },
  link: {
    color: "var(--tng-green-700)",
    fontWeight: 500,
    fontSize: 14,
    marginTop: 6
  }
};
const COVERS = {
  gradient1: "linear-gradient(135deg,#E8B783 0%,#C57F4A 60%,#7A4B22 100%)",
  gradient2: "linear-gradient(135deg,#C9F23D 0%,#6DBF8E 50%,#0E5C3A 100%)",
  gradient3: "linear-gradient(135deg,#F0E2C4 0%,#C6A982 60%,#7A5A38 100%)",
  gradient4: "linear-gradient(135deg,#A6C6B0 0%,#3D7A5A 70%,#062B1C 100%)",
  gradient5: "linear-gradient(135deg,#FFD7A8 0%,#FF6B35 60%,#9A2A14 100%)"
};
function IssueRow({
  issue,
  onOpen
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    style: {
      ...issueRowStyles.row,
      transform: hover ? "translateX(2px)" : "none"
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => onOpen(issue)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...issueRowStyles.cover,
      background: COVERS[issue.cover] || COVERS.gradient1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,transparent 50%,rgba(11,15,13,.4) 100%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: issueRowStyles.body
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: issueRowStyles.eyebrow
  }, "TNG #", issue.id, " \xB7 ", issue.date), /*#__PURE__*/React.createElement("h3", {
    style: issueRowStyles.title
  }, issue.title)), /*#__PURE__*/React.createElement("span", {
    style: issueRowStyles.link
  }, "Ler edi\xE7\xE3o", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--tng-font-mono)"
    }
  }, "\u2192"))));
}
const issueListStyles = {
  section: {
    maxWidth: 760,
    margin: "0 auto",
    padding: "48px 28px"
  },
  header: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 12
  },
  eyebrow: {
    fontFamily: "var(--tng-font-mono)",
    fontSize: 12,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--tng-ink-3)"
  },
  more: {
    fontSize: 14,
    color: "var(--tng-green-700)",
    cursor: "pointer",
    fontWeight: 500
  },
  bottom: {
    borderBottom: "1px solid var(--tng-rule)"
  }
};
function IssueList({
  title,
  issues,
  onOpen,
  onSeeAll
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: issueListStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: issueListStyles.header
  }, /*#__PURE__*/React.createElement("span", {
    style: issueListStyles.eyebrow
  }, title), onSeeAll && /*#__PURE__*/React.createElement("a", {
    style: issueListStyles.more,
    onClick: onSeeAll
  }, "Veja edi\xE7\xF5es anteriores \u2192")), /*#__PURE__*/React.createElement("div", {
    style: issueListStyles.bottom
  }, issues.map(iss => /*#__PURE__*/React.createElement(IssueRow, {
    key: iss.id,
    issue: iss,
    onOpen: onOpen
  }))));
}
Object.assign(window, {
  IssueRow,
  IssueList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/IssueRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Logo.jsx
try { (() => {
// Logo.jsx — TNG official mark (compass needle on purple disc)

function Logo({
  size = 48,
  variant = "circle"
}) {
  const src = variant === "appicon" ? "assets/logo-appicon.svg" : "assets/logo-mark.svg";
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Trampar na Gringa",
    style: {
      width: size,
      height: size,
      display: "block"
    }
  });
}

// Optional lockup: mark + stacked wordmark
function LogoLockup({
  size = 48,
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: size
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--tng-font-display)",
      fontWeight: 800,
      fontSize: size * 0.38,
      letterSpacing: "0.02em",
      color: dark ? "var(--tng-night-ink)" : "var(--tng-ink)",
      textTransform: "uppercase"
    }
  }, "trampar na"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--tng-font-display)",
      fontWeight: 800,
      fontSize: size * 0.46,
      letterSpacing: "0.02em",
      color: dark ? "var(--tng-cream)" : "var(--tng-purple-700)",
      textTransform: "uppercase"
    }
  }, "gringa")));
}
Object.assign(window, {
  Logo,
  LogoLockup
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Logo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ProductCards.jsx
try { (() => {
// ProductCards.jsx — "2 maneiras de te ajudar" tripwire

const productStyles = {
  wrap: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: "72px 28px"
  },
  header: {
    textAlign: "center",
    marginBottom: 36
  },
  eyebrow: {
    fontFamily: "var(--tng-font-mono)",
    fontSize: 12,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--tng-coral)",
    fontWeight: 600
  },
  h2: {
    fontFamily: "var(--tng-font-display)",
    fontSize: 38,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    color: "var(--tng-ink)",
    margin: "10px 0 12px",
    textWrap: "balance"
  },
  sub: {
    fontSize: 16,
    color: "var(--tng-ink-3)",
    maxWidth: 520,
    margin: "0 auto"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24
  },
  card: {
    background: "var(--tng-paper)",
    border: "1.5px solid var(--tng-ink)",
    borderRadius: 18,
    boxShadow: "4px 4px 0 var(--tng-ink)",
    padding: "28px 28px 26px",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    transition: "transform 200ms var(--tng-ease), box-shadow 200ms var(--tng-ease)"
  },
  number: {
    fontFamily: "var(--tng-font-mono)",
    fontSize: 12,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--tng-green-700)",
    fontWeight: 600
  },
  title: {
    margin: 0,
    fontFamily: "var(--tng-font-display)",
    fontWeight: 700,
    fontSize: 26,
    letterSpacing: "-0.015em",
    color: "var(--tng-ink)"
  },
  body: {
    margin: 0,
    color: "var(--tng-ink-2)",
    fontSize: 15,
    lineHeight: 1.55
  },
  cta: {
    marginTop: "auto",
    paddingTop: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  meta: {
    fontFamily: "var(--tng-font-mono)",
    fontSize: 11,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--tng-ink-3)"
  },
  arrow: {
    fontFamily: "var(--tng-font-mono)",
    fontSize: 22,
    color: "var(--tng-green-700)"
  }
};
const PRODUCTS = [{
  n: "01",
  title: "CV+ — O currículo que funciona",
  body: "Junte-se a 3.500+ profissionais que revolucionaram a carreira com um currículo otimizado e um LinkedIn que se destaca. Inclui agente de IA para criar, editar e personalizar.",
  meta: "Curso · acesso vitalício"
}, {
  n: "02",
  title: "Mentoria B2C",
  body: "Programa 1:1 para profissionais com 3+ anos de experiência e inglês intermediário/avançado. Posicionamento, preparação e confiança. Sessões individuais, encontros ao vivo, comunidade.",
  meta: "WhatsApp · vagas limitadas"
}];
function ProductCards() {
  const [hover, setHover] = React.useState(-1);
  return /*#__PURE__*/React.createElement("section", {
    style: productStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: productStyles.header
  }, /*#__PURE__*/React.createElement("span", {
    style: productStyles.eyebrow
  }, "P.S."), /*#__PURE__*/React.createElement("h2", {
    style: productStyles.h2
  }, "Existem 2 maneiras que eu posso te ajudar."), /*#__PURE__*/React.createElement("p", {
    style: productStyles.sub
  }, "O momento em que voc\xEA estiver pronto, escolhe uma das duas \u2014 ou as duas. A escolha do tempo \xE9 sua.")), /*#__PURE__*/React.createElement("div", {
    style: productStyles.grid
  }, PRODUCTS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    style: {
      ...productStyles.card,
      transform: hover === i ? "translate(-2px,-2px)" : "none",
      boxShadow: hover === i ? "6px 6px 0 var(--tng-ink)" : "4px 4px 0 var(--tng-ink)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: productStyles.number
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: productStyles.title
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: productStyles.body
  }, p.body), /*#__PURE__*/React.createElement("div", {
    style: productStyles.cta
  }, /*#__PURE__*/React.createElement("span", {
    style: productStyles.meta
  }, p.meta), /*#__PURE__*/React.createElement("span", {
    style: productStyles.arrow
  }, "\u2197"))))));
}
window.ProductCards = ProductCards;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ProductCards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/TopNav.jsx
try { (() => {
// TopNav.jsx — sticky cream nav

const topNavStyles = {
  wrap: {
    position: "sticky",
    top: 0,
    zIndex: 30,
    background: "rgba(245,239,226,.85)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderBottom: "1px solid transparent",
    transition: "border-color 200ms var(--tng-ease)"
  },
  inner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "14px 28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 32
  },
  links: {
    display: "flex",
    gap: 28,
    alignItems: "center",
    fontSize: 14,
    fontWeight: 500,
    color: "var(--tng-ink)"
  },
  link: {
    color: "var(--tng-ink)",
    textDecoration: "none",
    cursor: "pointer",
    padding: "6px 0",
    whiteSpace: "nowrap"
  },
  cta: {
    border: 0,
    background: "var(--tng-green-700)",
    color: "#fff",
    fontFamily: "var(--tng-font-body)",
    fontWeight: 600,
    fontSize: 14,
    padding: "10px 18px",
    borderRadius: 999,
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0
  }
};
function TopNav({
  onNavigate,
  current
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [{
    id: "home",
    label: "Newsletter"
  }, {
    id: "archive",
    label: "Edições"
  }, {
    id: "curso",
    label: "O curso"
  }, {
    id: "cvplus",
    label: "CV+"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      ...topNavStyles.wrap,
      borderBottomColor: scrolled ? "var(--tng-rule)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: topNavStyles.inner
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate("home"),
    style: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(LogoLockup, {
    size: 42
  })), /*#__PURE__*/React.createElement("nav", {
    style: topNavStyles.links
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    onClick: () => onNavigate(it.id),
    style: {
      ...topNavStyles.link,
      color: current === it.id ? "var(--tng-green-700)" : "var(--tng-ink)",
      borderBottom: current === it.id ? "2px solid var(--tng-lime)" : "none"
    }
  }, it.label))), /*#__PURE__*/React.createElement("button", {
    style: topNavStyles.cta,
    onClick: () => {
      onNavigate("home");
      setTimeout(() => document.querySelector("#subscribe")?.scrollTo?.({
        behavior: "smooth"
      }), 50);
    }
  }, "Assine gr\xE1tis")));
}
window.TopNav = TopNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/TopNav.jsx", error: String((e && e.message) || e) }); }

})();
