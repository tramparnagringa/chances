#!/usr/bin/env node
// Gera os 3 PDFs dos roadmaps a partir das rotas /roadmap/[faixa], usando o
// Chrome/Chromium instalado (sem dependência extra). Precisa do app rodando:
//   npm run dev   (ou npm run preview)
//   npm run roadmaps:pdf -- --base http://localhost:3000
// Saída: public/roadmaps/<slug>.pdf
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const roadmaps = JSON.parse(fs.readFileSync(path.join(ROOT, 'shared/data/roadmaps.json'), 'utf8')).items

const argBase = process.argv.indexOf('--base')
const base = argBase > -1 ? process.argv[argBase + 1] : 'http://localhost:3000'

const candidates = [process.env.CHROME_PATH, 'chromium', 'google-chrome', 'google-chrome-stable', 'chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].filter(Boolean)
const chrome = candidates.find((c) => {
  try { execFileSync(c, ['--version'], { stdio: 'ignore' }); return true }
  catch { return false }
})
if (!chrome) {
  console.error('Chrome/Chromium não encontrado. Defina CHROME_PATH.')
  process.exit(1)
}

const outDir = path.join(ROOT, 'public/roadmaps')
fs.mkdirSync(outDir, { recursive: true })

for (const r of roadmaps) {
  const out = path.join(outDir, `${r.slug}.pdf`)
  execFileSync(chrome, [
    '--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=8000',
    `--print-to-pdf=${out}`, `${base}/roadmap/${r.slug}`,
  ], { stdio: 'ignore' })
  console.log(`✓ ${path.relative(ROOT, out)}`)
}
