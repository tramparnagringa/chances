import type { Config } from 'tailwindcss'

// Tailwind só gera classes usadas em components/ds/** (ver AGENTS.md).
export default <Partial<Config>>{
  content: ['./components/ds/**/*.vue'],
  theme: {
    extend: {
      colors: {
        roxo: {
          900: 'var(--tng-purple-900)',
          700: 'var(--tng-purple-700)',
          500: 'var(--tng-purple-500)',
          300: 'var(--tng-purple-300)',
          100: 'var(--tng-purple-100)',
        },
        lima: {
          DEFAULT: 'var(--tng-lime)',
          hover: 'var(--tng-lime-hover)',
        },
        // Superfície "night" (quiz)
        night: {
          DEFAULT: 'var(--tng-night)',
          2: 'var(--tng-night-2)',
          3: 'var(--tng-night-3)',
        },
        'night-ink': {
          DEFAULT: 'var(--tng-night-ink)',
          2: 'var(--tng-night-ink2)',
          3: 'var(--tng-night-ink3)',
        },
        'night-placeholder': 'var(--tng-night-placeholder)',
        'night-error': 'var(--tng-night-error)',
        'on-roxo': 'var(--tng-on-purple)',
        // Superfície "paper" (roadmap)
        creme: 'var(--tng-cream)',
        papel: 'var(--tng-paper)',
        tinta: {
          DEFAULT: 'var(--tng-ink)',
          2: 'var(--tng-ink-2)',
          3: 'var(--tng-ink-3)',
        },
        regra: 'var(--tng-rule)',
      },
      fontFamily: {
        display: ['Bricolage Grotesque', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        field: 'var(--tng-radius-field)',
        card: 'var(--tng-radius-card)',
        pill: '999px',
      },
      boxShadow: {
        'stamp-lima': '4px 4px 0 var(--tng-lime)',
        'stamp-tinta': '4px 4px 0 var(--tng-ink)',
        lift: '0 2px 0 rgba(20,20,20,.04), 0 8px 24px -8px rgba(20,20,20,.18)',
        'focus-lima': '0 0 0 3px rgba(201,242,61,.25)',
      },
      transitionTimingFunction: {
        tng: 'cubic-bezier(.2,.7,.2,1)',
      },
    },
  },
}
