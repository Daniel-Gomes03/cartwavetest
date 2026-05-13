import type { ComponentPropsWithoutRef, ReactNode } from "react";

const featureCardBase =
  "group flex flex-col items-center rounded-2xl border border-slate-100 bg-white px-6 py-8 text-center transition-colors duration-300 hover:border-primary";

export type FeatureCardProps = Omit<
  ComponentPropsWithoutRef<"article">,
  "children"
> & {
  children: ReactNode;
};

export function FeatureCard({
  children,
  className = "",
  ...props
}: FeatureCardProps) {
  return (
    <article className={`${featureCardBase} ${className}`.trim()} {...props}>
      {children}
    </article>
  );
}
