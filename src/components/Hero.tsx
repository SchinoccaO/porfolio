import { Fragment } from 'react';
import { site } from '../content/site';
import { Scribble, Sticker } from './ui';

/** Splits the title so the scribbled word can be wrapped; words enter one by one. */
function Title() {
  const words = site.hero.title.split(' ');
  return (
    <h1 className="hero__title">
      {words.map((w, i) => {
        const marked = w === site.hero.scribbleWord;
        return (
          <Fragment key={i}>
            <span className="hero__word" style={{ animationDelay: `${0.15 + i * 0.07}s` }}>
              {marked ? (
                <span className="mark">
                  {w}
                  <Scribble kind="circle" />
                </span>
              ) : (
                w
              )}
            </span>{' '}
          </Fragment>
        );
      })}
    </h1>
  );
}

export default function Hero() {
  const h = site.hero;
  return (
    <section className="hero" id="top">
      <div className="hero__meta mono" aria-hidden="true">
        <span>{h.plate}</span>
        <span>{h.edition}</span>
        <span>{site.handle}</span>
      </div>

      <div className="hero__grid">
        <div className="hero__plate">
          <div className="hero__stage">
          <p className="hero__giant" aria-hidden="true">{h.giantWord}</p>
          <img className="hero__photo" src="/oriana.webp" width="1100" height="1449" alt={h.photoAlt} fetchPriority="high" />
          </div>
          <span className="tape tape--a" aria-hidden="true" />
          <span className="tape tape--b" aria-hidden="true" />
          <Sticker className="sticker--a">{h.stickers[0]}</Sticker>
          <Sticker className="sticker--b">{h.stickers[1]}</Sticker>
        </div>

        <div className="hero__copy">
          <Title />
          <p className="hero__sub">{h.sub}</p>
          <a className="btn btn--violet btn--xl hero__cta" href={h.cta.href}>
            {h.cta.label}
            <span aria-hidden="true" className="btn__arrow">→</span>
          </a>
          <p className="hero__id mono">{h.identity}</p>
        </div>
      </div>
    </section>
  );
}
