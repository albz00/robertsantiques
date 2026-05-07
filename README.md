# Robert&rsquo;s Antiques &mdash; One-Page Site

A Svelte 5 + Vite + Tailwind v4 single-page site for Robert&rsquo;s Antiques, a premium antique store with a wine cellar.

## Stack

- Svelte 5 (runes)
- Vite 6
- Tailwind CSS v4 (CSS-first config in `src/app.css`)
- Cormorant Garamond (display) + Inter (body) via Google Fonts
- No icon library &mdash; ornaments are pure CSS

## Run

```bash
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  App.svelte           # composes the page sections
  app.css              # Tailwind + theme tokens (palette, fonts, components)
  main.js              # mount entry
  lib/
    Nav.svelte
    Hero.svelte
    Intro.svelte
    Collections.svelte
    Featured.svelte
    Gallery.svelte
    Cellar.svelte
    Heritage.svelte
    Visit.svelte
    Footer.svelte
    Flourish.svelte    # ornamental divider used between sections
```

## Notes

- All copy is lorem ipsum / placeholder &mdash; intentional, per the brief.
- Imagery is hot-linked Unsplash stock; swap for owned photography before launch.
- Theme tokens (palette + fonts) live at the top of `src/app.css` under `@theme`.
