import { render, screen } from "@testing-library/react";
import { AnimatedCard } from ".";

describe("AnimatedCard", () => {
  it("renderiza o título e os filhos", () => {
    render(
      <AnimatedCard title="Painel">
        <p>Conteúdo interno</p>
      </AnimatedCard>
    );
    expect(
      screen.getByRole("heading", { level: 3, name: "Painel" })
    ).toBeInTheDocument();
    expect(screen.getByText("Conteúdo interno")).toBeInTheDocument();
  });
});
