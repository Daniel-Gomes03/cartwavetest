import { MessageCircle, ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/LinkButton";
import { WHATSAPP, LOGIN_URL } from "@/constants/links.constants";
import { HIGHLIGHTS } from "@/constants/highlights.constants";
import { CtaHighlight } from "./components/CtaHighlight";

export function CtaSection() {
  return (
    <section id="contato" className="bg-gradient-to-r-2 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-11 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
          Pronto para revolucionar seus pagamentos?
        </h2>
        <p className="mb-8 text-xl leading-relaxed text-white opacity-90 md:text-2xl">
          Junte-se a mais de 1000 empresas que já escolheram a Cartwave para
          simplificar suas operações financeiras
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LinkButton
            variant="ctaSolidLight"
            href={LOGIN_URL}
            className="px-8 py-4"
          >
            Começar agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </LinkButton>
          <LinkButton
            variant="ctaGhostLight"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4"
          >
            Falar com vendas
            <MessageCircle className="ml-2 h-4 w-4" />
          </LinkButton>
        </div>
        <div className="mt-14 grid gap-8 pt-10 text-left sm:grid-cols-3 sm:text-center">
          {HIGHLIGHTS.map((item) => (
            <CtaHighlight key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
