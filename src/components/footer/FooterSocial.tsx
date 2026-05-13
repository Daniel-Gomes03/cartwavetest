import type { ReactNode } from "react";

const socialBase =
  "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-muted-foreground text-xs font-semibold text-white shadow-none transition-[transform,background-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

const socialActive =
  "hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-secondary active:translate-y-0 active:scale-100 active:duration-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 motion-reduce:hover:shadow-none";

export type FooterSocialProps = {
  href?: string;
  label: string;
  children: ReactNode;
};

export function FooterSocial({ href, label, children }: FooterSocialProps) {
  const unavailable = !href || href === "#";

  if (unavailable) {
    return (
      <span
        className={`${socialBase} cursor-not-allowed opacity-45 grayscale`}
        aria-disabled="true"
        title={`${label} — disponível em breve`}
      >
        <span className="relative z-10">{children}</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      aria-label={label}
      className={`${socialBase} ${socialActive}`}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}
