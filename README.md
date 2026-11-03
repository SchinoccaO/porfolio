# orianaschinocca

Mobile-first personal portfolio (Astro, static output, React islands).
Identity: "Dejá de consumir. Empezá a crear." (human connection against mass consumption).

## Run

```
npm install
npm run dev     # http://localhost:4321/?v=1  (also ?v=2)
npm run build
```

## Prototypes (throwaway)

`src/prototype/` holds two variants of ONE identity, both fed by
`src/content/site.ts` (the only place with copy, Spanish es-AR). Switch with
`?v=1|2` or the floating bottom bar.

1. Scrapbook: cream paper, burgundy, baby blue, torn-paper dividers, stamp-edged
   cards, key-tag prices, pins, pill stickers, per-letter wave headline.
2. Fluid: warm animated gradient hero, SVG `feTurbulence` warped headline, text
   on a moving wavy path (`textPath`), wavy dividers, rounded tiles, auto-scrolling carousel.

Shared pieces live in `src/prototype/shared.tsx` / `shared.css`.

### Motion

- Scroll reveals: `animate.css` (pinned 4.1.1) classes added by an
  IntersectionObserver (`Reveal`).
- Ambient: marquee, drifting blobs/waves, floating stickers, letter wave
  (transform/opacity only; the headline filter and SVG path text use SMIL).
- `prefers-reduced-motion: reduce`: reveals show statically, ambient animations
  and SMIL animations are off, carousel does not auto-advance.

### Known TODOs

- Contact form has no backend; contact channels are placeholders (`site.ts`).
- Photo slot is an empty frame labelled "foto".

After the owner picks one variant, the other is deleted.
