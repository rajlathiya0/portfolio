# Raj Lathiya — Developer Portfolio

A dark, futuristic single-page developer portfolio built with **React + TypeScript + Vite + Tailwind CSS**, featuring a custom multi-layer cursor, a boot-sequence loader, and a hand-drawn bitmoji avatar.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a fully static site to the `dist/` folder — plain HTML, CSS, JS and
assets with **no server or platform lock-in**.

## Preview the production build

```bash
npm run preview
```

## Hosting (works on any static host)

The `dist/` folder can be dropped onto any static web host:

- **Netlify** — drag the `dist/` folder into the Netlify dashboard, or connect the repo (build: `npm run build`, publish: `dist`).
- **GitHub Pages** — push `dist/` to a `gh-pages` branch (or use an action).
- **Cloudflare Pages** — build command `npm run build`, output dir `dist`.
- **Any web server** (Nginx / Apache / shared hosting) — upload the contents of `dist/`.

Because it's a static SPA, point your host's fallback/404 to `index.html` if you
add client-side routes later (currently it's a single page, so not required).

## Structure

```
public/            static assets (bitmoji, photo, project images, resume, favicon)
src/
  components/      Cursor, Loader, Nav, Hero, Experience, Skills, Projects,
                   Achievements, Contact, Footer, Section, Icons
  data.ts          all content (profile, experience, projects, skills, certs)
  App.tsx          page composition
  index.css        theme + custom cursor styles
```

To edit content, change `src/data.ts`.
