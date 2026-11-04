import { site } from '../content/site';

/** Static form UI. TODO: no backend yet, see the note in site.ts (the note itself is not shown). */
export default function ContactForm() {
  const f = site.contact.fields;
  return (
    <form className="cf" onSubmit={(e) => e.preventDefault()}>
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
      <button type="submit" className="btn btn--lemon btn--xl">
        {f.submit}
        <span aria-hidden="true" className="btn__arrow">→</span>
      </button>
    </form>
  );
}
