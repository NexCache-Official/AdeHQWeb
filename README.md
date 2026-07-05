# AdeHQ Marketing Website

Professional marketing site for [AdeHQ](https://adehq.com) — the operating system for AI employees.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, product story, pricing preview, FAQ |
| `/product` | Product features, orchestration, intelligence modes |
| `/pricing` | Plans, AI Work Hours, top-ups, pricing FAQ |
| `/use-cases` | Expanded use case guides |
| `/about` | Mission, team, roadmap |
| `/blog` | Blog index + posts |
| `/careers` | Open roles |
| `/contact` | Contact form |
| `/privacy`, `/terms`, `/security` | Legal pages |

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4** with AdeHQ design tokens
- **Framer Motion** for scroll animations
- **Lucide React** for icons

## Development

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
npx vercel
```

Or connect the `website` directory to Vercel from the dashboard. No environment variables required for the marketing site.

## Design system

Brand tokens are sourced from the included AdeHQ design system specification:

- Warm cream canvas (`#F6F3EE`)
- Coral accent (`#E85D2C`)
- Schibsted Grotesk + JetBrains Mono typography
- Dark rail (`#1A1714`) for footer and product chrome

Original `.dc.html` prototypes and design system files are in the parent directory.
