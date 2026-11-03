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
- [ ] T1 Scaffold Astro (mobile first) + git init + 3 radically different prototype variants (`?v=1|2|3`) with real content. Route: delegated (writer, 2+ files).
- [ ] T2 Owner picks a direction; delete the others; build final sections.
- [ ] T3 SEO: meta, Open Graph, JSON-LD (Person, ProfessionalService), sitemap, robots, performance pass.
- [ ] T4 Deploy to Vercel + domain.
- [ ] T5 Real works/case studies + template showcase.

## Open questions
- Which works to show (besides Motofix)?
- Domain name?
- Pricing visible on site or "ask for quote"?

## Progress
Created. Nothing implemented yet.
