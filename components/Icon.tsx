import type { SVGProps } from "react";

/** Simple line icons (stroke-based, 24×24). Decorative: hidden from screen readers. */
const paths: Record<string, React.ReactNode> = {
  users: (<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5" /><path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c2 .7 3.2 2.4 3.5 5.2" /></>),
  phone: (<path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a11 11 0 0 0 5.2 5.2l1.4-2.1 4.2 1.6V17a2.5 2.5 0 0 1-2.7 2.5A15.5 15.5 0 0 1 2.5 6.2 2.5 2.5 0 0 1 5 3.5Z" />),
  moon: (<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />),
  hardhat: (<><path d="M3 17h18M4.5 17v-2a7.5 7.5 0 0 1 15 0v2" /><path d="M10 7.8V5.5h4v2.3" /><path d="M3 17v2h18v-2" /></>),
  inbox: (<><path d="M3.5 13.5 6 5h12l2.5 8.5V19h-17v-5.5Z" /><path d="M3.5 13.5H8l1.5 2.5h5l1.5-2.5h4.5" /></>),
  tag: (<><path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7l8.3 8.3-8.7 8.7-8.3-8.3Z" /><circle cx="8" cy="8" r="1.4" /></>),
  shield: (<><path d="M12 3 5 5.8v5.5c0 4.4 3 8 7 9.7 4-1.7 7-5.3 7-9.7V5.8L12 3Z" /><path d="m9 12 2.2 2.2L15.5 10" /></>),
  chat: (<><path d="M4 5h11a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 15 14H9l-4 3v-3H4a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 4 5Z" /><path d="M16.5 9H20a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 20 18h-1v3l-4-3h-3.5a1.5 1.5 0 0 1-1.5-1.5V14" /></>),
  tools: (<><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2.5 19.5h19" /></>),
  roof: (<><path d="M2.5 12 12 4l9.5 8" /><path d="M5 10v9.5h14V10" /><path d="M10 19.5v-5h4v5" /></>),
  wrench: (<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />),
  sparkle: (<><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="m6 6 2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></>),
  check: (<path d="m5 12.5 4.5 4.5L19 7.5" />),
  arrow: (<path d="M5 12h14m-5-5 5 5-5 5" />),
  chevron: (<path d="m6 9 6 6 6-6" />),
  calendar: (<><rect x="3.5" y="5" width="17" height="15" rx="1.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>),
  quote: (<path d="M9.5 7H6a1.5 1.5 0 0 0-1.5 1.5V12A1.5 1.5 0 0 0 6 13.5h3V17l-3 1M19.5 7H16a1.5 1.5 0 0 0-1.5 1.5V12a1.5 1.5 0 0 0 1.5 1.5h3V17l-3 1" />),
  menu: (<path d="M4 7h16M4 12h16M4 17h16" />),
  close: (<path d="M6 6l12 12M18 6 6 18" />),
};

export function Icon({ name, className = "h-6 w-6", ...rest }: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {paths[name] ?? paths.check}
    </svg>
  );
}
