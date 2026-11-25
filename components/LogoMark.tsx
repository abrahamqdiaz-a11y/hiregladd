/**
 * HireGladd logo mark (hand-redrawn placeholder of the real logo; source: public/logo-mark.svg).
 * Uses currentColor, so it takes the text color of where it's placed.
 * `id` must be unique on the page (it names the SVG filter).
 */
export function LogoMark({ id, className = "" }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" focusable="false" className={className}>
      <defs>
      <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5"/>
      <feComponentTransfer><feFuncA type="table" tableValues="0 0 1 1"/></feComponentTransfer>
      </filter>
      </defs>
      <g transform="translate(-22 -28.4) scale(0.32)">
      <g fill="currentColor" stroke="currentColor" strokeLinecap="round" filter={`url(#${id})`}>
      <ellipse cx="215" cy="157" rx="25.3" ry="20.7"/>
      <ellipse cx="268" cy="160" rx="20.7" ry="17.2"/>
      <ellipse cx="315" cy="172" rx="13.8" ry="11.5"/>
      <ellipse cx="165" cy="207" rx="23.0" ry="18.4"/>
      <ellipse cx="232" cy="200" rx="20.7" ry="16.1"/>
      <ellipse cx="200" cy="230" rx="13.8" ry="13.8"/>
      <ellipse cx="142" cy="262" rx="18.4" ry="17.2"/>
      <ellipse cx="186" cy="262" rx="16.1" ry="16.1"/>
      <ellipse cx="250" cy="262" rx="25.3" ry="24.1"/>
      <ellipse cx="330" cy="295" rx="25.3" ry="21.8"/>
      <ellipse cx="378" cy="315" rx="16.1" ry="14.9"/>
      <ellipse cx="282" cy="338" rx="14.9" ry="13.8"/>
      <ellipse cx="220" cy="330" rx="23.0" ry="21.8"/>
      <ellipse cx="180" cy="345" rx="14.9" ry="20.7"/>
      <ellipse cx="210" cy="372" rx="9.2" ry="9.2"/>
      <line x1="215" y1="157" x2="165" y2="207" strokeWidth="15"/>
      <line x1="268" y1="160" x2="232" y2="200" strokeWidth="14"/>
      <line x1="142" y1="262" x2="186" y2="262" strokeWidth="14"/>
      <line x1="186" y1="262" x2="180" y2="345" strokeWidth="12"/>
      <line x1="250" y1="262" x2="330" y2="295" strokeWidth="15"/>
      <line x1="250" y1="262" x2="220" y2="330" strokeWidth="15"/>
      <line x1="268" y1="160" x2="315" y2="172" strokeWidth="7"/>
      </g>
      <g fill="currentColor">
      <ellipse cx="146" cy="205" rx="4" ry="13" transform="rotate(15 146 205)"/>
      <ellipse cx="146" cy="318" rx="4" ry="11" transform="rotate(-10 146 318)"/>
      <ellipse cx="190" cy="385" rx="9" ry="4" transform="rotate(25 190 385)"/>
      <ellipse cx="266" cy="126" rx="11" ry="3.5" transform="rotate(-12 266 126)"/>
      <ellipse cx="320" cy="128" rx="9" ry="3" transform="rotate(10 320 128)"/>
      <ellipse cx="372" cy="232" rx="3" ry="8" transform="rotate(-20 372 232)"/>
      </g>
      </g>
    </svg>
  );
}
