import { site } from '../content/site';
import { Reveal } from './ui';

export default function Services() {
  const s = site.services;
  return (
    <section id="servicios" className="sec sec--ink services" aria-labelledby="h-serv">
      <div className="wrap">
        <Reveal as="p" className="label mono">05 / {s.title}</Reveal>
        <Reveal as="h2" id="h-serv" anim="fadeInLeft" className="h2">{s.title}</Reveal>
        <Reveal as="p" className="body body--lead">{s.intro}</Reveal>

        <div className="plans">
          {s.plans.map((p, i) => (
            <Reveal as="article" key={p.name} delay={i * 100} className={`plan${i === 1 ? ' plan--hot' : ''}`}>
              <p className="plan__tag mono"><span>PLAN_0{i + 1}</span><span>{i === 0 ? 'ESTÁNDAR' : 'A MEDIDA'}</span></p>
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__pitch">{p.pitch}</p>
              <p className="plan__desc">{p.desc}</p>
              <ul className="plan__items">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="services__price mono">{s.price}</Reveal>

        <div className="services__more">
          <Reveal as="div" className="hud hud--dark">
            <p className="hud__head mono"><span>{s.extrasTitle}</span><span>+</span></p>
            <ul className="chips">
              {s.extras.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal as="div" className="notes" delay={100}>
            <p className="notes__title mono">{s.notesTitle}</p>
            <ul>
              {s.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
