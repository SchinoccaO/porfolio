import { site } from '../content/site';
import { Reveal, Scribble, Sticker } from './ui';

/** Full-width oversized statement, placed right before the contact section. */
export default function StatementBlock() {
  const [a, b] = site.statement;
  const words = b.split(' ');
  return (
    <section className="statement" aria-label="Lo que hago">
      <Reveal as="p" anim="fadeInUp" className="statement__text">
        <span className="statement__a">{a}</span>{' '}
        <span className="statement__b">
          {words.map((w, i) => (
            <span key={i}>
              {w === site.statementScribble ? (
                <span className="mark mark--paper">
                  {w}
                  <Scribble kind="underline" />
                </span>
              ) : (
                w
              )}{' '}
            </span>
          ))}
        </span>
      </Reveal>
      <Sticker className="sticker--c">hecho en Córdoba</Sticker>
    </section>
  );
}
