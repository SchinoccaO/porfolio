import { site } from '../content/site';

/** The one-line promise, set big and left aligned. */
export default function Statement() {
  const [a, b] = site.statement;
  const words = b.split(' ');
  return (
    <section className="statement" aria-label="Lo que hago">
      <p className="statement__text">
        <span className="statement__a">{a}</span>
        <span className="statement__b">
          {words.map((w, i) => (
            <span key={i}>
              {w === site.statementScribble ? <span className="hl">{w}</span> : w}{' '}
            </span>
          ))}
        </span>
      </p>
    </section>
  );
}
