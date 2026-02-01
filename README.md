## Pravaah — Fluid Form Studio

Pravaah is a single-page experience for a future-focused footwear and accessories studio. The interface highlights the brand ethos, current categories, upcoming drops, and a newsletter touchpoint — all ready to expand into new product verticals.

### Tech Stack

- [Next.js 16 App Router](https://nextjs.org/docs/app)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (inline `@theme` tokens)
- [TypeScript](https://www.typescriptlang.org/)

### Local Development

```bash
npm install
npm run dev
# open http://localhost:3000
```

### Lint & Build

```bash
npm run lint
npm run build
```

### Project Structure Highlights

- `app/page.tsx` — full landing experience with hero, category highlights, studio story, drop roadmap, and newsletter call-to-action.
- `app/layout.tsx` — metadata, global layout, and OG configuration.
- `app/globals.css` — Tailwind layer import, color tokens, and background treatments.
- `public/` — brand assets and Open Graph artwork.

### Deployment

Run a production build locally to ensure a clean deploy:

```bash
npm run build
```

The project is optimised for deployment on [Vercel](https://vercel.com/). Configure the project root as the deployment target and use the production build command above.
