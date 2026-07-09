# Ramankur Enterprises — Website Source

A single-page website for Ramankur Enterprises (printing business), built with React, Vite, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 18 or newer
- npm (comes with Node.js)

## Setup

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This creates a `dist` folder with the static site. Upload the contents of `dist` to any static host (Netlify, Vercel, GitHub Pages, or your own web server).

To preview the production build locally:

```bash
npm run preview
```

## Project structure

- `src/App.tsx` — app routing
- `src/pages/Home.tsx` — the main landing page content
- `src/components/ui/` — reusable UI components
- `src/index.css` — theme colors, fonts, and global styles
- `public/` — images and static files
