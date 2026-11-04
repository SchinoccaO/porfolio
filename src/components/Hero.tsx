import { Fragment } from 'react';
import { site } from '../content/site';

/** Splits the title so one word gets the lemon marker; everything enters in one staggered sequence. */
function Title() {
  const words = site.hero.title.split(' ');
  return (
    <h1 className="hero__title">
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="hero__word" style={{ ['--i' as string]: i + 2 }}>
            {w === site.hero.scribbleWord ? <span className="hl">{w}</span> : w}
          </span>{' '}
        </Fragment>
      ))}
    </h1>
  );
}

export default function Hero() {
  const h = site.hero;
  // "Oriana Schinocca · Desarrolladora full stack y analista funcional · @handle" -> role only
  const role = h.identity.split(' · ')[1];
  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__plate">
          <p className="hero__giant" aria-hidden="true">{h.giantWord}</p>
          <img className="hero__photo" src="/oriana.webp" width="1100" height="1449" alt={h.photoAlt} fetchPriority="high" />
          <ul className="hero__tags">
            {h.stickers.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="hero__copy">
          <p className="hero__role" style={{ ['--i' as string]: 0 }}>{role}</p>
          <Title />
          <p className="hero__sub" style={{ ['--i' as string]: 8 }}>{h.sub}</p>
          <a className="btn btn--violet btn--xl hero__cta" style={{ ['--i' as string]: 9 }} href={h.cta.href}>
            {h.cta.label}
            <span aria-hidden="true" className="btn__arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
