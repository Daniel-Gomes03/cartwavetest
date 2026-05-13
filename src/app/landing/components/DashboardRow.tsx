import { CircleCheckBig } from "lucide-react";

export type DashboardRowTone = "green" | "teal";

export type DashboardRowProps = {
  tone: DashboardRowTone;
  title: string;
  time: string;
  value: string;
};

export function DashboardRow({ tone, title, time, value }: DashboardRowProps) {
  const circle = tone === "green" ? "bg-primary" : "bg-secondary";

  return (
    <li className="flex items-center gap-3 rounded-xl bg-accent px-3 py-3">
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${circle}`}
      >
        <CircleCheckBig className="h-4 w-4 text-white" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-secondary">{title}</p>
        <p className="text-sm text-muted-foreground">{time}</p>
      </div>
      <p className="font-bold text-primary">{value}</p>
    </li>
  );
}
