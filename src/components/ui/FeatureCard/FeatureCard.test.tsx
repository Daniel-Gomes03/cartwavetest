import { render, screen } from "@testing-library/react";
import { FeatureCard } from ".";

describe("FeatureCard", () => {
  it("renderiza filhos dentro de article", () => {
    render(
      <FeatureCard data-testid="card">
        <p>Conteúdo</p>
      </FeatureCard>
    );
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByRole("article")).toContainElement(
      screen.getByText("Conteúdo")
    );
  });

  it("aplica className extra no article", () => {
    render(
      <FeatureCard className="shadow-lg" data-testid="card">
        <span>Item</span>
      </FeatureCard>
    );
    expect(screen.getByTestId("card")).toHaveClass("shadow-lg");
  });
});
