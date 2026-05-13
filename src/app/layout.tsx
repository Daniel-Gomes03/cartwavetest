import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./styles/globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cartwave instituição de pagamento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} h-full antialiased`}>
      <body
        className={`${roboto.className} flex min-h-screen flex-col bg-background`}
      >
        <Header />
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
