# PLAN.md — blog

## Kontext

Repo běží na React 19 + MUI. Obsah článků je **natvrdo zadrátovaný v `ArticleList.tsx`
(~73 KB)** — jeden velký soubor místo samostatných článků. Dark-mode, MUI drawer.

**Cíl:** boring tech / minimum údržby — zmigrovat na **Eleventy (11ty) + markdown**.
Články jako `.md` soubory s front-matter, žádný React, minimal dependencies.

---

## Proč Eleventy

- Zůstáváme v JS ekosystému.
- Minimální závislosti, stabilní projekt (žádný věčný React major upgrade).
- Markdown soubory = články editovatelné v čemkoli.
- Build do statického HTML → GitHub Pages bez komplikací.
- Jednoduché šablony (Nunjucks/Liquid).

---

## Rozsah změn

### Zahodit
- React 19 + react-dom
- MUI (Material UI) + Emotion
- Vite + TypeScript + ESLint
- `src/ArticleList.tsx` — tento soubor **rozsekáme na `.md` soubory**
- `package.json` → nahradit novým s jediným `devDependency: @11ty/eleventy`
- `.github/workflows/deploy.yml` → nahradit Eleventy buildem

### Přidat
- `src/posts/*.md` — jeden soubor per článek, s front-matter (title, date, tags)
- `src/_includes/base.njk` — HTML layout šablona (dark background, Russo One nebo jiný font)
- `src/_includes/post.njk` — šablona jednoho článku
- `.eleventy.js` — konfigurace Eleventy (vstup `src/`, výstup `_site/`)
- `package.json` — jen `{ "devDependencies": { "@11ty/eleventy": "^3.x" } }`
- `.gitignore` — `node_modules/`, `_site/`
- `.nojekyll` — vypne Jekyll na GitHub Pages

---

## Front-matter šablona článku

```markdown
---
title: Název článku
date: 2024-01-15
tags: [javascript, web]
layout: post.njk
---

Text článku v markdownu...
```

---

## Struktura po migraci

```
blog/
├── src/
│   ├── _includes/
│   │   ├── base.njk      ← HTML layout (nav, dark mode, font)
│   │   └── post.njk      ← layout jednoho článku
│   ├── posts/
│   │   ├── clanek-1.md
│   │   ├── clanek-2.md
│   │   └── ...
│   └── index.njk         ← seznam článků (homepage)
├── .eleventy.js
├── package.json
├── .gitignore
├── .nojekyll
└── PLAN.md               ← tento soubor
```

---

## Postup migrace

1. **Projít `ArticleList.tsx`** — identifikovat každý článek (titulek, datum, obsah).
2. **Vytvořit `src/posts/*.md`** — jeden soubor per článek, obsah převést z JSX textu
   do markdownu.
3. **Nastavit Eleventy** — `.eleventy.js`, `package.json` s `@11ty/eleventy`.
4. **Napsat šablony** — `base.njk` (dark background, font), `post.njk`, `index.njk`
   (seznam článků s titulky a daty).
5. **Lokálně ověřit:** `npx @11ty/eleventy --serve` → `localhost:8080`.
6. **Nastavit deploy** — `.github/workflows/deploy.yml` spustí `npm ci && npx @11ty/eleventy`
   a nasadí `_site/` na Pages (nebo commitnout `_site/` do rootu — jednodušší).
7. **Smazat** React zbytek: `src/*.tsx`, `vite.config*`, `tsconfig*`, `node_modules/`.

---

## Deploy workflow (ukázka)

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npx @11ty/eleventy
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

---

## Verifikace

- `npx @11ty/eleventy --serve` — všechny články se zobrazí na `localhost:8080`.
- Každý článek z původního `ArticleList.tsx` je dostupný jako samostatná URL.
- Homepage zobrazuje seznam článků seřazených podle data.
- Dark mode / styling odpovídá původnímu blogu.
- Po deployi ověřit živou URL `michalzbranek.github.io/blog/`.
