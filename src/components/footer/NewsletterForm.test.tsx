import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NewsletterForm } from "./NewsletterForm";
import { subscribeNewsletter } from "@/lib/newsletter";

jest.mock("@/lib/newsletter", () => ({
  subscribeNewsletter: jest.fn(),
}));

const mockedSubscribe = subscribeNewsletter as jest.MockedFunction<
  typeof subscribeNewsletter
>;

describe("NewsletterForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("mantém o botão de envio desativado com e-mail vazio", () => {
    render(<NewsletterForm />);
    expect(
      screen.getByRole("button", { name: "Enviar inscrição" })
    ).toBeDisabled();
  });

  it("mantém o botão desativado com e-mail inválido", async () => {
    const user = userEvent.setup();
    render(<NewsletterForm />);
    const input = screen.getByPlaceholderText("Seu e-mail");
    await user.type(input, "invalido");
    expect(
      screen.getByRole("button", { name: "Enviar inscrição" })
    ).toBeDisabled();
  });

  it("envia e mostra alerta de erro quando a API devolve ok: false", async () => {
    const user = userEvent.setup();
    mockedSubscribe.mockResolvedValue({ ok: false });

    render(<NewsletterForm />);
    await user.type(screen.getByPlaceholderText("Seu e-mail"), "user@test.com");
    await user.click(screen.getByRole("button", { name: "Enviar inscrição" }));

    await waitFor(() => {
      expect(mockedSubscribe).toHaveBeenCalledWith("user@test.com");
    });

    expect(
      await screen.findByText(/Não foi possível concluir a inscrição/i)
    ).toBeInTheDocument();

    const status = screen.getByRole("status");
    expect(status).toHaveAttribute("aria-live", "polite");
  });

  it("mostra alerta de sucesso quando a API devolve ok: true", async () => {
    const user = userEvent.setup();
    mockedSubscribe.mockResolvedValue({ ok: true });

    render(<NewsletterForm />);
    await user.type(screen.getByPlaceholderText("Seu e-mail"), "ok@test.com");
    await user.click(screen.getByRole("button", { name: "Enviar inscrição" }));

    expect(
      await screen.findByText(/Inscrição registrada com sucesso/i)
    ).toBeInTheDocument();
  });

  it("fecha o alerta ao clicar em Fechar alerta", async () => {
    const user = userEvent.setup();
    mockedSubscribe.mockResolvedValue({ ok: false });

    render(<NewsletterForm />);
    await user.type(screen.getByPlaceholderText("Seu e-mail"), "a@b.com");
    await user.click(screen.getByRole("button", { name: "Enviar inscrição" }));

    const status = await screen.findByRole("status");
    expect(within(status).getByText(/Não foi possível/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Fechar alerta" }));

    await waitFor(() => {
      expect(screen.queryByRole("status")).not.toBeInTheDocument();
    });
  });
});
