import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkVariant =
  | "ctaGradient"
  | "ctaGradientCompact"
  | "ctaOutline"
  | "ctaSolidLight"
  | "ctaGhostLight";

const variantClass: Record<LinkVariant, string> = {
  ctaGradient:
    "bg-gradient-to-r hover:opacity-90 inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold text-white shadow-lg transition",
  ctaGradientCompact:
    "bg-gradient-to-r hover:opacity-90 inline-flex items-center justify-center rounded-md text-sm font-semibold text-white shadow-md transition",
  ctaOutline:
    "inline-flex items-center justify-center rounded-md border border-primary bg-white text-sm font-semibold text-foreground backdrop-blur transition hover:bg-primary hover:text-white",
  ctaSolidLight:
    "inline-flex items-center justify-center gap-2 rounded-md bg-white text-lg font-semibold text-primary shadow-lg transition hover:bg-white/90 hover:text-foreground",
  ctaGhostLight:
    "inline-flex items-center justify-center gap-2 rounded-md border border-white/90 bg-transparent text-lg font-semibold text-white transition hover:bg-white/10 hover:text-foreground",
};

export type LinkButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "className"
> & {
  variant: LinkVariant;
  className?: string;
  children: ReactNode;
};

export function LinkButton({
  variant,
  className = "",
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a className={`${variantClass[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
