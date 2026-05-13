import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HighlightCard } from "./components/HighlightCard";
import { PRODUCTS } from "@/constants/products.constants";

export function ProductsSection() {
  return (
    <section id="produtos" className="bg-gradient-to-b py-24 ">
      <div className="container mx-auto px-11">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-secondary sm:text-4xl">
            Produtos e Soluções
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Oferecemos uma gama completa de soluções financeiras para
            impulsionar o crescimento do seu negócio
          </p>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <HighlightCard key={p.title} {...p} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/solucoes"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
          >
            Ver todas as soluções
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
