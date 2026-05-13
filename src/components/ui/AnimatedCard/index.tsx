import type { ReactNode } from "react";

export type AnimatedCardProps = {
  title: string;
  children: ReactNode;
};

export function AnimatedCard({ title, children }: AnimatedCardProps) {
  return (
    <div className="relative overflow-visible rounded-2xl bg-white p-6">
      <div
        className="absolute -right-4 -top-4 h-8 w-8 animate-bounce rounded-full bg-primary"
        aria-hidden
      />
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold text-secondary">{title}</h3>
        <div
          className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary"
          aria-hidden
        />
      </div>
      {children}
      <div
        className="absolute -bottom-4 -left-4 h-6 w-6 animate-pulse rounded-full bg-secondary"
        aria-hidden
      />
    </div>
  );
}
