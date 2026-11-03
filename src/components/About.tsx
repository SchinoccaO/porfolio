import { site } from '../content/site';
import { Reveal } from './ui';

export default function About() {
  const a = site.about;
  return (
    <section id="sobre-mi" className="sec sec--paper about" aria-labelledby="h-about">
      <div className="wrap about__grid">
        <div className="about__text">
          <Reveal as="p" className="label mono">02 / {a.title}</Reveal>
          <Reveal as="h2" id="h-about" anim="fadeInLeft" className="h2">{a.title}</Reveal>
          {a.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 80} className="body">{p}</Reveal>
          ))}
          <Reveal as="p" className="about__small mono">{a.smallLine}</Reveal>
        </div>

        <Reveal as="aside" anim="fadeInUp" className="hud" aria-label={a.sheetTitle}>
          <span className="tape tape--c" aria-hidden="true" />
          <p className="hud__head mono"><span>{a.sheetTitle}</span><span>OS-01</span></p>
          <dl className="hud__sheet">
            {a.sheet.map((r) => (
              <div key={r.k}>
                <dt className="mono">{r.k}</dt>
                <dd>{r.v}</dd>
              </div>
            ))}
          </dl>
          <p className="hud__head hud__head--sub mono">{a.inventoryTitle}</p>
          <ul className="hud__bars" aria-label={a.skillsTitle}>
            {a.skills.map((s) => (
              <li key={s}>
                <span className="mono">{s}</span>
                <span className="hud__bar" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
