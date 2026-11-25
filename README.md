# Mukesh Kumar Chaurasia — Field Notebook Portfolio

A personal portfolio website designed like a warm, handmade digital notebook. Built with **React + Vite**, **Tailwind CSS v4**, and **Framer Motion**.

## Local Setup

```bash
npm install
npm run dev
```

## Editing Your Content

- All text, chapters, projects, and stickers live in `src/data/content.js`.
- Monthly `/now` updates ("Right now" chapter) live in `src/data/now.json`.
- Your portrait photo is `public/profile.jpg` and your resume PDF is `public/resume.pdf`.

## Production Build

```bash
npm run lint
npm run build
npm run preview
```

## Deploying to Vercel

1. Push this folder to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new) (Framework Preset: **Vite**).
3. Optionally add `VITE_FORMSPREE_ENDPOINT` (or EmailJS keys) and `VITE_CHAT_API_URL` from `.env.example`.
4. Click **Deploy**.
