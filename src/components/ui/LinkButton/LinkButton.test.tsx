import { render, screen } from "@testing-library/react";
import { LinkButton } from ".";

describe("LinkButton", () => {
  it("renderiza âncora com href e texto", () => {
    render(
      <LinkButton variant="ctaGradient" href="https://example.com">
        Clique
      </LinkButton>
    );
    const link = screen.getByRole("link", { name: "Clique" });
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("propaga atributos como target e rel", () => {
    render(
      <LinkButton
        variant="ctaOutline"
        href="https://wa.me/1"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </LinkButton>
    );
    const link = screen.getByRole("link", { name: "WhatsApp" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("concatena className extra", () => {
    render(
      <LinkButton variant="ctaGradientCompact" href="/x" className="px-4">
        Ir
      </LinkButton>
    );
    expect(screen.getByRole("link", { name: "Ir" })).toHaveClass("px-4");
  });
});
