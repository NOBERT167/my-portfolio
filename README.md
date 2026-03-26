# Nobert Langat — Portfolio

A modern, glassmorphic developer portfolio built with Next.js, Tailwind CSS, and Framer Motion. Features bento grid layouts, cinematic SVG loader animation, spotlight cursor effects, noise textures, living gradient orbs, and dark/light mode.

🔗 **Live**: [nobertdev.vercel.app](https://nobertdev.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?logo=framer)

## Features

- **Cinematic Entrance** — SVG bezier curve loader animation before the site reveals
- **Glassmorphism** — Frosted glass cards with backdrop blur across all sections
- **Bento Grid Layout** — Hero, projects, skills, and contact sections with varied cell sizes
- **Spotlight Effect** — Radial gradient follows mouse cursor over cards
- **Living Gradient Orbs** — Animated floating blurred circles in the background
- **Noise Textures** — Subtle grain overlay on glass cards
- **Dark / Light Mode** — Toggle with localStorage persistence
- **Projects Page** — Filterable grid with search and tech-stack filter pills
- **Responsive** — Fully adaptive layout from mobile to desktop

## Tech Stack

| Layer     | Technology                       |
| --------- | -------------------------------- |
| Framework | Next.js 16 (App Router)          |
| Language  | TypeScript                       |
| Styling   | Tailwind CSS 4, CSS custom props |
| Animation | Framer Motion                    |
| Icons     | Lucide React + custom SVG        |
| UI        | shadcn/ui (Radix primitives)     |
| Deploy    | Vercel                           |

## Project Structure

```
app/
  layout.tsx          # Root layout with fonts & metadata
  page.tsx            # Homepage (loader → bento sections)
  globals.css         # Theme, glassmorphism, noise, orbs, spotlight
  projects/
    page.tsx          # All projects with search & filtering
components/
  loader.tsx          # SVG bezier curve cinematic entrance
  navbar.tsx          # Glass navbar with dark mode toggle
  hero.tsx            # Bento hero grid with gradient text & socials
  about.tsx           # Bio + trait cards
  projects.tsx        # Featured projects bento grid + ProjectCard
  skills.tsx          # Categorized tech stack with animated tags
  contact.tsx         # Email CTA, location, social links + Footer
constants/
  index.ts            # Site config, projects data, skills, nav links
hooks/
  use-darkmode.ts     # Dark mode toggle with localStorage
  use-spotlight.ts    # Mouse-tracking spotlight effect
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## License

MIT
