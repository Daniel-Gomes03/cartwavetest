const STATS = [
  { value: "1000+", label: "Empresas ativas" },
  { value: "R$ 2B+", label: "Processados" },
  { value: "99.5%", label: "Disponibilidade" },
  { value: "24/7", label: "Suporte técnico" },
];

export function StatsBar() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
