import { site } from '../content/site';
import { Marquee, Torn } from './ui';

export default function StatementStrip() {
  const phrase = site.statement.join(' ');
  return (
    <div className="strip">
      <p className="sr-only">{phrase}</p>
      <Marquee phrase={phrase} />
      <Torn seed={3} className="strip__torn" />
    </div>
  );
}
