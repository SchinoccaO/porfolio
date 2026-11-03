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
- `public/oriana.webp`: portrait, turned into a duotone (ink + orange) by an SVG filter in `Hero.tsx`.

## Identity

- Palette: orange `#FF4D1F`, ink `#0C0C0D`, paper `#F1EDE4`. No gradients.
- Type: Big Shoulders Display (display), DM Sans (text), JetBrains Mono (labels / HUD).
- Details: grain overlay, tape strips, stickers, a torn edge, a self-drawing marker scribble,
  HUD "character sheet" panels. Contrast: body text is ink on paper/orange or paper on ink; orange is only used
  for text on ink.

## Motion

- Scroll reveals: `animate.css` (pinned 4.1.1) classes added by an IntersectionObserver (`Reveal`).
- Hero word entrance, marquee, floating stickers, scribble drawing itself (stroke-dashoffset), HUD bars.
  Only transform / opacity / stroke animations.
- `prefers-reduced-motion: reduce`: everything is static and visible; the carousel does not auto-advance.

## Known TODOs

- Contact form has no backend; contact channels are placeholders (`site.ts`).
- SEO (Open Graph, JSON-LD, sitemap) is pending.
