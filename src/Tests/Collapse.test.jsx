import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Collapse from "../components/Collapse";

describe("Collapse", () => {
  it("ne doit pas afficher le contenu lorsque le composant est fermé", () => {
    render(
      <Collapse
        title="Fiabilité"
        content="Contenu de test"
        isOpen={false}
        onToggle={() => {}}
      />
    );

    expect(screen.queryByText("Contenu de test")).not.toBeInTheDocument();
  });

  it("doit afficher le contenu lorsque le composant est ouvert", () => {
    render(
      <Collapse
        title="Fiabilité"
        content="Contenu de test"
        isOpen={true}
        onToggle={() => {}}
      />
    );

    expect(screen.getByText("Contenu de test")).toBeInTheDocument();
  });

  it("doit appeler la fonction onToggle lors du clic sur le titre", () => {
    const onToggle = vi.fn();

    render(
      <Collapse
        title="Fiabilité"
        content="Contenu de test"
        isOpen={false}
        onToggle={onToggle}
      />
    );

    fireEvent.click(screen.getByText("Fiabilité"));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("doit mettre à jour la classe de la flèche en fonction de l'état", () => {
    const { rerender } = render(
      <Collapse
        title="Fiabilité"
        content="Contenu de test"
        isOpen={false}
        onToggle={() => {}}
      />
    );

    const arrow = screen.getByTestId("collapse-arrow");
    expect(arrow).not.toHaveClass("open");

    rerender(
      <Collapse
        title="Fiabilité"
        content="Contenu de test"
        isOpen={true}
        onToggle={() => {}}
      />
    );

    expect(arrow).toHaveClass("open");
  });
});
