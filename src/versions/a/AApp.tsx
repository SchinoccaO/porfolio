import { useEffect, useRef } from 'react';
import { site } from '../../content/site';
import Waves from './Waves';

/** Hand-drawn loop around a word. */
function Circle() {
  return (
    <svg className="a-circle" viewBox="0 0 220 110" aria-hidden="true" preserveAspectRatio="none">
      <path
        pathLength={1}
        d="M30 20 C70 2 190 4 208 42 C224 80 150 106 98 102 C30 98 2 70 14 40 C22 22 60 12 96 10"
      />
    </svg>
  );
}

/** Hand-drawn underline. */
function Under({ className = '' }: { className?: string }) {
  return (
    <svg className={`a-under ${className}`} viewBox="0 0 200 16" aria-hidden="true" preserveAspectRatio="none">
      <path pathLength={1} d="M3 11 C40 3 70 14 110 7 S175 9 197 4" />
    </svg>
  );
}

function Star({ className = '' }: { className?: string }) {
  return (
    <svg className={`a-star ${className}`} viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 0 C21 12 28 19 40 20 C28 21 21 28 20 40 C19 28 12 21 0 20 C12 19 19 12 20 0Z" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg className="a-arrow" viewBox="0 0 40 16" aria-hidden="true">
      <path d="M1 8 H36 M28 1 L37 8 L28 15" />
    </svg>
  );
}

