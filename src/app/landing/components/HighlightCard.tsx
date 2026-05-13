import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export type HighlightCardProps = {
  title: string;
  description: string;
  bullets: string[];
  icon: ReactNode;
  href: string;
};

export function HighlightCard({
  title,
  description,
  bullets,
  icon,
  href,
}: HighlightCardProps) {
  return (
    <article
      className={[
        "group relative rounded-2xl bg-white p-8 shadow-sm",
        "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-2",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-sm",
      ].join(" ")}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r text-white">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <ul className="mt-6 space-y-2">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {b}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={[
          "mt-8 flex items-center justify-between rounded-lg px-4 py-2 text-sm font-semibold text-secondary",
          "transition-[colors,background-color] duration-300",
          "group-hover:bg-primary group-hover:text-white",
        ].join(" ")}
      >
        Saiba mais
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
