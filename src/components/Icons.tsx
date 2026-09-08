import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const IconScale = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 4.2v16.3M8.2 20.5h7.6M5.2 6.8h13.6" />
    <circle cx="12" cy="3.4" r="1" />
    <path d="M6 6.8 3.1 13.4a3.3 3.3 0 0 0 5.8 0L6 6.8Z" />
    <path d="M18 6.8l-2.9 6.6a3.3 3.3 0 0 0 5.8 0L18 6.8Z" />
  </svg>
);

export const IconCalculator = (p: P) => (
  <svg {...base(p)}>
    <rect x="6.5" y="3.5" width="11" height="17" rx="1.5" />
    <rect x="9.2" y="6.2" width="5.6" height="2.8" />
    <path d="M9.5 12.6h.01M12 12.6h.01M14.5 12.6h.01M9.5 15.4h.01M12 15.4h.01M14.5 15.4h.01M9.5 18h.01M12 18h.01M14.5 18h.01" />
  </svg>
);

export const IconDocSearch = (p: P) => (
  <svg {...base(p)}>
    <path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h6" />
    <path d="M14 3v4.5h4.5L14 3Z" />
    <path d="M8.6 8.4h2.6M8.6 11.4h1.8" />
    <circle cx="15.4" cy="15.2" r="3.1" />
    <path d="m17.8 17.6 2.7 2.7" />
  </svg>
);

export const IconTarget = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="7.2" />
    <path d="M12 2.6v3.6M12 17.8v3.6M2.6 12h3.6M17.8 12h3.6" />
    <circle cx="12" cy="12" r="1.2" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3 5 5.8v5.4c0 4.4 3 8.1 7 9.3 4-1.2 7-4.9 7-9.3V5.8L12 3Z" />
    <path d="m9.2 11.9 2 2 3.6-4" />
  </svg>
);

export const IconWhats = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3.8a8.2 8.2 0 0 0-7.1 12.3L4 20.2l4.2-1A8.2 8.2 0 1 0 12 3.8Z" />
    <path d="M9.4 8.9c.2-.4.5-.5.8-.3l1 .6c.3.2.4.5.2.8l-.4.7c.3.8 1.1 1.6 1.9 1.9l.7-.4c.3-.2.6-.1.8.2l.6 1c.2.3.1.6-.2.8-.5.4-1.2.5-1.9.3-1.6-.5-3-1.9-3.5-3.5-.2-.7-.1-1.4 0-2.1Z" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
    <path d="m4.5 7.2 7.5 6 7.5-6" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s-6.5-5.3-6.5-10a6.5 6.5 0 0 1 13 0c0 4.7-6.5 10-6.5 10Z" />
    <circle cx="12" cy="10.7" r="2.3" />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg {...base(p)}>
    <path d="M5.5 4.5h3l1.5 4-2 1.5a12.5 12.5 0 0 0 6 6l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C10.4 19.4 4.6 13.6 4 6.1a1.5 1.5 0 0 1 1.5-1.6Z" />
  </svg>
);

export const IconArrowRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 12h15.5M14 6.5 19.5 12 14 17.5" />
  </svg>
);

export const IconArrowLeft = (p: P) => (
  <svg {...base(p)}>
    <path d="M20 12H4.5M10 6.5 4.5 12 10 17.5" />
  </svg>
);

export const IconPlus = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconQuote = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M9.6 6.3c-3.1 1.3-5 3.8-5 7.2 0 2.5 1.5 4.2 3.6 4.2 1.9 0 3.2-1.4 3.2-3.2 0-1.8-1.2-3-2.9-3-.3 0-.6 0-.8.1.3-1.7 1.5-3 3.1-3.9L9.6 6.3Zm8.2 0c-3.1 1.3-5 3.8-5 7.2 0 2.5 1.5 4.2 3.6 4.2 1.9 0 3.2-1.4 3.2-3.2 0-1.8-1.2-3-2.9-3-.3 0-.6 0-.8.1.3-1.7 1.5-3 3.1-3.9l-1.2-1.4Z" />
  </svg>
);

export const IconCalendar = (p: P) => (
  <svg {...base(p)}>
    <rect x="4" y="5.5" width="16" height="15" rx="1.5" />
    <path d="M4 10.2h16M8.5 3.5v4M15.5 3.5v4" />
  </svg>
);

export const IconLock = (p: P) => (
  <svg {...base(p)}>
    <rect x="5.5" y="10.5" width="13" height="9.5" rx="1.5" />
    <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
  </svg>
);

export const IconChat = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 4.5c-4.4 0-8 2.9-8 6.5 0 2 1.1 3.8 2.9 5l-.6 3.2 3.4-1.5c.7.2 1.5.3 2.3.3 4.4 0 8-2.9 8-6.5s-3.6-7-8-7Z" />
    <path d="M8.7 11h.01M12 11h.01M15.3 11h.01" />
  </svg>
);

export const IconUser = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="8.3" r="3.5" />
    <path d="M5 20c.8-3.4 3.6-5.2 7-5.2s6.2 1.8 7 5.2" />
  </svg>
);

export const IconSeal = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="9.6" r="5.4" />
    <path d="m9.6 9.6 1.7 1.7 3.1-3.3" />
    <path d="m8.9 14.2-1.4 6.3 4.5-2.4 4.5 2.4-1.4-6.3" />
  </svg>
);

export const IconInstagram = (p: P) => (
  <svg {...base(p)}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <path d="M16.8 7.2h.01" />
  </svg>
);

export const IconWhatsapp = (p: P) => (
  <svg {...base(p)}>
    <path d="M17.5 14.4c-.3-.15-1.75-.86-2-.96-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.59-.49-.51-.67-.52-.18-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.26.3-1.03 1.02-1.03 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-.1.41.26-.7.26-1.29.18-1.41-.07-.13-.27-.2-.57-.35Z" />
    <path d="M12 21.8a9.8 9.8 0 0 1-5-.1.38l-.36-.21-3.74.98 1-3.65-.24-.37A9.85 9.85 0 0 1 2.15 12C2.15 6.55 6.6 2.12 12.05 2.12c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 7c0 5.44-4.44 9.88-9.9 9.88Z" />
  </svg>
);

export const IconLinkedin = (p: P) => (
  <svg {...base(p)}>
    <path d="M6.8 10v7.2M6.8 6.6v.02M11.2 17.2V10m0 2.6c.4-1.6 1.6-2.6 3.2-2.6 1.9 0 3 1.2 3 3.4v3.8" />
  </svg>
);

export const IconYoutube = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.5" y="6" width="17" height="12" rx="3.5" />
    <path d="m10.5 9.5 4.5 2.5-4.5 2.5v-5Z" />
  </svg>
);

export const IconSend = (p: P) => (
  <svg {...base(p)}>
    <path d="M20 4 3.5 10.5l6.5 2.5 2.5 6.5L20 4Z" />
    <path d="M10 13 20 4" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

/** Monograma "BA" da marca */
export const Monogram = (p: P) => (
  <svg viewBox="0 0 52 48" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M9 6v36" />
    <path d="M9 6h8.5a8 8 0 0 1 0 16H9" />
    <path d="M9 22h9.5a8 8 0 0 1 0 16H9" />
    <path d="M26 42 36 10l10 32" />
    <path d="M29.8 31h12.6" />
  </svg>
);
