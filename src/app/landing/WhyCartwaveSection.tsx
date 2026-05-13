import { ReasonCard } from "./components/ReasonCard";
import { StatsBar } from "./components/StatsBar";
import { REASONS } from "../../constants/reasons.constants";

export function WhyCartwaveSection() {
  return (
    <section id="why-cartwave" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-11 py-24">
        <header className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Por que escolher a{" "}
            <span className="bg-gradient-to-r bg-clip-text text-transparent">
              Cartwave
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground">
            Mais de 1000 empresas confiam em nossa tecnologia para processar
            milhões em transações
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <ReasonCard key={r.title} r={r} />
          ))}
        </div>
        <StatsBar />
      </div>
    </section>
  );
}
