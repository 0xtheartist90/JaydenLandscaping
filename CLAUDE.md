# Jayden's Landscaping — Project Guide

Premium marketing website for **Jayden's Landscaping** — based in **Markham**, serving the GTA & York Region.
Built to feel like a luxury landscape-architecture studio — elegant, editorial, restrained.
**Do not** make it look like a typical contractor site.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (config-less; theme tokens in `src/app/globals.css` under `@theme inline`)
- **shadcn/ui** starter remnants live in `src/registry/**` + `src/components/*-demo.tsx` — **unused by the site** (safe to ignore/prune)
- **Framer Motion** for scroll/reveal + the scroll-driven sections
- **lucide-react** for icons

Commands: `npm run dev` · `npm run build` · `npm run lint` · `npx tsc --noEmit`

> ⚠️ Don't run `npm run build` while `npm run dev` is running — they share `.next`. Verify with `tsc --noEmit` + `lint` while dev is up. If styles/CSS act stale after many edits, restart dev and clear `.next`.

## Brand System — do not change the visual identity

**Fonts:** Headlines **Aboreto** → `font-display`; body **Inter** → `font-sans`.

**Colors** (tokens in `globals.css`): `forest #38412C`, `moss #677C69`, `beige #D6BC97`, `sand #E3D9BF`, `cream #FAF7F0`, `ink #20251A`. Warm beige section bg uses arbitrary `bg-[#F1E9D6]`. Earthy/natural — avoid bright greens & gradients.

**Conventions:**
- Eyebrows: `text-[11px] tracking-[0.35em] uppercase` in moss/beige
- **No rounded corners** on rectangular elements (cards/buttons/panels) — keep them square. (Circular arrow badges / pill tags in Featured Projects are deliberate exceptions.)
- Primary CTA = **beige button** (`bg-beige text-forest`); the quote CTA opens the **quote modal** (see below)
- `Reveal` = fade-up on scroll (respects reduced-motion); premium easing curve `cubic-bezier(0.22,1,0.36,1)`
- Light textured sections layer `BGbeige.webp` at `opacity-[0.03]`; dark (forest) sections layer `leafbg.webp` at `opacity-[0.05]`

## Brand assets (`public/images/`, all WebP)

- `logo-dark.webp` / `logo-white.webp` — header (dark on scroll) / footer + hero
- `icon-round.webp` — round "J" icon (hero); `src/app/icon.png` is the favicon
- Service photos: `landscape-design`, `hardscaping`, `softscaping` (real); lawn & snow use Unsplash placeholders
- Projects: `newmarket/64/woolbridge/oakville.webp` + `-01/-02/-03` galleries
- `aboutjayden.webp` (founder), `caroussel-101…107.webp` (About marquee), `BGbeige.webp` & `leafbg.webp` (textures)
- `public/videos/hero.webm` — homepage hero background (~4.9 MB)

## Routes

| Route | Notes |
|-------|-------|
| `/` | Homepage |
| `/about` | Founder story + milestones + image marquee + process |
| `/services` | Hub: grid of the 5 service cards |
| `/services/[slug]` | 5 service pages — static, per-service SEO + JSON-LD + FAQ |
| `/service-areas` | Service-areas hub → 6 city pages |
| `/landscaping-<city>` | 6 city landing pages (markham, vaughan, north-york, richmond-hill, newmarket, aurora) |
| `/projects` | Pinned scroll-driven project gallery (thumbnails swap the bg) |
| `/blog` + `/blog/[slug]` | Journal listing + posts |
| `/contact` | Conversion page: details + Google map (Markham) |
| `/location` | Local-SEO page: NAP + `LocalBusiness` JSON-LD + map + hours |
| `/thank-you` | Post-submit confirmation (noindex) |
| `/privacy` `/terms` `/accessibility` `/licenses` | Legal (shared `LegalLayout`) |
| `/sitemap` (HTML) · `/sitemap.xml` (route handler) · `/robots.txt` | — |

**Homepage order** (`src/app/page.tsx`): Hero → ValueProps → AboutTeaser → Services → FeaturedProjects → ServiceAreasHome → FromTheBlog → CtaBanner → Contact.

**Nav** (`site-header.tsx`): About · Services ▾ · Service Areas · Projects · Contact + Quote button (logo = Home). Active link keeps a persistent underline.

## Data — single sources of truth (`src/lib/`)

- `services.ts` — 5 services: `landscape-design`, `interlocking-driveways`, `tree-shrub-planting`, `lawn-maintenance`, `snow-removal`. Each has `title`, descriptions, `benefits`, `subservices`, `image`, `seo`, **`faqs`**. Edit content here.
- `projects.ts` — 4 featured projects (`image` + `gallery[]`), used by homepage + `/projects`.
- `cities.ts` — 6 service-area cities (drives `/landscaping-*` + service-areas).
- `blog.ts` — blog posts.

## Quote modal

`quote-modal.tsx` (`QuoteModalProvider` in `layout.tsx`) renders a global modal; `quote-button.tsx` (`<QuoteButton service?>`) opens it from anywhere. Has a service preselector (defaults to Landscape Design; service pages preselect their own). **Not wired to a backend** — submit routes to `/thank-you`.

## SEO

- `metadataBase` + per-page `metadata`; OG/Twitter image set in `layout.tsx`
- `Service` JSON-LD on `/services/[slug]`; `LocalBusiness` JSON-LD on `/location`
- `robots.ts` + `sitemap.xml` route + HTML `/sitemap` — all reference `BASE_URL` constants

## Contact info (canonical)

Phone **+1 647-621-4219** · Email **jaydenlandscaping@yahoo.com** · Address **5357 19th Ave, Markham, ON L3P 3J3**. Nursery: **Z Force Farm** (Markham).

## ⚠️ Open TODOs

1. **Forms aren't wired** — quote modal just routes to `/thank-you`. Connect Resend/Formspree/API route.
2. **Confirm production domain** — `https://jaydenslandscaping.ca` is assumed in `layout.tsx` metadataBase, `robots.ts`, and `sitemap.xml/route.ts`. Update all three if different.
3. **Social links are placeholders** (`site-footer.tsx`) — add real Instagram/Facebook URLs.
4. **Placeholder photos** — Lawn Maintenance & Snow Removal service images, contact-page hero, CTA-banner bg are Unsplash.

## Git

- Remote: `https://github.com/0xtheartist90/JaydenLandscaping.git` (branch `main`)
- Commit style: short imperative subject; trailer `Co-Authored-By: Claude ...`
