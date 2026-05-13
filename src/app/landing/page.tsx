import dynamic from "next/dynamic";
import { CtaSection } from "./CtaSection";
import { HeroSection } from "./HeroSection";

const ProductsSection = dynamic(() =>
  import("./ProductsSection").then((m) => ({ default: m.ProductsSection }))
);

const WhyCartwaveSection = dynamic(() =>
  import("./WhyCartwaveSection").then((m) => ({
    default: m.WhyCartwaveSection,
  }))
);

export default function LandingPage() {
  return (
    <>
      <main id="conteudo-principal">
        <HeroSection />
        <ProductsSection />
        <WhyCartwaveSection />
        <CtaSection />
      </main>
    </>
  );
}
