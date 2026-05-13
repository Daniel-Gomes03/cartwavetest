import { render, screen } from "@testing-library/react";
import { BrandLogo } from ".";

describe("BrandLogo", () => {
  it("renderiza wordmark com alt Cartwave", () => {
    render(<BrandLogo variant="wordmark" />);
    const img = screen.getByRole("img", { name: "Cartwave" });
    expect(img).toHaveAttribute("width", "160");
    expect(img).toHaveAttribute("height", "48");
    expect(img).toHaveAttribute("data-priority", "true");
  });

  it("renderiza ícone com dimensões menores", () => {
    render(<BrandLogo variant="icon" />);
    const img = screen.getByRole("img", { name: "Cartwave" });
    expect(img).toHaveAttribute("width", "40");
    expect(img).toHaveAttribute("height", "40");
  });

  it("priority explícito sobrepõe o default do wordmark", () => {
    render(<BrandLogo variant="wordmark" priority={false} />);
    const img = screen.getByRole("img", { name: "Cartwave" });
    expect(img).not.toHaveAttribute("data-priority");
  });

  it("priority true no ícone força prioridade", () => {
    render(<BrandLogo variant="icon" priority />);
    const img = screen.getByRole("img", { name: "Cartwave" });
    expect(img).toHaveAttribute("data-priority", "true");
  });
});
