import { site } from '../../content/site';
import { burstPoints } from './Hero';

const STAR = burstPoints(12, 49, 39);

export default function Services() {
  const s = site.services;
  const [tpl, custom] = s.plans;
  const [seo, dominio, hosting, inpi] = s.extras;

  return (
    <section id="servicios" className="d-serv" aria-labelledby="d-h-serv">
      <div className="d-serv__head">
        <h2 id="d-h-serv" className="d-h2 d-h2--light d-rv">{s.title}</h2>
        <p className="d-serv__intro d-rv">{s.intro}</p>
      </div>

      <div className="d-blob d-rv">
        <div className="d-blob__a">
          <h3 className="d-plan">{tpl.name}</h3>
          <p className="d-pitch">{tpl.pitch}</p>
          <p className="d-desc">{tpl.desc}</p>
          <ul className="d-plist">
            {tpl.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <svg className="d-wave d-wave--h" viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M0 0 H400 V14 C350 40 320 -4 260 18 C200 40 160 0 100 20 C60 34 30 10 0 24 Z" />
        </svg>
        <svg className="d-wave d-wave--v" viewBox="0 0 40 400" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M0 0 V400 H14 C40 350 -4 320 18 260 C40 200 0 160 20 100 C34 60 10 30 24 0 Z" />
        </svg>
        <div className="d-blob__b">
          <h3 className="d-plan">{custom.name}</h3>
          <p className="d-pitch">{custom.pitch}</p>
          <p className="d-desc">{custom.desc}</p>
          <ul className="d-plist">
            {custom.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="d-quote">{s.price}</p>
        </div>
      </div>

      <div className="d-extras">
        <p className="d-extras__title d-rv">{s.extrasTitle}</p>
        <div className="d-x d-x--seo d-rv">
          <span className="d-x__switch" aria-hidden="true" />
          {seo}
        </div>
        <div className="d-x d-x--dom d-rv">
          <span className="d-x__dot" aria-hidden="true" />
          {dominio}
        </div>
        <div className="d-x d-x--host d-rv">{hosting}</div>
        <div className="d-x d-x--inpi d-rv">
          <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
            <polygon points={STAR} />
          </svg>
          <span>{inpi}</span>
        </div>
      </div>

      <aside className="d-note d-rv" aria-labelledby="d-h-note">
        <h3 id="d-h-note">{s.notesTitle}</h3>
        {s.notes.map((n) => (
          <p key={n}>{n}</p>
        ))}
      </aside>
    </section>
  );
}
