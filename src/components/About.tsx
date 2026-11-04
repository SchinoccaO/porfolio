import { site } from '../content/site';

export default function About() {
  const a = site.about;
  return (
    <section id="sobre-mi" className="sec about" aria-labelledby="h-about">
      <div className="wrap about__grid">
        <h2 id="h-about" className="h2">{a.title}</h2>
        <div className="about__text">
          {a.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'about__first' : 'body'}>{p}</p>
          ))}
          <p className="body">
            <strong>{a.skillsTitle}:</strong> {a.skills.slice(0, -1).join(', ')} y {a.skills[a.skills.length - 1]}.
          </p>
          <p className="about__small">{a.smallLine}</p>
        </div>
      </div>
    </section>
  );
}
