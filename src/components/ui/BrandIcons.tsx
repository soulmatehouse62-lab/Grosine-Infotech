import type { SVGProps } from "react";
import type { SocialPlatform } from "@/data/site";

/**
 * Minimal social glyphs drawn for this project (lucide-react no longer
 * ships brand icons). All are decorative: label the link, not the icon.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  "aria-hidden": true,
  focusable: false,
} as const;

function Facebook(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5H16l.5-3h-3V8.75c0-.95.35-1.6 1.7-1.6h1.4V4.4c-.45-.1-1.3-.2-2.3-.2-2.3 0-3.8 1.4-3.8 3.95v2.35H8v3h2.5V21h3Z" />
    </svg>
  );
}

function Instagram(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedIn(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" {...props}>
      <circle cx="5.5" cy="5.5" r="2" />
      <path d="M3.75 9.25h3.5V20h-3.5V9.25Z" />
      <path d="M9.75 9.25h3.35v1.5c.6-1.05 1.8-1.8 3.4-1.8 2.9 0 3.75 1.9 3.75 4.7V20h-3.5v-5.7c0-1.3-.45-2.2-1.65-2.2-1.25 0-1.85.9-1.85 2.2V20h-3.5V9.25Z" />
    </svg>
  );
}

function X(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" {...props}>
      <path d="M4 4h4.1l4.2 5.7L17.3 4h2.3l-6.2 7.2L20 20h-4.1l-4.5-6.1L6.1 20H3.8l6.5-7.5L4 4Z" />
    </svg>
  );
}

function YouTube(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M4.2 5.6C6 5.2 9 5 12 5s6 .2 7.8.6c1 .2 1.7 1 1.9 2 .2 1.4.3 2.9.3 4.4s-.1 3-.3 4.4c-.2 1-.9 1.8-1.9 2-1.8.4-4.8.6-7.8.6s-6-.2-7.8-.6c-1-.2-1.7-1-1.9-2C2.1 15 2 13.5 2 12s.1-3 .3-4.4c.2-1 .9-1.8 1.9-2ZM10 9v6l5.2-3L10 9Z"
      />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg
      {...base}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22l5.9-2Z" />
      <path d="M9 9.2c0 1.4.7 2.9 1.9 4.1 1.2 1.2 2.7 1.9 4.1 1.9" />
    </svg>
  );
}

export const socialIcons: Record<
  SocialPlatform,
  { label: string; Icon: (props: IconProps) => React.JSX.Element }
> = {
  facebook: { label: "Facebook", Icon: Facebook },
  instagram: { label: "Instagram", Icon: Instagram },
  linkedin: { label: "LinkedIn", Icon: LinkedIn },
  x: { label: "X (Twitter)", Icon: X },
  youtube: { label: "YouTube", Icon: YouTube },
};
