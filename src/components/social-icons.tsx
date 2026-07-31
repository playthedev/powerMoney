import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H8v3h3v7h3v-7h3l1-3h-4v-2c0-.55.45-1 1-1Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 4l7.5 8.5L4.3 20H7l5.2-5.9L16.5 20H20l-7.8-8.9L19.6 4H17l-4.8 5.5L8.4 4H4Zm3.4 1.6h1.8l9.4 12.8h-1.8L7.4 5.6Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 20v-6.4c0-3.06-1.63-4.48-3.8-4.48-1.75 0-2.54.96-2.97 1.64V8.5H10.3c.04.86 0 9.5 0 9.5h2.93v-5.31c0-.28.02-.57.1-.77.23-.57.75-1.16 1.63-1.16 1.15 0 1.61.87 1.61 2.15V20H20Z" />
    </svg>
  );
}
