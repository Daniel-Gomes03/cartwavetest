import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from ".";
import { LOGIN_URL, WHATSAPP } from "@/constants/links.constants";

describe("Header", () => {
  it("renderiza o link do logo para #inicio", () => {
    render(<Header />);
    expect(
      screen.getByRole("link", { name: /Cartwave — Início/i })
    ).toHaveAttribute("href", "#inicio");
  });

  it("renderiza a navegação principal com hrefs corretos", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "Principal" });
    expect(within(nav).getByRole("link", { name: "Início" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(within(nav).getByRole("link", { name: "Produtos" })).toHaveAttribute(
      "href",
      "#produtos"
    );
    expect(within(nav).getByRole("link", { name: "Soluções" })).toHaveAttribute(
      "href",
      "#why-cartwave"
    );
    expect(within(nav).getByRole("link", { name: "Contato" })).toHaveAttribute(
      "href",
      "#contato"
    );
  });

  it("renderiza Entrar e CTA do WhatsApp com URLs esperadas", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Entrar" })).toHaveAttribute(
      "href",
      LOGIN_URL
    );
    const expertLinks = screen.getAllByRole("link", {
      name: /Fale com um especialista/i,
    });
    expect(expertLinks.length).toBeGreaterThanOrEqual(1);
    expertLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", WHATSAPP);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("abre e fecha o menu mobile e fecha com Escape", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const toggle = screen.getByRole("button", {
      name: /Abrir menu de navegação/i,
    });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("navigation", { name: "Mobile" })
    ).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("navigation", { name: "Mobile" })
    ).not.toBeInTheDocument();
  });

  it("fecha o menu mobile ao clicar em um link da navegação", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(
      screen.getByRole("button", { name: /Abrir menu de navegação/i })
    );

    const mobileNav = screen.getByRole("navigation", { name: "Mobile" });
    await user.click(within(mobileNav).getByRole("link", { name: "Produtos" }));

    expect(
      screen.queryByRole("navigation", { name: "Mobile" })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Abrir menu de navegação/i })
    ).toHaveAttribute("aria-expanded", "false");
  });
});
