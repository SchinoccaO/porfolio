import { site } from '../../content/site';

export default function About() {
  const a = site.about;
  const sk = a.skills;
  const skillsLine = `${sk.slice(0, -1).join(', ')} y ${sk[sk.length - 1]}`;
  return (
    <section id="sobre-mi" className="d-about" aria-labelledby="d-h-about">
      <h2 id="d-h-about" className="d-h2 d-rv">{a.title}</h2>
      <div className="d-about__photo d-rv">
        <span className="d-about__blob" aria-hidden="true" />
        <img src="/d/oriana.webp" width={1228} height={1449} alt="" loading="lazy" />
        <p className="d-scrawl">{a.smallLine}</p>
        <span className="d-where">{a.place}</span>
      </div>
      <div className="d-paper d-rv">
        <span className="d-tape" aria-hidden="true" />
        {a.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p className="d-skills">
          <span>{a.skillsTitle}:</span> {skillsLine}.
        </p>
      </div>
    </section>
  );
}
