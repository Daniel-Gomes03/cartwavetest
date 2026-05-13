import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AlertBanner } from ".";

describe("AlertBanner", () => {
  it("mostra a mensagem com role status e aria-live polite", () => {
    render(<AlertBanner variant="error" message="Falhou" />);
    const region = screen.getByRole("status");
    expect(region).toHaveAttribute("aria-live", "polite");
    expect(region).toHaveTextContent("Falhou");
  });

  it("variante success renderiza a mensagem", () => {
    render(<AlertBanner variant="success" message="OK" />);
    expect(screen.getByRole("status")).toHaveTextContent("OK");
  });

  it("não mostra botão fechar sem onDismiss", () => {
    render(<AlertBanner variant="error" message="X" />);
    expect(
      screen.queryByRole("button", { name: "Fechar alerta" })
    ).not.toBeInTheDocument();
  });

  it("chama onDismiss ao clicar em Fechar alerta", async () => {
    const user = userEvent.setup();
    const onDismiss = jest.fn();
    render(
      <AlertBanner variant="error" message="Erro" onDismiss={onDismiss} />
    );
    await user.click(screen.getByRole("button", { name: "Fechar alerta" }));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
