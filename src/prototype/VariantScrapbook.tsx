// PROTOTYPE (throwaway): variant 1 "Scrapbook" (cream paper, burgundy, baby blue).
import './scrapbook.css';
import { site } from '../content/site';
import { ContactForm, Marquee, Reveal, Torn, WaveText } from './shared';

const CREAM = '#f6efe0';
const WINE = '#8a1538';
const BLUE = '#b9cde4';

function Pin({ className = '' }: { className?: string }) {
  return <span className={`pin ${className}`} aria-hidden="true" />;
}

export default function VariantScrapbook() {
  const { about, motofix, works, services, process, contact } = site;
  return (
    <div className="sb">
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <header className="sb-top">
        <a href="#top" className="sb-brand">
          O.S.
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
        <section className="sb-hero" id="top">
          <div className="sb-hero-inner">
            <Reveal anim="zoomIn" className="sb-name stamp">
              <Pin className="pin-tl" />
              <span>{site.name}</span>
            </Reveal>
            <h1>
              {site.tagline.map((line, i) => (
                <span key={line} className={`sb-line l${i}`}>
                  <WaveText text={line} step={60} />
                </span>
              ))}
            </h1>
            <Reveal anim="fadeInUp" delay={250}>
              <p className="sb-role">
                <strong>{site.role}</strong> {site.sub}
              </p>
            </Reveal>
            <Reveal anim="fadeInUp" delay={400} className="sb-ctas">
              <a className="btn btn-wine" href={site.heroCtas.services.href}>
                {site.heroCtas.services.label}
              </a>
              <a className="btn btn-ghost" href={site.heroCtas.contact.href}>
                {site.heroCtas.contact.label}
              </a>
            </Reveal>
            <ul className="sb-stickers" aria-label="En pocas palabras">
              {site.heroStickers.map((s, i) => (
                <li key={s} className={`pill p${i}`} data-ambient>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <Torn color={WINE} seed={3} />
        </section>

        <div className="sb-marquee">
          <Marquee words={site.marquee} />
        </div>

        <section id="sobre-mi" className="sb-about" aria-labelledby="h-about">
          <Torn color={WINE} flip seed={5} />
          <div className="wrap">
            <Reveal as="h2" id="h-about" anim="fadeInLeft" className="sb-h">
              {about.title}
            </Reveal>
            <div className="sb-about-grid">
              <Reveal anim="fadeInUp" className="notebook">
                <span className="rings" aria-hidden="true" />
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Reveal>
              <Reveal anim="fadeInRight" delay={150} className="polaroid" aria-label="Espacio para una foto">
                <Pin className="pin-t" />
                <div className="photo-slot">
                  <span>{about.photoLabel}</span>
                  <small>{about.photoNote}</small>
                </div>
                <span className="cap">{about.place}</span>
              </Reveal>
            </div>
            <Reveal anim="fadeInUp" className="sb-skills">
              <h3>{about.skillsTitle}</h3>
              <ul>
                {about.skills.map((s, i) => (
                  <li key={s} className={`pill s${i % 2}`}>
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section id="motofix" className="sb-moto" aria-labelledby="h-moto">
          <Torn color={CREAM} flip seed={8} />
          <div className="wrap">
            <Reveal anim="fadeInUp">
              <p className="pill pill-blue">{motofix.kicker}</p>
              <h2 id="h-moto" className="sb-h light">
                {motofix.title}
              </h2>
            </Reveal>
            <Reveal anim="fadeInUp" delay={100} className="stamp moto-card">
              <Pin className="pin-tr" />
              <p className="lead">{motofix.lead}</p>
              <p>{motofix.why}</p>
              <h3>{motofix.builtTitle}</h3>
              <ul className="moto-list">
                {motofix.built.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="status">{motofix.status}</p>
              <a className="btn btn-wine" href={motofix.cta.href} target="_blank" rel="noopener noreferrer">
                {motofix.cta.label}
              </a>
            </Reveal>
          </div>
          <Torn color={CREAM} seed={11} />
        </section>

        <section id="trabajos" className="sb-works" aria-labelledby="h-works">
          <div className="wrap">
            <Reveal as="h2" id="h-works" anim="fadeInLeft" className="sb-h">
              {works.title}
            </Reveal>
            <ul className="works">
              {works.items.map((w, i) => (
                <Reveal as="li" key={i} anim="fadeInUp" delay={i * 120} className={`work ${w.soon ? 'soon' : 'real stamp'} r${i}`}>
                  <span className="pill pill-blue">{w.kind}</span>
                  <h3>{w.name}</h3>
                  <p>{w.desc}</p>
                  {!w.soon && (
                    <a href={w.href} target="_blank" rel="noopener noreferrer">
                      Ver proyecto
                    </a>
                  )}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section id="servicios" className="sb-services" aria-labelledby="h-serv">
          <Torn color={CREAM} flip seed={13} />
          <div className="wrap">
            <Reveal as="h2" id="h-serv" anim="fadeInLeft" className="sb-h">
              {services.title}
            </Reveal>
            <p className="intro">{services.intro}</p>
            <div className="plans">
              {services.plans.map((p, i) => (
                <Reveal key={p.name} anim="fadeInUp" delay={i * 150} className={`plan ${i === 0 ? 'plan-a' : 'plan-b'}`}>
                  <div className="keytag" aria-label={services.price}>
                    <span>{services.price}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p className="pitch">{p.pitch}</p>
                  <p>{p.desc}</p>
                  <ul className="stars">
                    {p.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
            <Reveal anim="fadeInUp" className="extras">
              <h3>{services.extrasTitle}</h3>
              <ul>
                {services.extras.map((e) => (
                  <li key={e} className="pill">
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal anim="fadeInUp" className="note">
              <h3>{services.notesTitle}</h3>
              <ul>
                {services.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Torn color={CREAM} seed={17} />
        </section>

        <section className="sb-process" aria-labelledby="h-proc">
          <div className="wrap">
            <Reveal as="h2" id="h-proc" anim="fadeInLeft" className="sb-h">
              {process.title}
            </Reveal>
            <ol className="steps">
              {process.steps.map((s, i) => (
                <Reveal as="li" key={s.title} anim="fadeInRight" delay={i * 130} className={`step c${i}`}>
                  <span className="num">0{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section id="contacto" className="sb-contact" aria-labelledby="h-contact">
          <Torn color={CREAM} flip seed={21} />
          <div className="wrap">
            <Reveal as="h2" id="h-contact" anim="fadeInLeft" className="sb-h light">
              {contact.title}
            </Reveal>
            <Reveal anim="fadeInUp" className="stamp contact-card">
              <p>{contact.intro}</p>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="sb-foot">
        <p>{site.footer}</p>
      </footer>
    </div>
  );
}
