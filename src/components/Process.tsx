import { site } from '../content/site';

export default function Process() {
  const p = site.process;
  return (
    <section className="sec process" aria-labelledby="h-proc">
      <div className="wrap process__grid">
        <h2 id="h-proc" className="h2">{p.title}</h2>
        <ol className="steps">
          {p.steps.map((st, i) => (
            <li key={st.title} className="step">
              <span className="step__n" aria-hidden="true">{i + 1}</span>
              <h3 className="step__t">{st.title}</h3>
              <p className="step__d">{st.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
