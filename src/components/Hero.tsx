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
          <svg width="0" height="0" className="sr-only" aria-hidden="true" focusable="false">
            <defs>
              <filter id="duotone" colorInterpolationFilters="sRGB">
                <feColorMatrix type="saturate" values="0" />
                <feComponentTransfer>
                  <feFuncR type="gamma" amplitude="1.8" exponent="0.75" />
                  <feFuncG type="gamma" amplitude="1.8" exponent="0.75" />
                  <feFuncB type="gamma" amplitude="1.8" exponent="0.75" />
                </feComponentTransfer>
                <feComponentTransfer>
                  <feFuncR type="table" tableValues="0.047 1" />
                  <feFuncG type="table" tableValues="0.047 0.30" />
                  <feFuncB type="table" tableValues="0.051 0.12" />
                </feComponentTransfer>
              </filter>
            </defs>
          </svg>
          <img className="hero__photo" src="/oriana.webp" width="1800" height="1200" alt={h.photoAlt} fetchPriority="high" />
          <span className="hero__grain" aria-hidden="true" />
          <span className="tape tape--a" aria-hidden="true" />
          <span className="tape tape--b" aria-hidden="true" />
          <Sticker className="sticker--a">{h.stickers[0]}</Sticker>
          <Sticker className="sticker--b">{h.stickers[1]}</Sticker>
          <p className="hero__giant" aria-hidden="true">{h.giantWord}</p>
        </div>

        <div className="hero__copy">
          <Title />
          <p className="hero__sub">{h.sub}</p>
          <a className="btn btn--ink btn--xl hero__cta" href={h.cta.href}>
            {h.cta.label}
            <span aria-hidden="true" className="btn__arrow">→</span>
          </a>
          <p className="hero__id mono">{h.identity}</p>
        </div>
      </div>
    </section>
  );
}
