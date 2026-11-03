# Feature: portfolio (personal brand site)

## Objective
Mobile-first personal portfolio for Oriana Schinocca: attract freelance clients, support SEO for Motofix, build credibility as developer + functional analyst.

## Business model (source of truth)
- Site = personal name/brand. Sections: short bio, Motofix, works, offers, contact.
- Two offers: **Template** (cheap, only typography/colors editable, structure fixed) and **Custom design** (more expensive).
- Source code is NEVER sold; client buys the working website. Owner keeps the code.
- Owner manages domain, servers, front deploy. Hosting: free (Vercel/Render, account set up by owner, has cold-start delay) or premium (adds to price).
- Third-party costs (designer, photographer, paid DBs/servers, external services) are paid by the client.
- Extra service: INPI trademark registration management.
- Site purpose (owner, final): (1) who she is = personal brand, identity "Deja de consumir, empeza a crear", Motofix as proof; (2) sell freelance services. Do NOT put "slow-cooked / fuego lento" or the AI-time tension in site copy (only usable later as a sales argument for custom designs).
- Template types offered: landing/presentation, bookings/appointments, portfolio, CRM, simple e-commerce (Mercado Pago). Extras: SEO, domain, trademark registration, etc. First real projects will all be custom (templates don't exist yet).
- Confirmed personal facts (OK to publish): based in Cordoba; motera (rider); full stack dev (React, Node, Express, Python, SQL); student at UTN FRC (Ingenieria en Sistemas) and UTN San Francisco (Tecnicatura en Programacion), so she has theoretical foundations; founder of MotoFIX; very perseverant, "jumps into the void and does". Differentiator: understands the problem before writing code (functional analyst).
- Do NOT publish: pet (Lilith), utn-mcp contributions, work/family details, prices, testimonials, invented metrics.
- Visual identity (owner refs): scrapbook/collage (cream, burgundy, baby blue, torn paper, stamps, key tags, pins), distorted/wavy typography, Sippa-style warm gradients + text on curved paths + pill stickers + wavy dividers. Must have MOVEMENT (owner named Animate.css; reference site patagoniainquieta.com uses Animate.css keyframes + custom hero animations + IntersectionObserver reveals). Owner rejected prototypes v1-v3 (technical/editorial/playful).
- Ideal client: knows what they want. Fast, low-cost solutions; money goes to Motofix.

## Motofix (content source)
Argentine platform for moto workshops, mechanics, tire shops, parts stores and tow trucks. Born in Cordoba, federal reach. Founder: full stack + product. Built search, business profiles, business panel, admin panel, doc-validated onboarding by trade, Mercado Pago subscriptions (PRO / PRO+), 230-query search quality harness, technical SEO (SSR, structured data, neighborhood blog), per-business QR, Telegram bots (CRM/alerts), multi-agent AI workflow. Stack: Node.js, Oracle Cloud VPS, PM2, Nginx, Cloudflare (DNS, R2), Mercado Pago, Meta Pixel, GitHub. INPI trademark class 42 registered. Not launched yet: NO metrics. Frontend framework unconfirmed: do not state one. URL: https://motofix.ar/

## Constraints / decisions
- Owner skills (stated): React JS, Node, Express, Python, SQL. Show as skills on the site.
- Motofix frontend framework: owner replied "react js" right after the framework gap was flagged; treated as Motofix frontend = React (assumption, confirm before publishing).
- Stack: Astro (static output) with React components + Vercel. Swappable.
- Site language: Spanish (es-AR), all copy in one content file so it can be swapped.
- Iterative model (mattpocock/skills): grilling -> prototype (variants via `?v=`) -> pick -> repeat per section. Design refs from taste-library (scratchpad clone).
- TDD: off (source: no project config, static site). Checks: `npm run build` (+ `astro check` if configured).
- Delivery strategy: ask-on-risk.

## Tasks
- [x] T1 Scaffold Astro (mobile first) + git init + 3 radically different prototype variants (`?v=1|2|3`) with real content. Route: delegated (writer, 2+ files; trigger: writer rule). Evidence: commit c065844; `npm run build` OK (re-run by parent: 1 page built). NOT checked: visual/mobile layout in a browser. Review tier: not assessed (prototype, throwaway).
- [x] T2 Identity-led redesign: replace prototypes v1-v3 with 2 variants of ONE identity (scrapbook collage vs warm-gradient fluid), with motion (animate.css + custom keyframes + IntersectionObserver, prefers-reduced-motion respected), real copy from this doc. Owner picks one, then finalize. Route: delegated (writer). Evidence: branch feat/identity-redesign; `npm run build` OK; Playwright 360px screenshots + no horizontal overflow checked for both variants (normal and reduced motion). Awaiting owner pick.
- [ ] T3 SEO: meta, Open Graph, JSON-LD (Person, ProfessionalService), sitemap, robots, performance pass.
- [ ] T4 Deploy to Vercel + domain.
- [ ] T5 Real works/case studies + template showcase.

## Open questions
- Which works to show (besides Motofix)?
- Domain name?
- Pricing visible on site or "ask for quote"?

## Progress
Created. Nothing implemented yet.
