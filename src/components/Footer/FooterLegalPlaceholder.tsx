import Link from "next/link";
import type { ReactNode } from "react";

export type FooterLegalPlaceholderProps = {
  href: string;
  children: ReactNode;
};

export function FooterLegalPlaceholder({
  href,
  children,
}: FooterLegalPlaceholderProps) {
  return (
    <Link
      href={href}
      className="cursor-default text-slate-400"
      title="Página em construção"
    >
      {children}
    </Link>
  );
}
