import { site } from '../content/site';
import { Reveal } from './ui';

export default function Process() {
  const p = site.process;
  return (
    <section className="sec sec--paper process" aria-labelledby="h-proc">
      <div className="wrap">
        <Reveal as="p" className="label mono">06 / {p.title}</Reveal>
        <Reveal as="h2" id="h-proc" anim="fadeInLeft" className="h2">{p.title}</Reveal>
        <ol className="steps">
          {p.steps.map((st, i) => (
            <Reveal as="li" key={st.title} delay={i * 100} className="step">
              <span className="step__n" aria-hidden="true">{i + 1}</span>
              <h3 className="step__t">{st.title}</h3>
              <p className="step__d">{st.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
