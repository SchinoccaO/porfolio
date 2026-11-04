import { site } from '../content/site';

/** "Qué te doy": what the client gets. The INPI line is the differentiator, so it is a pull-quote. */
export default function Offer() {
  const o = site.offer;
  return (
    <section id="que-te-doy" className="sec offer" aria-labelledby="h-offer">
      <div className="wrap offer__grid">
        <h2 id="h-offer" className="h2 offer__title">{o.title}</h2>
        <div className="offer__text">
          <p className="offer__lead">{o.lead}</p>
          <p className="body">{o.own}</p>
        </div>

        <blockquote className="offer__inpi">
          <p>{o.inpi}</p>
        </blockquote>

        <div className="offer__logic">
          <h3 className="h3">{o.logicTitle}</h3>
          <p className="body">{o.logic}</p>
          <p className="offer__run" aria-hidden="true">
            {o.logicItems.map((it, i) => (
              <span key={it}>
                {it}
                {i < o.logicItems.length - 1 && <i> / </i>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
