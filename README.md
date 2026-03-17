# Parinith Reddy — Portfolio

A premium, futuristic AI/ML engineer portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animation**: Framer Motion + GSAP
- **Smooth Scrolling**: Lenis
- **Deployment**: Vercel

## Design

- Dark futuristic theme (`#0B0B0F` base)
- Multi-layer parallax hero with scroll-based depth
- Glassmorphism cards throughout
- Framer Motion scroll-triggered reveals
- Animated skill cards, project hover effects, counter animations
- Custom cursor glow (desktop)
- Syne display font + DM Sans body + JetBrains Mono code

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Main page (Lenis init + section assembly)
│   └── globals.css       # Global styles, CSS variables, utilities
├── components/
│   ├── Nav.tsx           # Sticky navigation with active section detection
│   ├── Hero.tsx          # Parallax multi-layer hero
│   ├── About.tsx         # Bio + animated timeline
│   ├── Skills.tsx        # Interactive skill cards by category
│   ├── Projects.tsx      # Large project cards with hover effects
│   ├── Research.tsx      # LSH research + ANN pipeline diagram
│   ├── Achievements.tsx  # Animated counter stats
│   ├── Contact.tsx       # Contact cards with animated background
│   ├── Footer.tsx        # Footer with back-to-top
│   └── CursorGlow.tsx    # Mouse-following glow effect
├── public/
│   └── resume.pdf        # Place your resume PDF here
├── package.json
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
└── tsconfig.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your resume

Place your resume PDF at `public/resume.pdf`.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm start
```

## Deploying to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option B — GitHub + Vercel Dashboard

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Click **Deploy** — zero config needed

## Customization

| File | What to change |
|------|---------------|
| `components/Hero.tsx` | Name, headline, subtext, CTAs |
| `components/About.tsx` | Bio text, timeline entries, stats |
| `components/Skills.tsx` | Skill groups and individual skills |
| `components/Projects.tsx` | Project cards, links, stack, highlights |
| `components/Research.tsx` | Research content, topics, datasets |
| `components/Achievements.tsx` | Counter targets, platform names |
| `components/Contact.tsx` | Email, LinkedIn, GitHub links |
| `app/globals.css` | Color variables, typography |
| `tailwind.config.ts` | Color palette, fonts, animations |

## Performance Notes

- Fonts loaded via Google Fonts CDN (add `font-display: swap` if needed)
- Lenis initialized client-side only (no SSR impact)
- All animations use `will-change: transform` for GPU compositing
- `IntersectionObserver` used for scroll-triggered reveals (no GSAP ScrollTrigger overhead unless needed)
- Images: use Next.js `<Image>` component for automatic optimization

## License

MIT — feel free to use as a template.
