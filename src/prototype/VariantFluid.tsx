// PROTOTYPE (throwaway): variant 2 "Fluid" (warm gradients, wavy paths, rounded tiles).
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import './fluid.css';
import { site } from '../content/site';
import { ContactForm, Marquee, Reveal, useAutoScroll, usePrefersReducedMotion } from './shared';

/** Wavy section divider; the wide SVG drifts sideways (transform only). */
function Wave({ color, flip = false }: { color: string; flip?: boolean }) {
  const d = `M0,34 q45,-34 90,0${' t90,0'.repeat(31)} L2880,60 L0,60 Z`;
  return (
    <div className={`wave-div${flip ? ' flip' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 2880 60" preserveAspectRatio="none" focusable="false" data-ambient>
        <path d={d} style={{ fill: color }} />
      </svg>
    </div>
  );
}

/** Headline displaced by an animated feTurbulence filter (static when reduced motion). */
function WarpFilter({ reduced }: { reduced: boolean }) {
  return (
    <svg width="0" height="0" className="warp-defs" aria-hidden="true" focusable="false">
      <filter id="warp" x="-5%" y="-10%" width="110%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.035" numOctaves="2" seed="4" result="noise">
          {!reduced && (
            <animate
              attributeName="baseFrequency"
              dur="10s"
              values="0.012 0.035;0.02 0.05;0.012 0.035"
              repeatCount="indefinite"
            />
          )}
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale={reduced ? 4 : 12} xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

/** Text running along a wavy ribbon; startOffset is animated by one measured text unit. */
function PathRibbon({ reduced }: { reduced: boolean }) {
  const unitText = `${site.tagline.join(' ')} ✦ `;
  const probe = useRef<SVGTextElement>(null);
  const [unit, setUnit] = useState(420);
  useEffect(() => {
    let live = true;
    document.fonts?.ready.then(() => {
      const len = probe.current?.getComputedTextLength();
      if (live && len) setUnit(len);
    });
    return () => {
      live = false;
    };
  }, []);
  const d = 'M-60,130 C90,10 250,10 410,110 S720,215 1060,80';
  return (
    <div className="ribbon" aria-hidden="true">
      <svg viewBox="0 0 1000 220" width="1000" height="220" focusable="false">
        <text ref={probe} className="probe" x="0" y="0">
          {unitText}
        </text>
        <path id="ribbon-path" d={d} fill="none" stroke="#fff4e6" strokeWidth="50" strokeLinecap="round" />
        <text className="ribbon-text">
          <textPath href="#ribbon-path" startOffset="0">
            {unitText.repeat(4)}
            {!reduced && <animate attributeName="startOffset" from="0" to={-unit} dur="16s" repeatCount="indefinite" />}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default function VariantFluid() {
  const { about, motofix, works, services, process, contact } = site;
  const reduced = usePrefersReducedMotion();
  const carousel = useRef<HTMLUListElement>(null);
  useAutoScroll(carousel);

  return (
    <div className="fl">
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <header className="fl-top">
        <a href="#top" className="fl-brand">
          Oriana<span>.</span>
        </a>
        <nav aria-label="Secciones">
          <ul>
            {site.nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="contenido">
        <section className="fl-hero" id="top">
          <WarpFilter reduced={reduced} />
          <span className="blob b1" data-ambient aria-hidden="true" />
          <span className="blob b2" data-ambient aria-hidden="true" />
          <span className="blob b3" data-ambient aria-hidden="true" />
          <span className="soft-word" aria-hidden="true">
            CREAR
          </span>
          <div className="fl-hero-inner">
            <Reveal anim="fadeInDown" className="pill pill-yellow name">
              {site.name}
            </Reveal>
            <h1>
              <span className="warp">
                {site.tagline.map((line, i) => (
                  <Reveal as="span" key={line} anim="fadeInUp" delay={i * 250} className="fl-line">
                    {line}
                  </Reveal>
                ))}
              </span>
            </h1>
            <PathRibbon reduced={reduced} />
            <Reveal anim="fadeInUp" delay={500}>
              <p className="fl-role">
                <strong>{site.role}</strong> {site.sub}
              </p>
            </Reveal>
            <Reveal anim="fadeInUp" delay={650} className="fl-ctas">
              <a className="btn btn-plum" href={site.heroCtas.services.href}>
                {site.heroCtas.services.label}
              </a>
              <a className="btn btn-cream" href={site.heroCtas.contact.href}>
                {site.heroCtas.contact.label}
              </a>
            </Reveal>
            <ul className="fl-stickers" aria-label="En pocas palabras">
              {site.heroStickers.map((s, i) => (
                <li key={s} className={`pill st${i}`} data-ambient>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <Wave color="#fff4e6" />
        </section>

        <div className="fl-marquee">
          <Marquee words={site.marquee} />
        </div>

        <section id="sobre-mi" className="fl-about" aria-labelledby="f-about">
          <div className="wrap">
            <Reveal as="h2" id="f-about" anim="fadeInLeft" className="fl-h">
              {about.title}
            </Reveal>
            <div className="bento">
              <Reveal anim="zoomIn" className="tile t-yellow t-wide">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Reveal>
              <Reveal anim="zoomIn" delay={120} className="tile t-photo" aria-label="Espacio para una foto">
                <span className="photo-label">{about.photoLabel}</span>
                <small>{about.photoNote}</small>
              </Reveal>
              <Reveal anim="zoomIn" delay={200} className="tile t-green">
                <h3>{about.skillsTitle}</h3>
                <ul>
                  {about.skills.map((s) => (
                    <li key={s} className="pill pill-cream">
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal anim="zoomIn" delay={280} className="tile t-pink">
                <span>{about.place}</span>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="motofix" className="fl-moto" aria-labelledby="f-moto">
          <Wave color="#fff4e6" flip />
          <span className="soft-word dark" aria-hidden="true">
            MOTOFIX
          </span>
          <div className="wrap">
            <Reveal anim="fadeInUp">
              <p className="pill pill-yellow">{motofix.kicker}</p>
              <h2 id="f-moto" className="fl-h light">
                {motofix.title}
              </h2>
            </Reveal>
            <Reveal anim="fadeInUp" delay={120} className="tile t-glass">
              <p className="lead">{motofix.lead}</p>
              <p>{motofix.why}</p>
              <h3>{motofix.builtTitle}</h3>
              <ul className="chips">
                {motofix.built.map((b) => (
                  <li key={b} className="pill pill-cream">
                    {b}
                  </li>
                ))}
              </ul>
              <p className="status">{motofix.status}</p>
              <a className="btn btn-yellow" href={motofix.cta.href} target="_blank" rel="noopener noreferrer">
                {motofix.cta.label}
              </a>
            </Reveal>
          </div>
          <Wave color="#fff4e6" />
        </section>

        <section id="trabajos" className="fl-works" aria-labelledby="f-works">
          <div className="wrap">
            <Reveal as="h2" id="f-works" anim="fadeInLeft" className="fl-h">
              {works.title}
            </Reveal>
          </div>
          <ul className="carousel" ref={carousel} aria-label="Trabajos" tabIndex={0}>
            {works.items.map((w, i) => (
              <li key={i} className={`card ${w.soon ? 'soon' : `real k${i}`}`}>
                <span className="pill pill-cream">{w.kind}</span>
                <h3>{w.name}</h3>
                <p>{w.desc}</p>
                {!w.soon && (
                  <a href={w.href} target="_blank" rel="noopener noreferrer">
                    Ver proyecto
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section id="servicios" className="fl-services" aria-labelledby="f-serv">
          <Wave color="#fff4e6" flip />
          <div className="wrap">
            <Reveal as="h2" id="f-serv" anim="fadeInLeft" className="fl-h">
              {services.title}
            </Reveal>
            <p className="intro">{services.intro}</p>
            <div className="plans">
              {services.plans.map((p, i) => (
                <Reveal key={p.name} anim="fadeInUp" delay={i * 150} className={`tile plan ${i === 0 ? 't-green' : 't-purple'}`}>
                  <span className="pill pill-yellow price" data-ambient>
                    {services.price}
                  </span>
                  <h3>{p.name}</h3>
                  <p className="pitch">{p.pitch}</p>
                  <p>{p.desc}</p>
                  <ul className="chips">
                    {p.items.map((it) => (
                      <li key={it} className="pill pill-cream">
                        {it}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
            <Reveal anim="fadeInUp" className="extras">
              <h3>{services.extrasTitle}</h3>
              <ul className="chips">
                {services.extras.map((e) => (
                  <li key={e} className="pill pill-cream">
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal anim="fadeInUp" className="tile t-pink notes">
              <h3>{services.notesTitle}</h3>
              <ul>
                {services.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Wave color="#fff4e6" />
        </section>

        <section className="fl-process" aria-labelledby="f-proc">
          <div className="wrap">
            <Reveal as="h2" id="f-proc" anim="fadeInLeft" className="fl-h">
              {process.title}
            </Reveal>
            <ol className="steps">
              {process.steps.map((s, i) => (
                <Reveal as="li" key={s.title} anim="fadeInUp" delay={i * 130} className={`step g${i}`}>
                  <span className="num" style={{ '--n': i } as CSSProperties}>
                    {i + 1}
                  </span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section id="contacto" className="fl-contact" aria-labelledby="f-contact">
          <Wave color="#fff4e6" flip />
          <span className="soft-word" aria-hidden="true">
            HOLA
          </span>
          <div className="wrap">
            <Reveal as="h2" id="f-contact" anim="fadeInLeft" className="fl-h light">
              {contact.title}
            </Reveal>
            <Reveal anim="fadeInUp" className="tile t-cream contact-card">
              <p>{contact.intro}</p>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="fl-foot">
        <p>{site.footer}</p>
      </footer>
    </div>
  );
}
