import { FeatureCard } from "../../../components/ui/FeatureCard";
import { REASONS } from "../../../constants/reasons.constants";

export function ReasonCard({ r }: { r: (typeof REASONS)[number] }) {
  return (
    <FeatureCard>
      <span className="text-primary mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r from-primary/10 to-secondary/10 transition-colors duration-300 group-hover:from-primary/20 group-hover:to-secondary/20">
        {r.icon}
      </span>
      <h3 className="mb-3 text-xl font-bold text-secondary group-hover:text-primary">
        {r.title}
      </h3>
      <p className="mb-6 leading-relaxed text-muted-foreground">
        {r.description}
      </p>
      <div className="w-full border-t border-slate-100 pt-6">
        <p className="bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
          {r.metric}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{r.label}</p>
      </div>
    </FeatureCard>
  );
}
