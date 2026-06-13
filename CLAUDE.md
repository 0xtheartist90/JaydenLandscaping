# Jayden's Landscaping — Project Guide

Premium marketing website for **Jayden's Landscaping** (Toronto / Greater Toronto Area).
Built to feel like a luxury landscape-architecture studio — elegant, editorial, restrained.
**Do not** make it look like a typical contractor site.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (config-less; theme tokens live in `src/app/globals.css` under `@theme inline`)
- **shadcn/ui** (components in `src/registry/new-york-v4/ui`, imported via `@/registry/...`)
- **Framer Motion** for subtle scroll/reveal animation
- **lucide-react** for icons

Commands: `npm run dev` · `npm run build` · `npm run lint` · `npx tsc --noEmit`

> ⚠️ Don't run `npm run build` while `npm run dev` is running — they share `.next` and it breaks the dev server. Use `tsc --noEmit` + `lint` to verify while dev is up.

## Brand System — do not change the visual identity

**Fonts**
- Headlines: **Aboreto** → `font-display` (loaded in `src/app/layout.tsx`)
- Body / UI: **Inter** → `font-sans`

**Colors** (Tailwind tokens, defined in `src/app/globals.css`)
| Token | Hex | Use |
|-------|-----|-----|
| `forest` | `#38412C` | primary dark green |
| `moss` | `#677C69` | secondary green / eyebrows |
| `beige` | `#D6BC97` | warm accent |
| `sand` | `#E3D9BF` | light sand / section bg |
| `cream` | `#FAF7F0` | page background |
| `ink` | `#20251A` | body text |

Use them with Tailwind utilities, e.g. `bg-forest`, `text-moss`, `border-sand`.
Avoid bright greens, gradients, flashy color. Earthy, natural, timeless.

**Style conventions**
- Eyebrows: `text-xs tracking-[0.35em] uppercase` in moss/beige
- Headings: `font-display`, generous leading
- Buttons: solid forest or outline; `tracking-[0.18em] uppercase`
- Lots of whitespace; large imagery; `Reveal` for fade-up on scroll (respects reduced-motion)

## Brand assets (`public/images/`)

- `logo-dark.png` — dark logo (used on cream/scrolled header)
- `logo-white.png` — white logo (used over hero / in footer)
- `icon-round.png` — round "J" icon (hero, also source of favicon)
- `src/app/icon.png` — favicon (generated from the round icon)

## Routes

| Route | File | Notes |
|-------|------|-------|
| `/` | `src/app/page.tsx` | Homepage |
| `/services` | `src/app/services/page.tsx` | Hub: 6 service cards → dedicated pages |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` | 6 service pages, statically generated, unique SEO + JSON-LD |
| `/projects` | `src/app/projects/page.tsx` | Portfolio gallery |
| `/about` | `src/app/about/page.tsx` | Founder story + milestones + process |
| `/contact` | `src/app/contact/page.tsx` | Contact form + details |

**Homepage section order** (`src/app/page.tsx`): Hero → ValueProps (compact banner → /about) → Services → Projects → AboutTeaser → CtaBanner → Contact.

## Components (`src/components/site/`)

- `site-header.tsx` — fixed nav, transparent over hero → cream on scroll. Order: **Home · About · Services ▼ · Projects · Contact**. Services dropdown links to `/services/<slug>`. Mobile menu included.
- `site-footer.tsx` — minimal footer
- `hero.tsx` — fullscreen hero with round icon, eyebrow, Aboreto headline, two CTAs
- `value-props.tsx` — compact forest banner of 4 USP icons; whole banner links to `/about`
- `services.tsx` — homepage 6-card grid → `/services/<slug>`
- `projects.tsx` — gallery (`showHeading` prop toggles the section heading)
- `about.tsx` — full founder story + milestone timeline (used on /about)
- `about-teaser.tsx` — compact story teaser on homepage → /about
- `process.tsx` — 4-step process timeline (used on /about)
- `cta-banner.tsx` — full-width "Ready To Transform…" CTA
- `contact.tsx` — contact form (see TODO) + phone/email/service area
- `page-hero.tsx` — reusable inner-page hero banner
- `reveal.tsx` — Framer Motion fade-up wrapper
- `section-heading.tsx` — eyebrow + title + description block

## Service data — single source of truth

`src/lib/services.ts` holds all 6 categories: `slug`, `title`, descriptions, `benefits`, `subservices`, `image`, and `seo` (title/description/keywords). Helpers: `getServiceBySlug`, `getRelatedServices`. Nav dropdown, homepage cards, hub page, and the `[slug]` template all read from here — **edit content here, not in the components.**

The 6 slugs: `landscape-design`, `hardscaping`, `outdoor-structures`, `water-features`, `softscaping`, `property-maintenance`.

## SEO

- Per-page `metadata` (title, description, keywords, Open Graph) targeting GTA keywords
- `Service` JSON-LD structured data on each `/services/[slug]` page
- Service-page SEO copy lives in the `seo` field in `src/lib/services.ts`

## ⚠️ Open TODOs / placeholders

1. **Images are Unsplash placeholders** — swap for real Jayden's project photos and a real founder portrait. URLs are in `src/lib/services.ts` and the section components. `next.config.ts` allows `images.unsplash.com`; add your image host or use local `public/images/`.
2. **Contact info is placeholder** — `(416) 555-0123` and `info@jaydenslandscaping.ca` appear in `contact.tsx`, `site-footer.tsx`, and the JSON-LD in `services/[slug]/page.tsx`. Replace everywhere when real details are known.
3. **Contact form is not wired up** — `contact.tsx` only shows a success toast. Connect to a real endpoint (Resend, Formspree, or a Next.js API route).
4. **Rotate the GitHub token** — a Personal Access Token was pasted in chat to enable the first push. Rotate it at github.com/settings/tokens when convenient.

## Git

- Remote: `https://github.com/0xtheartist90/JaydenLandscaping.git` (branch `main`)
- Commit style: short imperative subject; trailer `Co-Authored-By: Claude ...`
