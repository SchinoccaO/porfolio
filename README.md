# orianaschinocca

Mobile-first personal portfolio (Astro, static output, one React island).
Message: "Instagram no es una web. Y tus clientes lo saben." Goal: get visitors to ask for their website.

## Run

```
npm install
npm run dev
npm run build
```

## Structure

- `src/content/site.ts`: the only place with copy (Spanish es-AR).
- `src/components/`: one component per section, composed in `SiteApp.tsx`
  (order: hero, statement strip, Sobre mí, Motofix, Trabajos, Servicios, Cómo trabajo, statement block, Contacto).
  `ui.tsx` holds the shared pieces (Reveal, Marquee, Scribble, Torn, Sticker, hooks).
- `src/styles/global.css`: all styles, designed at 390px first, desktop from 1024px.
- `public/oriana.webp`: transparent cutout portrait (WebP with alpha, 1100px wide), shown clean with no filter or overlay on a flat lilac plate in the hero.

## Identity

- Palette (flat, no gradients): violet `#5B2FB0`, lilac `#B8A4E8`, lemon `#F4DE2A`, aubergine ink `#1B1030`, concrete `#B9B4AA`, warm paper `#F6F1E7`. No red or orange.
- Type: Big Shoulders Display (display), DM Sans (text), JetBrains Mono (labels / HUD).
- Details: tape strips, stickers, a torn edge, a self-drawing marker scribble,
  HUD "character sheet" panels. Contrast (WCAG AA): ink on paper 16:1, violet on paper 7.5:1, paper on violet 7.5:1, ink on lemon 13:1,
  ink on lilac 8.2:1, lilac/lemon on ink 8.2:1 / 13:1. Lemon is only a fill or text on ink/violet. The sticky mobile CTA
  appears only after the hero CTA has scrolled out through the top.

## Motion

- Scroll reveals: `animate.css` (pinned 4.1.1) classes added by an IntersectionObserver (`Reveal`).
- Hero word entrance, marquee, floating stickers, scribble drawing itself (stroke-dashoffset), HUD bars.
  Only transform / opacity / stroke animations.
- `prefers-reduced-motion: reduce`: everything is static and visible; the carousel does not auto-advance.

## Known TODOs

- Contact form has no backend; contact channels are placeholders (`site.ts`).
- SEO (Open Graph, JSON-LD, sitemap) is pending.
