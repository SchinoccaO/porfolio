// PROTOTYPE (throwaway) variant 1: dark, precise, technical.
// Taste reference: linear (data/sections/linear: colors, typography, surfaces, layout).
// Used: near-black canvas, fine translucent white borders, Inter hierarchy with
// tight tracking, bordered panels, a mono accent for labels. No assets copied.
import { site } from '../content/site';

const css = `
.v1{--bg:#08090a;--panel:#0f1011;--text:#f7f8f8;--muted:#a1a6ad;--line:rgba(255,255,255,.09);--accent:#8b9cff;
  background:var(--bg);color:var(--text);font:400 16px/1.6 Inter,system-ui,sans-serif;min-height:100vh;padding-bottom:88px}
.v1 *{min-width:0}
.v1 a{color:inherit}
.v1 .wrap{max-width:960px;margin:0 auto;padding:0 16px}
.v1 header.top{position:sticky;top:0;z-index:5;background:rgba(8,9,10,.85);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
.v1 header.top .wrap{display:flex;align-items:center;gap:16px;height:52px;overflow-x:auto;white-space:nowrap}
.v1 header.top a{color:var(--muted);text-decoration:none;font-size:14px}
.v1 header.top a:hover{color:var(--text)}
.v1 header.top .brand{color:var(--text);font-weight:600;margin-right:auto}
.v1 .mono{font:500 12px/1 'JetBrains Mono',ui-monospace,monospace;letter-spacing:.06em;text-transform:uppercase;color:var(--accent)}
.v1 section{padding:56px 0 8px;scroll-margin-top:52px}
.v1 h1{font-size:clamp(2.25rem,9vw,4rem);line-height:1;letter-spacing:-.03em;font-weight:600;margin:16px 0 12px}
.v1 h2{font-size:clamp(1.5rem,5vw,2rem);line-height:1.15;letter-spacing:-.02em;font-weight:600;margin:12px 0 20px}
.v1 h3{font-size:18px;font-weight:600;margin:0 0 8px;letter-spacing:-.01em}
.v1 p{margin:0 0 12px;color:var(--muted)}
.v1 .lead{font-size:18px;color:var(--text)}
.v1 .panel{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:20px}
.v1 .grid{display:grid;gap:12px;grid-template-columns:1fr}
.v1 .chips{display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:0;list-style:none}
.v1 .chips li{border:1px solid var(--line);border-radius:6px;padding:4px 10px;font:500 13px 'JetBrains Mono',monospace;color:var(--text);background:var(--panel)}
.v1 ul.list{padding:0;margin:0;list-style:none}
.v1 ul.list li{padding:10px 0;border-top:1px solid var(--line);color:var(--muted)}
.v1 ul.list li::before{content:'> ';color:var(--accent);font-family:'JetBrains Mono',monospace}
.v1 .btn{display:inline-block;background:var(--text);color:#08090a;text-decoration:none;font-weight:500;padding:10px 16px;border-radius:8px;margin-top:8px}
.v1 .ph{border-style:dashed;opacity:.8}
.v1 .price{font:500 13px 'JetBrains Mono',monospace;color:var(--accent);margin-top:12px}
.v1 footer{margin-top:64px;border-top:1px solid var(--line);padding:24px 0;color:var(--muted);font-size:14px}
@media(min-width:720px){.v1 .grid.two{grid-template-columns:1fr 1fr}.v1 .grid.three{grid-template-columns:repeat(3,1fr)}.v1 .wrap{padding:0 32px}}
`;

export default function VariantTechnical() {
  const { motofix, works, offers, contact } = site;
  return (
    <div className="v1">
      <style>{css}</style>
      <header className="top">
        <div className="wrap">
          <a className="brand" href="#sobre-mi">{site.name}</a>
          {site.nav.slice(1).map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
        </div>
      </header>

      <main className="wrap">
        <section id="sobre-mi">
          <span className="mono">{site.role}</span>
          <h1>{site.name}</h1>
          <p className="lead">{site.bio[0]}</p>
          {site.bio.slice(1).map((p) => (
            <p key={p}>{p}</p>
          ))}
          <h2 className="mono" style={{ marginTop: 28 }}>{site.skillsTitle}</h2>
          <ul className="chips">
            {site.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="motofix">
          <span className="mono">01 / proyecto</span>
          <h2>{motofix.title}</h2>
          <div className="panel">
            <p className="lead">{motofix.tagline}</p>
            <p className="mono" style={{ color: 'var(--muted)' }}>{motofix.status}</p>
            <h3 style={{ marginTop: 20 }}>{motofix.builtTitle}</h3>
            <ul className="list">
              {motofix.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <h3 style={{ marginTop: 20 }}>{motofix.stackTitle}</h3>
            <ul className="chips">
              {motofix.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p style={{ marginTop: 16 }}>{motofix.extra}</p>
            <a className="btn" href={motofix.cta.href} target="_blank" rel="noopener noreferrer">
              {motofix.cta.label}
            </a>
          </div>
        </section>

        <section id="trabajos">
          <span className="mono">02 / trabajos</span>
          <h2>{works.title}</h2>
          <div className="grid three">
            {works.items.map((w, i) => (
              <article key={i} className={`panel${w.placeholder ? ' ph' : ''}`}>
                <span className="mono">{w.kind}</span>
                <h3 style={{ marginTop: 10 }}>{w.name}</h3>
                <p>{w.desc}</p>
                {w.href && (
                  <a href={w.href} target="_blank" rel="noopener noreferrer">Ver sitio</a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="servicios">
          <span className="mono">03 / servicios</span>
          <h2>{offers.title}</h2>
          <p>{offers.intro}</p>
          <div className="grid two">
            {offers.plans.map((p) => (
              <article key={p.name} className="panel">
                <h3>{p.name}</h3>
                <p className="lead">{p.summary}</p>
                <ul className="list">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="price">{p.price}</div>
              </article>
            ))}
          </div>
          <h3 style={{ marginTop: 28 }}>{offers.notesTitle}</h3>
          <ul className="list">
            {offers.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <div className="panel" style={{ marginTop: 16 }}>
            <h3>{offers.extraTitle}</h3>
            <p style={{ margin: 0 }}>{offers.extra}</p>
          </div>
        </section>

        <section id="contacto">
          <span className="mono">04 / contacto</span>
          <h2>{contact.title}</h2>
          <p>{contact.intro}</p>
          <ul className="list">
            {contact.items.map((c) => (
              <li key={c.label}>
                <strong style={{ color: 'var(--text)' }}>{c.label}:</strong> {c.value}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <div className="wrap">{site.footer}</div>
      </footer>
    </div>
  );
}
