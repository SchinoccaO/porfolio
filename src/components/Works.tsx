import { useRef } from 'react';
import { site } from '../content/site';
import { Reveal, useAutoScroll } from './ui';

export default function Works() {
  const w = site.works;
  const ref = useRef<HTMLUListElement>(null);
  useAutoScroll(ref);
  return (
    <section id="trabajos" className="sec sec--paper works" aria-labelledby="h-works">
      <div className="wrap">
        <Reveal as="p" className="label mono">04 / {w.title}</Reveal>
        <Reveal as="h2" id="h-works" anim="fadeInLeft" className="h2">{w.title}</Reveal>
      </div>
      <ul className="works__rail" ref={ref} tabIndex={0} aria-label={w.title}>
        {w.items.map((it, i) => (
          <li key={i} className={`work${it.soon ? ' work--soon' : ''}`}>
            {!it.soon && <span className="tape tape--d" aria-hidden="true" />}
            <p className="work__kind mono">{it.kind}</p>
            <h3 className="work__name">{it.name}</h3>
            <p className="work__desc">{it.desc}</p>
            {it.href && (
              <a className="work__link" href={it.href} target="_blank" rel="noopener noreferrer">
                Ver proyecto <span aria-hidden="true">↗</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
