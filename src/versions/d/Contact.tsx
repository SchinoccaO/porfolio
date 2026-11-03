import { site } from '../../content/site';

export default function Contact() {
  const c = site.contact;
  const f = c.fields;
  return (
    <section id="contacto" className="d-contact" aria-labelledby="d-h-contact">
      <div className="d-contact__intro">
        <h2 id="d-h-contact" className="d-h2 d-h2--light d-rv">{c.title}</h2>
        <p className="d-contact__lead d-rv">{c.intro}</p>
        <ul className="d-channels d-rv">
          {c.channels.map((ch) => (
            <li key={ch.label}>
              <span>{ch.label}</span> {ch.value}
            </li>
          ))}
          <li>
            <span>Instagram</span> {site.handle}
          </li>
        </ul>
      </div>
      <form className="d-form d-rv" onSubmit={(e) => e.preventDefault()}>
        <label>
          <span>{f.type}</span>
          <select name="type" defaultValue="">
            <option value="" disabled>Elegí una opción</option>
            {f.typeOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label>
          <span>{f.deadline}</span>
          <input name="deadline" type="text" placeholder={f.deadlinePlaceholder} />
        </label>
        <label>
          <span>{f.problem}</span>
          <textarea name="problem" rows={4} placeholder={f.problemPlaceholder} />
        </label>
        <button type="submit" className="d-btn d-btn--navy">
          {f.submit}
          <span aria-hidden="true" className="d-btn__arr">→</span>
        </button>
        <p className="d-form__todo">{c.todoNote}</p>
      </form>
    </section>
  );
}
