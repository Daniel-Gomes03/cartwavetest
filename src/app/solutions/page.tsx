import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Todas as soluções | Cartwave",
  description: "Página de demonstração para o fluxo a partir da landing.",
};

export default function SolutionsPage() {
  return (
    <main
      id="conteudo-principal"
      className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold text-secondary">Todas as soluções</h1>
      <p className="mt-6 leading-relaxed text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        tincidunt velit. Integer non urna at ligula sollicitudin sagittis.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="font-semibold text-primary underline-offset-4 hover:underline"
        >
          Voltar ao início
        </Link>
      </p>
    </main>
  );
}
