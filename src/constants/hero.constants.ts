import type { DashboardRowProps } from "@/app/landing/components/DashboardRow";

export const HERO_DASHBOARD_ROWS = [
  {
    tone: "green",
    title: "Pix recebido",
    time: "Agora mesmo",
    value: "R$ 1.250,00",
  },
  {
    tone: "teal",
    title: "Boleto pago",
    time: "2 min atrás",
    value: "R$ 850,00",
  },
  {
    tone: "green",
    title: "Split realizado",
    time: "5 min atrás",
    value: "R$ 2.100,00",
  },
] as const satisfies readonly DashboardRowProps[];

export const FEATURES = [
  "Integração simples e rápida",
  "APIs de Pix, boletos e mais",
  "Suporte técnico especializado",
  "Compliance e segurança total",
] as const satisfies readonly string[];
