// PROTOTYPE (throwaway) variant 2: warm editorial, light.
// Taste reference: anthropic (data/sections/anthropic: colors, typography, layout).
// Used: ivory paper background (#FAF9F5-like), ink #141413, serif/sans contrast
// (Fraunces serif for display and intro, Inter for UI), generous whitespace,
// single-column reading measure, hairline rules instead of cards. No assets copied.
import { site } from '../content/site';

const css = `
.v2{--bg:#faf9f5;--ink:#141413;--muted:#5e5d59;--line:#e0ddd2;--accent:#b4482a;
  background:var(--bg);color:var(--ink);font:400 17px/1.65 Inter,system-ui,sans-serif;min-height:100vh;padding-bottom:88px}
.v2 .wrap{max-width:680px;margin:0 auto;padding:0 20px}
.v2 a{color:var(--ink);text-underline-offset:3px}
.v2 .serif{font-family:Fraunces,Georgia,serif}
.v2 nav.top{padding:20px 0;border-bottom:1px solid var(--line)}
.v2 nav.top ul{display:flex;flex-wrap:wrap;gap:6px 18px;list-style:none;margin:0;padding:0;font-size:14px}
.v2 nav.top a{text-decoration:none;color:var(--muted)}
.v2 .hero{padding:56px 0 40px}
.v2 h1{font:600 clamp(2.5rem,11vw,4.25rem)/1.05 Fraunces,Georgia,serif;letter-spacing:-.02em;margin:0 0 16px}
.v2 .role{font:700 14px/1.3 Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);margin:0}
.v2 .intro{font:400 clamp(1.2rem,4.5vw,1.45rem)/1.5 Fraunces,Georgia,serif}
.v2 section{padding:48px 0;border-top:1px solid var(--line);scroll-margin-top:8px}
.v2 h2{font:600 clamp(1.75rem,6vw,2.25rem)/1.15 Fraunces,Georgia,serif;margin:0 0 20px}
.v2 h3{font:700 17px/1.4 Inter,sans-serif;margin:28px 0 8px}
.v2 p{margin:0 0 14px}
.v2 .muted{color:var(--muted)}
.v2 ul.plain{margin:0;padding-left:20px}
.v2 ul.plain li{margin:6px 0}
.v2 .inline{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:6px 18px;font:italic 400 19px/1.4 Fraunces,Georgia,serif}
.v2 .btn{display:inline-block;background:var(--ink);color:var(--bg);text-decoration:none;padding:12px 20px;border-radius:999px;font-weight:500;margin-top:8px}
.v2 .plan{padding:20px 0;border-top:1px solid var(--line)}
.v2 .plan h3{font:600 1.5rem/1.2 Fraunces,Georgia,serif;margin:0 0 4px}
.v2 .price{font-weight:600;color:var(--accent)}
.v2 .work{padding:16px 0;border-top:1px solid var(--line)}
.v2 .work.ph{color:var(--muted);font-style:italic}
.v2 footer{padding:32px 0;border-top:1px solid var(--line);font-size:14px;color:var(--muted)}
@media(min-width:900px){.v2 .wrap{max-width:720px}.v2 .hero{padding:96px 0 56px}}
`;

export default function VariantEditorial() {
  const { motofix, works, offers, contact } = site;
  return (
    <div className="v2">
      <style>{css}</style>
      <div className="wrap">
        <nav className="top" aria-label="Principal">
          <ul>
            {site.nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <main>
          <section id="sobre-mi" className="hero" style={{ borderTop: 0 }}>
            <p className="role">{site.role}</p>
            <h1>{site.name}</h1>
            <p className="intro">{site.bio[0]}</p>
            {site.bio.slice(1).map((p) => (
              <p key={p} className="muted">{p}</p>
            ))}
            <h3>{site.skillsTitle}</h3>
            <ul className="inline">
              {site.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>

          <section id="motofix">
            <h2>{motofix.title}</h2>
            <p className="intro">{motofix.tagline}</p>
            <p className="muted"><em>{motofix.status}</em></p>
            <h3>{motofix.builtTitle}</h3>
            <ul className="plain">
              {motofix.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <h3>{motofix.stackTitle}</h3>
            <p className="muted">{motofix.stack.join(' · ')}</p>
            <p>{motofix.extra}</p>
            <a className="btn" href={motofix.cta.href} target="_blank" rel="noopener noreferrer">
              {motofix.cta.label}
            </a>
          </section>

          <section id="trabajos">
            <h2>{works.title}</h2>
            {works.items.map((w, i) => (
              <article key={i} className={`work${w.placeholder ? ' ph' : ''}`}>
                <h3 style={{ margin: '0 0 4px' }}>{w.name}</h3>
                <p className="muted" style={{ margin: 0 }}>{w.kind}. {w.desc}</p>
                {w.href && <a href={w.href} target="_blank" rel="noopener noreferrer">Ver sitio</a>}
              </article>
            ))}
          </section>

          <section id="servicios">
            <h2>{offers.title}</h2>
            <p className="intro">{offers.intro}</p>
            {offers.plans.map((p) => (
              <article key={p.name} className="plan">
                <h3>{p.name}</h3>
                <p className="muted">{p.summary}</p>
                <ul className="plain">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <p className="price" style={{ marginTop: 12 }}>{p.price}</p>
              </article>
            ))}
            <h3>{offers.notesTitle}</h3>
            <ul className="plain">
              {offers.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <h3>{offers.extraTitle}</h3>
            <p>{offers.extra}</p>
          </section>

          <section id="contacto">
            <h2>{contact.title}</h2>
            <p className="intro">{contact.intro}</p>
            <ul className="plain">
              {contact.items.map((c) => (
                <li key={c.label}>
                  <strong>{c.label}:</strong> {c.value}
                </li>
              ))}
            </ul>
          </section>
        </main>
        <footer>{site.footer}</footer>
      </div>
    </div>
  );
}
