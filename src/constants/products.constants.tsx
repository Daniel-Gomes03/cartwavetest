import { CreditCard, Banknote, Users, Split, ShoppingCart } from "lucide-react";

export const PRODUCTS = [
  {
    title: "API de Pix",
    description:
      "Operações de Cash IN e Cash OUT com a API Pix mais robusta do mercado.",
    bullets: [
      "Pix 24/7",
      "QR Code dinâmico",
      "Webhooks em tempo real",
      "Conciliação automática",
    ],
    icon: <CreditCard />,
    href: "/solutions",
  },
  {
    title: "Emissão de Boletos",
    description:
      "Gere boletos com QR Code Pix integrado para máxima conversão de pagamentos.",
    bullets: [
      "QR Code Pix",
      "Vencimento flexível",
      "Juros e multa",
      "API REST",
    ],
    icon: <Banknote />,
    href: "/solutions",
  },
  {
    title: "Indique e Ganhe",
    description:
      "Programa de indicação completo para crescer sua base de clientes organicamente.",
    bullets: [
      "Dashboard de indicações",
      "Comissões automáticas",
      "Links personalizados",
      "Relatórios detalhados",
    ],
    icon: <Users />,
    href: "/solutions",
  },
  {
    title: "Split de Pagamentos",
    description:
      "Divida valores automaticamente entre diferentes destinatários com regras personalizadas.",
    bullets: [
      "Divisão automática",
      "Múltiplos destinatários",
      "Regras flexíveis",
      "Histórico completo",
    ],
    icon: <Split />,
    href: "/solutions",
  },
  {
    title: "Checkout Customizável",
    description:
      "Crie experiências de pagamento únicas com nosso checkout totalmente personalizável.",
    bullets: [
      "Design flexível",
      "Múltiplos métodos",
      "Mobile first",
      "Conversão otimizada",
    ],
    icon: <ShoppingCart />,
    href: "/solutions",
  },
];
