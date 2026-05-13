import { useCallback, useState } from "react";

export type AlertVariant = "success" | "error";

export type AlertState = {
  variant: AlertVariant;
  message: string;
};

export function useAlert() {
  const [alert, setAlert] = useState<AlertState | null>(null);

  const showAlert = useCallback((variant: AlertVariant, message: string) => {
    setAlert({ variant, message });
  }, []);

  const dismissAlert = useCallback(() => {
    setAlert(null);
  }, []);

  return { alert, showAlert, dismissAlert };
}
