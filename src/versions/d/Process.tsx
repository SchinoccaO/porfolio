import { site } from '../../content/site';

const NODES = [
  [100, 220],
  [300, 50],
  [500, 220],
];

export default function Process() {
  const p = site.process;
  return (
    <section className="d-process" aria-labelledby="d-h-process">
      <h2 id="d-h-process" className="d-h2 d-rv">{p.title}</h2>
      <div className="d-arcwrap d-draw">
        <svg className="d-arc" viewBox="0 0 600 250" aria-hidden="true" focusable="false">
          <path className="d-arc__ghost" d="M100 220 A200 170 0 0 1 500 220" />
          <path className="d-arc__line" pathLength={1} d="M100 220 A200 170 0 0 1 500 220" />
          <path className="d-arc__drop" pathLength={1} d="M300 80 V250" />
          {NODES.map(([x, y], i) => (
            <g key={i} className={`d-node d-node--${i + 1}`} transform={`translate(${x} ${y})`}>
              <circle r="30" />
              <text y="12" textAnchor="middle">{i + 1}</text>
            </g>
          ))}
        </svg>
      </div>
      <ol className="d-steps">
        {p.steps.map((s, i) => (
          <li key={s.title} className={`d-step d-step--${i + 1} d-rv`}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
