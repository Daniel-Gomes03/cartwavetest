import { CircleCheckBig, ArrowRight } from "lucide-react";
import { LinkButton } from "../../components/ui/LinkButton";
import { WHATSAPP } from "../../constants/links.constants";
import { FEATURES, HERO_DASHBOARD_ROWS } from "../../constants/hero.constants";
import { DashboardRow } from "./components/DashboardRow";
import { AnimatedCard } from "../../components/ui/AnimatedCard";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-accent via-background to-muted"
    >
      <div className="relative z-10 container mx-auto px-11 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="hero-animate-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-none text-foreground md:text-5xl lg:text-6xl">
                Soluções de
                <span className="bg-gradient-to-r bg-clip-text text-transparent">
                  {" "}
                  pagamento{" "}
                </span>
                completas para empresas
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                Simplifique suas operações financeiras com nossa plataforma de
                pagamentos. APIs robustas, processos automatizados e a segurança
                que sua empresa precisa.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <CircleCheckBig className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton
                variant="ctaGradient"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5"
              >
                Começar agora
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton
                variant="ctaOutline"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5"
              >
                Falar com vendas
              </LinkButton>
            </div>

            <div className="pt-6">
              <p className="mb-3 text-sm text-muted-foreground">
                Mais de 1000+ empresas confiam na Cartwave
              </p>
              <div
                className="flex items-center space-x-6 opacity-60"
                aria-hidden
              >
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-8 w-20 bg-muted rounded" />
                ))}
              </div>
            </div>
          </div>

          <div className="hero-animate-right relative">
            <AnimatedCard title="Dashboard Cartwave">
              <ul className="mt-5 space-y-4">
                {HERO_DASHBOARD_ROWS.map((row) => (
                  <DashboardRow key={row.title} {...row} />
                ))}
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
