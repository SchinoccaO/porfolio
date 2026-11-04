import { useEffect, useRef } from 'react';
import { site } from '../../content/site';
import Waves from './Waves';

/** Hand-drawn loop around a word. */
function Circle() {
  return (
    <svg className="a-circle" viewBox="0 0 220 110" aria-hidden="true" preserveAspectRatio="none">
      <path d="M30 20 C70 2 190 4 208 42 C224 80 150 106 98 102 C30 98 2 70 14 40 C22 22 60 12 96 10" />
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

/** Inline run of words separated by a small orange mark (CSS). */
function Run({ items, className = '' }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`a-run ${className}`}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

const NAV = [
  { id: 'que-te-doy', label: site.offer.title },
  { id: 'servicios', label: site.services.title },
  { id: 'motofix', label: site.motofix.title },
  { id: 'sobre-mi', label: site.about.title },
  { id: 'contacto', label: site.contact.title },
];

export default function AApp() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Scroll reveals: one shared fade/rise per block.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>('.a-rv'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  const h = site.hero;
  const idx = h.title.indexOf(h.scribbleWord);
  const before = h.title.slice(0, idx);
  const after = h.title.slice(idx + h.scribbleWord.length).trim();
  const o = site.offer;
  const s = site.services;
  const m = site.motofix;
  const work = site.works.items[0];
  const channels = site.contact.channels.filter((c) => !c.value.startsWith('TODO'));
  const [l1, l2] = site.statement;

  return (
    <div className="a-root" ref={rootRef}>
      <header className="a-head">
        <a className="a-head__brand" href="#top">
          {site.name}
        </a>
        <nav className="a-head__nav" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* ---------- hero ---------- */}
        <section className="a-hero" aria-labelledby="a-h1">
          <Waves className="a-hero__waves" />
          <div className="a-hero__copy">
            <h1 id="a-h1" className="a-h1">
              <span>{before}</span>
              <span className="a-web">
                {h.scribbleWord}
                <Circle />
              </span>{' '}
              <span>{after}</span>
            </h1>
            <p className="a-sub">{h.sub}</p>
            <a className="a-cta" href={h.cta.href}>
              {h.cta.label}
              <Arrow />
            </a>
          </div>
          <div className="a-stage">
            <img className="a-photo" src="/oriana.webp" alt={h.photoAlt} width={1100} height={1449} fetchPriority="high" />
            <p className="a-giant" aria-hidden="true">
              {h.giantWord}
            </p>
          </div>
        </section>

        {/* ---------- statement ---------- */}
        <section className="a-statement" aria-label="Declaración">
          <div className="a-zebra" aria-hidden="true" />
          <p className="a-statement__l1 a-rv">{l1}</p>
          <p className="a-statement__l2 a-rv">
            {l2.replace(site.statementScribble, '')}
            <em>{site.statementScribble}</em>
          </p>
        </section>

        {/* ---------- qué te doy ---------- */}
        <section className="a-offer" id="que-te-doy" aria-labelledby="a-offer-t">
          <h2 id="a-offer-t" className="a-h2 a-rv">
            {o.title}
          </h2>
          <div className="a-offer__texts">
            <p className="a-offer__lead a-rv">{o.lead}</p>
            <p className="a-offer__own a-rv">{o.own}</p>
          </div>
          <blockquote className="a-pull a-rv">{o.inpi}</blockquote>
          <div className="a-logic a-rv">
            <h3>{o.logicTitle}</h3>
            <p>{o.logic}</p>
          </div>
        </section>

        {/* ---------- servicios ---------- */}
        <section className="a-serv" id="servicios" aria-labelledby="a-serv-t">
          <h2 id="a-serv-t" className="a-h2 a-rv">
            {s.title}
          </h2>
          <p className="a-serv__intro a-rv">{s.intro}</p>
          <div className="a-plans">
            {s.plans.map((p) => (
              <article key={p.name} className="a-plan a-rv">
                <h3>{p.name}</h3>
                <div>
                  <p className="a-plan__pitch">{p.pitch}</p>
                  <p>{p.desc}</p>
                  <Run items={p.items} className="a-run--small" />
                </div>
              </article>
            ))}
          </div>
          <a className="a-price a-rv" href="#contacto">
            {s.price}
            <Arrow />
          </a>
          <div className="a-serv__more a-rv">
            <div>
              <h3 className="a-label">{s.extrasTitle}</h3>
              <Run items={s.extras} className="a-run--small" />
            </div>
            <div>
              <h3 className="a-label">{s.notesTitle}</h3>
              {s.notes.map((n) => (
                <p key={n}>{n}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- cómo trabajo ---------- */}
        <section className="a-proc" aria-labelledby="a-proc-t">
          <h2 id="a-proc-t" className="a-h2 a-rv">
            {site.process.title}
          </h2>
          <ol className="a-steps">
            {site.process.steps.map((st, i) => (
              <li key={st.title} className="a-step a-rv">
                <span className="a-step__n" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- motofix ---------- */}
        <section className="a-moto" id="motofix" aria-labelledby="a-moto-t">
          <p className="a-kicker a-rv">{m.kicker}</p>
          <h2 id="a-moto-t" className="a-h2 a-rv">
            {m.title}
          </h2>
          <div className="a-moto__cols">
            <div className="a-rv">
              <p className="a-moto__lead">{m.lead}</p>
              <p>{m.summary}</p>
              <p className="a-moto__kind">
                {work.kind}. {work.desc}
              </p>
            </div>
          </div>
          <a className="a-btn a-btn--orange a-rv" href={m.cta.href} target="_blank" rel="noopener noreferrer">
            {m.cta.label}
            <Arrow />
          </a>
        </section>

        {/* ---------- sobre mí ---------- */}
        <section className="a-about" id="sobre-mi" aria-labelledby="a-about-t">
          <h2 id="a-about-t" className="a-h2 a-rv">
            {site.about.title}
          </h2>
          <div className="a-about__cols">
            <p className="a-about__lead a-rv">{site.about.paragraphs[0]}</p>
            <div className="a-rv">
              <p>{site.about.paragraphs[1]}</p>
              <h3 className="a-label">{site.about.skillsTitle}</h3>
              <Run items={site.about.skills} className="a-run--small" />
            </div>
          </div>
        </section>

        {/* ---------- contacto ---------- */}
        <section className="a-contact" id="contacto" aria-labelledby="a-contact-t">
          <h2 id="a-contact-t" className="a-h2 a-rv">
            {site.contact.title}
          </h2>
          <p className="a-contact__intro a-rv">{site.contact.intro}</p>
          <form className="a-form a-rv" onSubmit={(e) => e.preventDefault()}>
            <label>
              <span>{site.contact.fields.type}</span>
              <select name="type" defaultValue="">
                <option value="" disabled>
                  Elegí una opción
                </option>
                {site.contact.fields.typeOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
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
            <button type="submit" className="a-btn a-btn--ink">
              {site.contact.fields.submit}
              <Arrow />
            </button>
          </form>
          <ul className="a-channels a-rv">
            {channels.map((c) => (
              <li key={c.label}>
                <span>{c.label}</span>
                {c.value}
              </li>
            ))}
            <li>
              <span>Instagram</span>
              <a href={`https://instagram.com/${site.handle.slice(1)}`} target="_blank" rel="noopener noreferrer">
                {site.handle}
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="a-foot">{site.footer}</footer>
    </div>
  );
}
