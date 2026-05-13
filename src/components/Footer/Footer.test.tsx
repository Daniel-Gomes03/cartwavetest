import { render, screen, within } from "@testing-library/react";
import { Footer } from ".";

describe("Footer", () => {
  it("renderiza o rodapé com id contato", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveAttribute("id", "contato");
  });

  it("mostra o ano atual e o texto de copyright", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(
        new RegExp(`© ${year} Cartwave Instituição de Pagamento Ltda`)
      )
    ).toBeInTheDocument();
  });

  it("lista links de produtos para /solutions", () => {
    render(<Footer />);
    const heading = screen.getByRole("heading", { name: "Produtos" });
    const list = heading.parentElement?.querySelector("ul");
    expect(list).toBeTruthy();
    const links = within(list as HTMLElement).getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
    links.forEach((a) => expect(a).toHaveAttribute("href", "/solutions"));
  });

  it("lista links da empresa com hrefs esperados", () => {
    render(<Footer />);
    const heading = screen.getByRole("heading", { name: "Empresa" });
    const list = heading.parentElement?.querySelector("ul");
    expect(list).toBeTruthy();
    expect(
      within(list as HTMLElement).getByRole("link", { name: "Sobre nós" })
    ).toHaveAttribute("href", "/about");
    expect(
      within(list as HTMLElement).getByRole("link", { name: "Contato" })
    ).toHaveAttribute("href", "#contato");
  });

  it("exibe contatos e CNPJ", () => {
    render(<Footer />);
    expect(screen.getByText(/Goiânia-GO/)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "+55 62 92002-8202" })
    ).toHaveAttribute("href", "tel:+5562920028202");
    expect(
      screen.getByRole("link", { name: "atendimento@checkoutcartwave.com.br" })
    ).toHaveAttribute("href", "mailto:atendimento@checkoutcartwave.com.br");
    expect(screen.getByText(/CNPJ: 33\.207\.641\/0001-70/)).toBeInTheDocument();
  });

  it("renderiza newsletter e links legais", () => {
    render(<Footer />);
    expect(
      screen.getByRole("heading", { name: "Newsletter" })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Seu e-mail")).toBeInTheDocument();

    const legal = screen.getByRole("navigation", { name: "Legal" });
    expect(
      within(legal).getByRole("link", { name: "Privacidade" })
    ).toHaveAttribute("href", "/termos");
    expect(
      within(legal).getByRole("link", { name: "Termos de Uso" })
    ).toHaveAttribute("href", "/termos");
  });

  it("renderiza LinkedIn como link externo", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/company/cartwave-hub/"
    );
  });
});
