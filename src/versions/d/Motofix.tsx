import { site } from '../../content/site';
import { burstPoints } from './Hero';

const STAR = burstPoints(16, 49, 40);

export default function Motofix() {
  const m = site.motofix;
  return (
    <section id="motofix" className="d-mf" aria-labelledby="d-h-mf">
      <div className="d-mf__head">
        <p className="d-hand d-mf__kicker d-rv">{m.kicker}</p>
        <div className="d-mf__logo">
          <svg className="d-mf__burst" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
            <polygon points={STAR} />
          </svg>
          <h2 id="d-h-mf" className="d-mf__title" aria-label={m.title}>
            {m.title.split('').map((c, i) => (
              <span key={i} aria-hidden="true" className={`d-L d-L${i}`}>{c}</span>
            ))}
          </h2>
        </div>
      </div>

      <div className="d-mf__talk">
        <p className="d-say d-say--a d-rv">{m.lead}</p>
        <p className="d-say d-say--b d-rv">{m.why}</p>
        <p className="d-status d-rv">
          <span className="d-status__dot" aria-hidden="true" />
          {m.status}
        </p>
      </div>

      <h3 className="d-mf__built d-hand d-rv">{m.builtTitle}</h3>
      <ul className="d-bubbles">
        {m.built.map((b, i) => (
          <li key={b} className={`d-bub d-bub--${i + 1} d-rv`}>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <a className="d-btn d-btn--lime" href={m.cta.href} target="_blank" rel="noreferrer">
        {m.cta.label}
        <span aria-hidden="true" className="d-btn__arr">↗</span>
      </a>
    </section>
  );
}
