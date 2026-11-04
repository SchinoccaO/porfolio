import { site } from '../content/site';

export default function Services() {
  const s = site.services;
  return (
    <section id="servicios" className="sec services" aria-labelledby="h-serv">
      <div className="wrap">
        <div className="services__head">
          <h2 id="h-serv" className="h2">{s.title}</h2>
          <p className="services__intro">{s.intro}</p>
        </div>

        <div className="plans">
          {s.plans.map((p, i) => (
            <article key={p.name} className={`plan${i === 1 ? ' plan--custom' : ''}`}>
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__pitch">{p.pitch}</p>
              <p className="plan__desc">{p.desc}</p>
              <ul className="plan__items">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <a className="services__price" href="#contacto">
          {s.price} <span aria-hidden="true">→</span>
        </a>

        <div className="services__more">
          <p className="services__extras">
            <strong>{s.extrasTitle}.</strong> {s.extras.join(' · ')}
          </p>
          <div className="notes">
            <h3 className="sr-only">{s.notesTitle}</h3>
            {s.notes.map((n) => (
              <p key={n}>{n}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
