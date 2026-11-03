import { site } from '../../content/site';

function Row({ dup }: { dup?: boolean }) {
  return (
    <div className="d-mq__row" aria-hidden={dup ? true : undefined}>
      {[0, 1, 2].map((n) => (
        <span key={n} className="d-mq__item">
          {site.statement[0]} <em>{site.statement[1]}</em>
          <i className="d-mq__star" aria-hidden="true">✺</i>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="d-mq" aria-label={site.statement.join(' ')}>
      <div className="d-mq__band d-mq__band--a" aria-hidden="true">
        <div className="d-mq__track">
          <Row />
          <Row dup />
        </div>
      </div>
      <div className="d-mq__band d-mq__band--b" aria-hidden="true">
        <div className="d-mq__track d-mq__track--rev">
          <Row />
          <Row dup />
        </div>
      </div>
      <p className="d-hand d-mq__sub">{site.sub}</p>
    </section>
  );
}
