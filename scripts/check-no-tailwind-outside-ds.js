#!/usr/bin/env node
// Falha se aparecer classe Tailwind fora de components/ds/**. O `content` do
// tailwind.config.ts já faz essas classes não gerarem CSS; este script troca
// esse no-op silencioso por um erro no CI. Adaptado do site principal.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SCAN_DIRS = ['pages', 'components', 'layouts', 'app.vue']
const EXCLUDE_DIR = path.join(ROOT, 'components', 'ds')

const TAILWIND_PATTERN = new RegExp(
  [
    '-\\[[^\\]]+\\]', // valor arbitrário: text-[34px]
    '\\b(?:hover|focus|focus-visible|active|disabled|print|max-sm|sm|md|lg|xl|2xl):[a-z\\[!-]',
    '\\b(?:gap-x|gap-y|gap|space-x|space-y|[wh]|p[xytrbl]?|m[xytrbl]?)-\\d',
    '\\brounded-(?:none|xs|sm|md|lg|xl|2xl|3xl|full|pill|card|field)\\b',
    '\\bgrid-cols-\\d|\\bgrid-rows-\\d',
    '\\bflex-(?:row|col|wrap|nowrap|1|auto|initial|none)\\b',
    '\\b(?:items|justify|self)-(?:start|end|center|between|around|evenly|stretch|baseline)\\b',
    // tokens deste projeto
    '\\b(?:bg|text|border|shadow)-(?:roxo|lima|night|night-ink|creme|papel|tinta|regra|on-roxo|stamp)',
    '\\bfont-(?:display|body|mono|serif)\\b',
  ].join('|'),
  'i',
)

const CLASS_ATTR = /(?:^|\s):?class\s*=\s*"([^"]*)"/g
const offenses = []

function walk(p) {
  if (!fs.existsSync(p) || p.startsWith(EXCLUDE_DIR)) return
  const stat = fs.statSync(p)
  if (stat.isDirectory()) return fs.readdirSync(p).forEach(e => walk(path.join(p, e)))
  if (!p.endsWith('.vue')) return
  const content = fs.readFileSync(p, 'utf8')
  for (const m of content.matchAll(CLASS_ATTR)) {
    if (TAILWIND_PATTERN.test(m[1])) {
      const line = content.slice(0, m.index).split('\n').length
      offenses.push(`${path.relative(ROOT, p)}:${line}  class="${m[1]}"`)
    }
  }
}

SCAN_DIRS.forEach(d => walk(path.join(ROOT, d)))

if (offenses.length) {
  console.error('Classes Tailwind fora de components/ds/**:\n')
  offenses.forEach(o => console.error('  ' + o))
  console.error('\nSó components/ds/** pode usar Tailwind. Use ou crie um componente Ds*.')
  process.exit(1)
}
console.log('OK: nenhuma classe Tailwind fora de components/ds/**.')
