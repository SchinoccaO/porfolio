import { site } from '../../content/site';

export default function Works() {
  const w = site.works;
  const [main, ...soon] = w.items;
  return (
    <section id="trabajos" className="d-works" aria-labelledby="d-h-works">
      <h2 id="d-h-works" className="d-h2 d-rv">{w.title}</h2>
      <div className="d-works__board">
        <a className="d-win d-rv" href={main.href} target="_blank" rel="noreferrer">
          <span className="d-win__bar" aria-hidden="true">
            <i /><i /><i />
          </span>
          <span className="d-win__kind">{main.kind}</span>
          <span className="d-win__name">{main.name}</span>
          <span className="d-win__desc">{main.desc}</span>
          <span className="d-win__go">{site.motofix.cta.label} <b aria-hidden="true">↗</b></span>
        </a>
        <div className="d-soon d-soon--round d-rv">
          <span className="d-soon__kind">{soon[0].kind}</span>
          <strong>{soon[0].name}</strong>
          <span>{soon[0].desc}</span>
        </div>
        <div className="d-soon d-soon--pill d-rv">
          <strong>{soon[1].name}</strong>
          <span>{soon[1].desc}</span>
        </div>
      </div>
    </section>
  );
}
