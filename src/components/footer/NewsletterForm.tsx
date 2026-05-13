"use client";

import { AlertBanner } from "@/components/ui/AlertBanner";
import { useAlert } from "@/hooks/useAlert";
import { subscribeNewsletter } from "@/lib/newsletter";
import { ArrowRight, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

function isValidEmail(value: string): boolean {
  const v = value.trim();
  if (!v) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { alert, showAlert, dismissAlert } = useAlert();

  const canSubmit = isValidEmail(email);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidEmail(email) || loading) return;
    dismissAlert();
    setLoading(true);
    try {
      const result = await subscribeNewsletter(email.trim());
      if (result.ok) {
        showAlert("success", "Inscrição registrada com sucesso.");
      } else {
        showAlert(
          "error",
          "Não foi possível concluir a inscrição. Tente novamente em instantes."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <div className="flex items-center gap-3">
        <label htmlFor="newsletter-email" className="sr-only">
          Seu e-mail
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          aria-invalid={email.length > 0 && !canSubmit}
          className="h-10 w-full flex-1 rounded-md border border-white/25 bg-white/10 px-5 text-sm text-white shadow-inner placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={!canSubmit || loading}
          aria-busy={loading}
          aria-label={loading ? "Enviando inscrição" : "Enviar inscrição"}
          className="flex h-10 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-white transition-[filter] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:pointer-events-none"
        >
          {loading ? (
            <Loader2
              className="h-5 w-5 animate-spin"
              aria-hidden
              strokeWidth={2.25}
            />
          ) : (
            <ArrowRight className="h-5 w-5" aria-hidden strokeWidth={2.25} />
          )}
        </button>
      </div>
      {alert ? (
        <AlertBanner
          variant={alert.variant}
          message={alert.message}
          onDismiss={dismissAlert}
          className="mt-3"
        />
      ) : null}
      <p className="mt-2 text-xs text-slate-400">
        Não enviamos spam. Cancele a qualquer momento.
      </p>
    </form>
  );
}
