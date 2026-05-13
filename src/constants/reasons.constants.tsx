import {
  Zap,
  Shield,
  Headphones,
  TrendingUp,
  Code,
  Clock4,
} from "lucide-react";

export const REASONS = [
  {
    title: "Integração Rápida",
    description:
      "APIs REST simples e documentação completa para integração em minutos",
    metric: "< 1 hora",
    label: "para integrar",
    icon: <Zap className="h-7 w-7" />,
  },
  {
    title: "Segurança Total",
    description:
      "Certificações de segurança e compliance com as melhores práticas do mercado",
    metric: "99.5%",
    label: "de uptime",
    icon: <Shield className="h-7 w-7" />,
  },
  {
    title: "Suporte Especializado",
    description:
      "Time técnico dedicado para suporte e consultoria durante toda a jornada",
    metric: "24/7",
    label: "suporte",
    icon: <Headphones className="h-7 w-7" />,
  },
  {
    title: "Crescimento Escalável",
    description: "Infraestrutura robusta que cresce junto com o seu negócio",
    metric: "1000+",
    label: "clientes ativos",
    icon: <TrendingUp className="h-7 w-7" />,
  },
  {
    title: "Tecnologia Avançada",
    description:
      "Stack moderno com APIs RESTful, webhooks e SDKs em diversas linguagens",
    metric: "5",
    label: "principais linguagens",
    icon: <Code className="h-7 w-7" />,
  },
  {
    title: "Processamento Instantâneo",
    description:
      "Liquidação em tempo real para Pix e processamento otimizado para outros métodos",
    metric: "< 1seg",
    label: "por transação",
    icon: <Clock4 className="h-7 w-7" />,
  },
];
