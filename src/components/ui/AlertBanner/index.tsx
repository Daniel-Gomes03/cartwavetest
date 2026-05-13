import { AlertCircle, CheckCircle, X } from "lucide-react";
import type { AlertVariant } from "../../../hooks/useAlert";

type AlertBannerProps = {
  variant: AlertVariant;
  message: string;
  onDismiss?: () => void;
  className?: string;
};

export function AlertBanner({
  variant,
  message,
  onDismiss,
  className = "",
}: AlertBannerProps) {
  const isSuccess = variant === "success";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex items-start gap-2 rounded-md px-3 py-2.5 text-sm text-white ${
        isSuccess ? "bg-primary" : "bg-red-400"
      } ${className}`}
    >
      {isSuccess ? (
        <CheckCircle
          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
          aria-hidden
        />
      ) : (
        <AlertCircle
          className="mt-0.5 h-4 w-4 shrink-0 text-red-400"
          aria-hidden
        />
      )}
      <p className="min-w-0 flex-1 leading-snug">{message}</p>
      {onDismiss ? (
        <button
          type="button"
          onClick={onDismiss}
          className="shrink-0 rounded p-0.5 opacity-80 hover:opacity-100"
          aria-label="Fechar alerta"
        >
          <X className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}
