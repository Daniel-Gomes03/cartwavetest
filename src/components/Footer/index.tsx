"use client";

import Link from "next/link";
import { BrandLogo } from "../ui/BrandLogo";
import { FooterSocial } from "./FooterSocial";
import { FooterLegalPlaceholder } from "./FooterLegalPlaceholder";
import { NewsletterForm } from "./NewsletterForm";
import { Mail, FileText, MapPin, Phone } from "lucide-react";
import Linkedin from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";
import Image from "next/image";

const PRODUCT_LINKS = [
  { label: "API de Pix", href: "/solutions" },
  { label: "Emissão de Boletos", href: "/solutions" },
  { label: "Split de Pagamentos", href: "/solutions" },
  { label: "Checkout Customizável", href: "/solutions" },
  { label: "Indique e Ganhe", href: "/solutions" },
];

const COMPANY_LINKS = [
  { label: "Sobre nós", href: "/about" },
  { label: "Carreira", href: "/about" },
  { label: "Imprensa", href: "/about" },
  { label: "Blog", href: "/about" },
  { label: "Parceiros", href: "/about" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="shrink-0 scroll-mt-24 bg-secondary text-slate-200"
    >
      <div className="container mx-auto px-11 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandLogo variant="icon" />
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Cartwave é uma instituição de pagamento que oferece soluções
              completas e seguras para empresas de todos os portes.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Goiânia-GO — Brasil
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <a href="tel:+5562920028202" className="hover:text-white">
                  +55 62 92002-8202
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:atendimento@checkoutcartwave.com.br"
                  className="block hover:text-white"
                >
                  atendimento@checkoutcartwave.com.br
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:ouvidoria@checkoutcartwave.com.br"
                  className="mt-1 block hover:text-white"
                >
                  ouvidoria@checkoutcartwave.com.br
                </a>
              </li>
              <li className="flex gap-2">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                CNPJ: 33.207.641/0001-70
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Produtos</h3>
            <ul className="mt-4 space-y-4 text-sm">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-300 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Empresa</h3>
            <ul className="mt-4 space-y-4 text-sm">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-300 hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="mt-2 text-sm text-white/80">
              Receba as últimas atualizações sobre nossos produtos e mercado
            </p>
            <NewsletterForm />
            <div className="mt-6 flex gap-3">
              <FooterSocial
                label="LinkedIn"
                href="https://www.linkedin.com/company/cartwave-hub/"
              >
                <Image src={Linkedin} alt="LinkedIn" width={24} height={24} />
              </FooterSocial>
              <FooterSocial label="Twitter">𝕏</FooterSocial>
              <FooterSocial label="Instagram">
                <Image src={Instagram} alt="Instagram" width={24} height={24} />
              </FooterSocial>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>
            © {year} Cartwave Instituição de Pagamento Ltda. Todos os direitos
            reservados.
          </p>
          <nav
            className="flex flex-wrap justify-center gap-4"
            aria-label="Legal"
          >
            <FooterLegalPlaceholder href="/termos">
              Privacidade
            </FooterLegalPlaceholder>
            <FooterLegalPlaceholder href="/termos">
              Termos de Uso
            </FooterLegalPlaceholder>
            <FooterLegalPlaceholder href="/termos">
              Política de Cookies
            </FooterLegalPlaceholder>
          </nav>
        </div>
      </div>
    </footer>
  );
}
