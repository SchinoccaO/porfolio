import { site } from '../content/site';
import { Reveal } from './ui';

export default function Motofix() {
  const m = site.motofix;
  return (
    <section id="motofix" className="sec sec--ink motofix" aria-labelledby="h-moto">
      <div className="wrap">
        <Reveal as="p" className="label mono">03 / {m.kicker}</Reveal>
        <Reveal as="h2" id="h-moto" anim="fadeInLeft" className="h2 motofix__title">{m.title}</Reveal>
        <div className="motofix__grid">
          <div>
            <Reveal as="p" className="body body--lead">{m.lead}</Reveal>
            <Reveal as="p" className="body" delay={80}>{m.why}</Reveal>
            <Reveal as="p" className="motofix__status mono" delay={120}>{m.status}</Reveal>
            <Reveal className="motofix__cta" delay={160}>
              <a className="btn btn--paper" href={m.cta.href} target="_blank" rel="noopener noreferrer">
                {m.cta.label}
                <span aria-hidden="true" className="btn__arrow">↗</span>
              </a>
            </Reveal>
          </div>
          <Reveal as="div" className="hud hud--dark" anim="fadeInUp">
            <p className="hud__head mono"><span>{m.builtTitle}</span><span>MX</span></p>
            <ul className="chips">
              {m.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
