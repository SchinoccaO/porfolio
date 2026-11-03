// PROTOTYPE (throwaway) variant 3: bold, expressive, industrial-playful.
// Taste reference: nothing (data/sections/nothing: colors, typography, layout).
// Used: #F4F4F4 canvas with pure black and a single red accent, dot-matrix
// display type (Doto from Google Fonts as a stand-in for Nothing's dot font),
// grotesk body, hard 2px borders, modular tiles, oversized numerals. No assets copied.
import { site } from '../content/site';

const css = `
.v3{--bg:#f4f4f4;--ink:#000;--red:#d71921;--muted:#4a4a4a;
  background:var(--bg);color:var(--ink);font:400 16px/1.55 'Space Grotesk',system-ui,sans-serif;min-height:100vh;padding-bottom:88px;
  background-image:radial-gradient(#00000014 1px,transparent 1px);background-size:14px 14px}
.v3 .wrap{max-width:1040px;margin:0 auto;padding:0 16px}
.v3 a{color:inherit}
.v3 .dot{font-family:Doto,'Space Grotesk',monospace;font-weight:900;text-transform:uppercase;line-height:.95}
.v3 header.top{display:flex;flex-wrap:wrap;gap:8px;padding:16px 0}
.v3 header.top a{border:2px solid var(--ink);border-radius:999px;padding:4px 12px;font-size:14px;font-weight:500;text-decoration:none;background:var(--bg)}
.v3 header.top a:hover{background:var(--ink);color:var(--bg)}
.v3 h1{font-size:clamp(3rem,17vw,8rem);margin:16px 0 12px;letter-spacing:-.01em}
.v3 h1 span{color:var(--red)}
.v3 .role{display:inline-block;background:var(--ink);color:var(--bg);padding:6px 12px;font-weight:700;margin:0 0 20px}
.v3 section{padding:40px 0;scroll-margin-top:8px}
.v3 h2{font-size:clamp(2rem,9vw,3.5rem);margin:0 0 20px}
.v3 h2 .n{color:var(--red);margin-right:8px}
.v3 h3{font-size:20px;font-weight:700;margin:0 0 8px}
.v3 p{margin:0 0 12px}
.v3 .tile{background:#fff;border:2px solid var(--ink);border-radius:20px;padding:20px}
.v3 .tile.dark{background:var(--ink);color:var(--bg)}
.v3 .tile.red{background:var(--red);color:#fff}
.v3 .tile.dash{border-style:dashed;background:transparent}
.v3 .grid{display:grid;gap:12px;grid-template-columns:1fr}
.v3 .chips{display:flex;flex-wrap:wrap;gap:8px;list-style:none;padding:0;margin:0}
.v3 .chips li{border:2px solid var(--ink);border-radius:999px;padding:6px 14px;font-weight:700;background:#fff}
.v3 ul.list{margin:0;padding:0;list-style:none}
.v3 ul.list li{padding:8px 0 8px 22px;position:relative;border-top:2px solid currentColor}
.v3 ul.list li::before{content:'';position:absolute;left:0;top:17px;width:10px;height:10px;border-radius:50%;background:var(--red)}
.v3 .tile.red ul.list li::before{background:#fff}
.v3 .btn{display:inline-block;background:var(--red);color:#fff;border:2px solid var(--ink);border-radius:999px;padding:12px 22px;font-weight:700;text-decoration:none;margin-top:8px}
.v3 .price{font-weight:700;font-size:20px;margin-top:12px}
.v3 footer{border-top:2px solid var(--ink);padding:24px 0;font-weight:500}
@media(min-width:760px){.v3 .wrap{padding:0 32px}.v3 .grid.two{grid-template-columns:1fr 1fr}.v3 .grid.three{grid-template-columns:repeat(3,1fr)}.v3 .span2{grid-column:span 2}}
`;

export default function VariantPlayful() {
  const { motofix, works, offers, contact } = site;
  const [first, ...rest] = site.name.split(' ');
  return (
    <div className="v3">
      <style>{css}</style>
      <div className="wrap">
        <header className="top">
          {site.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
        </header>

        <main>
          <section id="sobre-mi">
            <p className="role">{site.role}</p>
            <h1 className="dot">
              {first}
              <br />
              <span>{rest.join(' ')}</span>
            </h1>
            <div className="grid two">
              <div className="tile">
                {site.bio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="tile dark">
                <h3>{site.skillsTitle}</h3>
                <ul className="chips" style={{ color: '#000' }}>
                  {site.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="motofix">
            <h2 className="dot"><span className="n">01</span>{motofix.title}</h2>
            <div className="grid two">
              <div className="tile red span2">
                <p style={{ fontSize: 20, fontWeight: 500 }}>{motofix.tagline}</p>
                <p><strong>{motofix.status}</strong></p>
                <a className="btn" style={{ background: '#000' }} href={motofix.cta.href} target="_blank" rel="noopener noreferrer">
                  {motofix.cta.label}
                </a>
              </div>
              <div className="tile">
                <h3>{motofix.builtTitle}</h3>
                <ul className="list">
                  {motofix.built.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="tile">
                <h3>{motofix.stackTitle}</h3>
                <ul className="chips">
                  {motofix.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p style={{ marginTop: 16 }}>{motofix.extra}</p>
              </div>
            </div>
          </section>

          <section id="trabajos">
            <h2 className="dot"><span className="n">02</span>{works.title}</h2>
            <div className="grid three">
              {works.items.map((w, i) => (
                <article key={i} className={`tile${w.placeholder ? ' dash' : ''}`}>
                  <p style={{ fontWeight: 700, color: 'var(--red)' }}>{w.kind}</p>
                  <h3>{w.name}</h3>
                  <p>{w.desc}</p>
                  {w.href && <a href={w.href} target="_blank" rel="noopener noreferrer">Ver sitio</a>}
                </article>
              ))}
            </div>
          </section>

          <section id="servicios">
            <h2 className="dot"><span className="n">03</span>{offers.title}</h2>
            <p>{offers.intro}</p>
            <div className="grid two">
              {offers.plans.map((p, i) => (
                <article key={p.name} className={`tile${i === 1 ? ' dark' : ''}`}>
                  <h3 className="dot" style={{ fontSize: 32 }}>{p.name}</h3>
                  <p>{p.summary}</p>
                  <ul className="list">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <div className="price">{p.price}</div>
                </article>
              ))}
              <div className="tile span2">
                <h3>{offers.notesTitle}</h3>
                <ul className="list">
                  {offers.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
              <div className="tile red span2">
                <h3>{offers.extraTitle}</h3>
                <p style={{ margin: 0 }}>{offers.extra}</p>
              </div>
            </div>
          </section>

          <section id="contacto">
            <h2 className="dot"><span className="n">04</span>{contact.title}</h2>
            <div className="tile">
              <p style={{ fontSize: 20 }}>{contact.intro}</p>
              <ul className="list">
                {contact.items.map((c) => (
                  <li key={c.label}>
                    <strong>{c.label}:</strong> {c.value}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
        <footer>{site.footer}</footer>
      </div>
    </div>
  );
}
