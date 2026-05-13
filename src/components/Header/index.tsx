"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { BrandLogo } from "../../components/ui/BrandLogo";
import { LinkButton } from "../../components/ui/LinkButton";
import { WHATSAPP, LOGIN_URL } from "../../constants/links.constants";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Início" },
  { href: "#produtos", label: "Produtos" },
  { href: "#why-cartwave", label: "Soluções" },
  { href: "#contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navId = useId();

  useEffect(() => {
    if (!open) return;

    function onDocEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onDocEscape);
    return () => document.removeEventListener("keydown", onDocEscape);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    let tabTrap: ((e: KeyboardEvent) => void) | undefined;

    const rafId = requestAnimationFrame(() => {
      const panel = document.getElementById(navId);
      if (!panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      );

      if (focusable.length === 0) return;
      focusable[0]?.focus();

      if (focusable.length < 2) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      tabTrap = (e: KeyboardEvent) => {
        if (e.key !== "Tab") return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      };

      panel.addEventListener("keydown", tabTrap);
    });

    return () => {
      cancelAnimationFrame(rafId);
      const panel = document.getElementById(navId);
      if (panel && tabTrap) panel.removeEventListener("keydown", tabTrap);
    };
  }, [open, navId]);

  return (
    <header className="sticky top-0 z-50 shrink-0 border-slate-100/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-4 px-11 py-3 sm:px-6 lg:px-8">
        <Link
          href="#inicio"
          className="shrink-0"
          aria-label="Cartwave — Início"
        >
          <BrandLogo variant="wordmark" priority />
        </Link>

        <nav
          className="hidden items-center space-x-8 md:flex"
          aria-label="Principal"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 sm:flex">
          <a
            href={LOGIN_URL}
            className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium text-secondary hover:bg-accent hover:text-primary"
          >
            Entrar
          </a>
          <LinkButton
            variant="ctaGradientCompact"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5"
          >
            Fale com um especialista
          </LinkButton>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex rounded-lg p-2 text-[#134e4a] md:hidden"
          aria-expanded={open}
          aria-controls={navId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">
            {open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          </span>
          {open ? (
            <X className="w-6 h-6 text-secondary" />
          ) : (
            <Menu className="w-6 h-6 text-secondary" />
          )}
        </button>
      </div>

      {open ? (
        <div
          id={navId}
          className="border-t border-slate-100 bg-white px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-base font-medium text-[#134e4a]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={LOGIN_URL}
              className="inline-flex items-center rounded-md px-5 py-2.5 text-base font-medium text-secondary hover:bg-accent hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Entrar
            </a>
            <LinkButton
              variant="ctaGradientCompact"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 justify-center px-5 py-3 text-center"
              onClick={() => setOpen(false)}
            >
              Fale com um especialista
            </LinkButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
