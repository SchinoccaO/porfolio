import { site } from '../content/site';

export default function Motofix() {
  const m = site.motofix;
  const work = site.works.items[0];
  return (
    <section id="motofix" className="sec motofix" aria-labelledby="h-moto">
      <div className="wrap motofix__grid">
        <div className="motofix__head">
          <p className="kicker">{m.kicker}</p>
          <h2 id="h-moto" className="h2 motofix__title">{m.title}</h2>
          <p className="motofix__kind">{work.kind}. {work.desc}</p>
        </div>
        <div className="motofix__body">
          <p className="motofix__lead">{m.lead}</p>
          <p className="body">{m.summary}</p>
          <a className="btn btn--lemon motofix__cta" href={work.href} target="_blank" rel="noopener noreferrer">
            {m.cta.label}
            <span aria-hidden="true" className="btn__arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