export default function AApp() {
  const rootRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  // Reveal on scroll + hero pointer parallax (desktop only).
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(root.querySelectorAll<HTMLElement>('.a-rv'));
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('a-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('a-in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
    );
    els.forEach((e) => io.observe(e));

    const fine = window.matchMedia('(pointer: fine)').matches && window.innerWidth >= 768;
    let off: (() => void) | undefined;
    const photo = photoRef.current;
    if (fine && photo) {
      let raf = 0;
      const onMove = (e: PointerEvent) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          photo.style.setProperty('--px', `${(nx * -18).toFixed(1)}px`);
          photo.style.setProperty('--py', `${(ny * -10).toFixed(1)}px`);
        });
      };
      window.addEventListener('pointermove', onMove, { passive: true });
      off = () => window.removeEventListener('pointermove', onMove);
    }
    return () => {
      io.disconnect();
      off?.();
    };
  }, []);

  const h = site.hero;
  const idx = h.title.indexOf(h.scribbleWord);
  const before = h.title.slice(0, idx);
  const after = h.title.slice(idx + h.scribbleWord.length).trim();
  const s = site.services;
  const marquee = [h.identity, h.identity];

  return (
    <div className="a-root" ref={rootRef}>
      {/* ---------- header ---------- */}
      <header className="a-head">
        <a className="a-head__brand" href="#top">
          {site.name}
        </a>
        <nav className="a-head__nav" aria-label="Principal">
          {site.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="a-head__cta" href={h.cta.href}>
          {site.contact.title}
        </a>
      </header>

      <main id="top">
        {/* ---------- hero ---------- */}
        <section className="a-hero" aria-labelledby="a-h1">
          <Waves className="a-hero__waves" />
          <div className="a-hero__inner">
            <h1 id="a-h1" className="a-h1">
              <span className="a-h1__a">{before}</span>
              <span className="a-web">
                {h.scribbleWord}
                <Circle />
              </span>
              <span className="a-h1__b">{after}</span>
            </h1>

            <div className="a-stage">
              <p className="a-giant" aria-hidden="true">
                <span>Ori</span>
                <span>ana</span>
              </p>
              <div className="a-photo" ref={photoRef}>
                <img src="/oriana.webp" alt={h.photoAlt} width={1100} height={1449} fetchPriority="high" />
              </div>
              <Star className="a-star--hero1" />
              <Star className="a-star--hero2" />
              <p className="a-sub">{h.sub}</p>
              <a className="a-cta" href={h.cta.href}>
                {h.cta.label}
                <Arrow />
              </a>
              <p className="a-edition" aria-hidden="true">
                {h.edition} · {h.plate}
              </p>
            </div>
          </div>
        </section>

        {/* ---------- marquee ---------- */}
        <div className="a-marquee" aria-hidden="true">
          <div className="a-marquee__track">
            {marquee.concat(marquee).map((t, i) => (
              <span key={i}>
                {t}
                <Star />
              </span>
            ))}
          </div>
        </div>

        {/* ---------- statement ---------- */}
        <section className="a-statement" aria-label="Declaración">
          <div className="a-statement__zebra" aria-hidden="true" />
          <div className="a-statement__band a-rv">
            <p className="a-statement__l1">{site.statement[0]}</p>
            <p className="a-statement__l2">
              <span>
                {site.statement[1].replace(site.statementScribble, '')}
                <em>{site.statementScribble}</em>
              </span>
            </p>
          </div>
          <p className="a-statement__sub a-rv">
            {site.sub}
            <Under />
          </p>
        </section>

        {/* ---------- servicios ---------- */}
        <section className="a-serv" id="servicios" aria-labelledby="a-serv-t">
          <h2 id="a-serv-t" className="a-h2 a-h2--outline a-rv">
            {s.title}
          </h2>
          <p className="a-serv__intro a-rv">{s.intro}</p>

          <div className="a-serv__stack">
            <article className="a-plan a-plan--tpl a-rv">
              <h3>{s.plans[0].name}</h3>
              <p className="a-plan__pitch">{s.plans[0].pitch}</p>
              <p>{s.plans[0].desc}</p>
              <p className="a-plan__list">{s.plans[0].items.join(' / ')}</p>
            </article>

            <article className="a-plan a-plan--custom a-rv">
              <div className="a-plan__zebra" aria-hidden="true" />
              <div className="a-stamp">
                <span>{s.price}</span>
              </div>
              <h3>{s.plans[1].name}</h3>
              <p className="a-plan__pitch">{s.plans[1].pitch}</p>
              <p>{s.plans[1].desc}</p>
              <p className="a-plan__list">{s.plans[1].items.join('. ')}.</p>
            </article>
          </div>

          <div className="a-serv__extras">
            <p className="a-extras a-rv">
              <span className="a-script">{s.extrasTitle}</span>
              {s.extras.map((e, i) => (
                <span key={e}>
                  {e}
                  {i < s.extras.length - 1 ? <Star /> : '.'}
                </span>
              ))}
            </p>
            <div className="a-note a-rv">
              <p className="a-script">{s.notesTitle}</p>
              {s.notes.map((n) => (
                <p key={n}>{n}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- motofix ---------- */}
        <section className="a-moto" id="motofix" aria-labelledby="a-moto-t">
          <p className="a-moto__ghost" aria-hidden="true">
            Motofix
          </p>
          <div className="a-moto__body">
            <p className="a-script a-script--orange a-rv">{site.motofix.kicker}</p>
            <h2 id="a-moto-t" className="a-h2 a-rv">
              {site.motofix.title}
            </h2>
            <p className="a-moto__lead a-rv">{site.motofix.lead}</p>
            <p className="a-moto__why a-rv">{site.motofix.why}</p>
            <div className="a-moto__built a-rv">
              <p className="a-script a-script--orange">{site.motofix.builtTitle}</p>
              <p>
                {site.motofix.built.map((b, i) => (
                  <span key={b}>
                    {b}
                    {i < site.motofix.built.length - 1 ? <Star /> : '.'}
                  </span>
                ))}
              </p>
            </div>
            <a className="a-btn a-btn--cream a-rv" href={site.motofix.cta.href} target="_blank" rel="noopener noreferrer">
              {site.motofix.cta.label}
              <Arrow />
            </a>
          </div>
          <div className="a-moto__seal a-rv" aria-label={site.motofix.status}>
            <span>{site.motofix.status}</span>
          </div>
        </section>

        {/* ---------- sobre mi ---------- */}
        <section className="a-about" id="sobre-mi" aria-labelledby="a-about-t">
          <h2 id="a-about-t" className="a-h2 a-h2--blue a-rv">
            {site.about.title}
            <Under className="a-under--orange" />
          </h2>
          <div className="a-about__cols">
            <p className="a-about__lead a-rv">{site.about.paragraphs[0]}</p>
            <div className="a-about__side">
              <p className="a-rv">{site.about.paragraphs[1]}</p>
              <p className="a-rv">{site.about.paragraphs[2]}</p>
            </div>
          </div>
          <p className="a-skills a-rv">
            <span className="a-script">{site.about.skillsTitle}</span>
            {site.about.skills.map((k, i, arr) => (
              <span key={k} className="a-skills__w">
                {i === arr.length - 1 ? 'y ' : ''}
                <b>{k}</b>
                {i < arr.length - 2 ? ', ' : i === arr.length - 2 ? ' ' : '.'}
                {i % 2 === 0 ? <Under /> : null}
              </span>
            ))}
          </p>
          <div className="a-about__foot">
            <svg className="a-seal" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="a-seal-p" d="M100 100 m-78 0 a78 78 0 1 1 156 0 a78 78 0 1 1 -156 0" />
              </defs>
              <text>
                <textPath href="#a-seal-p">
                  {site.about.place.toUpperCase()} ✺ {site.handle.toUpperCase()} ✺ {site.about.place.toUpperCase()} ✺
                </textPath>
              </text>
            </svg>
            <p className="a-script a-about__small a-rv">{site.about.smallLine}</p>
          </div>
        </section>

        {/* ---------- trabajos ---------- */}
        <section className="a-works" id="trabajos" aria-labelledby="a-works-t">
          <h2 id="a-works-t" className="a-h2 a-h2--right a-rv">
            {site.works.title}
          </h2>
          <ol className="a-works__list">
            {site.works.items.map((w, i) => (
              <li key={i} className={`a-work a-work--${i} a-rv`}>
                {w.soon ? (
                  <div className="a-work__in">
                    <span className="a-work__n">0{i + 1}</span>
                    <span className="a-work__name">{w.name}</span>
                    <span className="a-script a-work__kind">{w.kind}</span>
                    <span className="a-work__desc">{w.desc}</span>
                  </div>
                ) : (
                  <a className="a-work__in" href={w.href} target="_blank" rel="noopener noreferrer">
                    <span className="a-work__n">0{i + 1}</span>
                    <span className="a-work__name">{w.name}</span>
                    <span className="a-script a-work__kind">{w.kind}</span>
                    <span className="a-work__desc">{w.desc}</span>
                    <Arrow />
                  </a>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- como trabajo ---------- */}
        <section className="a-proc" aria-labelledby="a-proc-t">
          <h2 id="a-proc-t" className="a-h2 a-h2--blue a-rv">
            {site.process.title}
          </h2>
          <svg className="a-proc__line" viewBox="0 0 100 400" preserveAspectRatio="none" aria-hidden="true">
            <path d="M20 0 C90 50 90 90 50 130 C0 180 10 230 55 270 C95 305 80 350 60 400" />
          </svg>
          <ol className="a-proc__steps">
            {site.process.steps.map((st, i) => (
              <li key={st.title} className={`a-step a-step--${i} a-rv`}>
                <span className="a-step__n" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- contacto ---------- */}
        <section className="a-contact" id="contacto" aria-labelledby="a-contact-t">
          <div className="a-contact__zebra" aria-hidden="true" />
          <h2 id="a-contact-t" className="a-h2 a-h2--cream a-rv">
            {site.contact.title}
          </h2>
          <p className="a-contact__intro a-script a-rv">{site.contact.intro}</p>
          <form className="a-form a-rv" onSubmit={(e) => e.preventDefault()}>
            <label>
              <span>{site.contact.fields.type}</span>
              <select name="type" defaultValue="">
                <option value="" disabled>
                  Elegí una opción
                </option>
                {site.contact.fields.typeOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label>
              <span>{site.contact.fields.deadline}</span>
              <input name="deadline" type="text" placeholder={site.contact.fields.deadlinePlaceholder} />
            </label>
            <label>
              <span>{site.contact.fields.problem}</span>
              <textarea name="problem" rows={4} placeholder={site.contact.fields.problemPlaceholder} />
            </label>
            <button type="submit" className="a-btn a-btn--orange">
              {site.contact.fields.submit}
              <Arrow />
            </button>
            <p className="a-form__todo">{site.contact.todoNote}</p>
          </form>
          <ul className="a-channels a-rv">
            {site.contact.channels.map((c) => (
              <li key={c.label}>
                <span className="a-script">{c.label}</span>
                <span>{c.value}</span>
              </li>
            ))}
            <li>
              <span className="a-script">Instagram</span>
              <span>{site.handle}</span>
            </li>
          </ul>
        </section>
      </main>

      <footer className="a-foot">{site.footer}</footer>
    </div>
  );
}
