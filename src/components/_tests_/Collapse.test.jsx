// Tests unitaires pour le composant Collapse (avec state)

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Collapse from "../collapse";

describe("Collapse", () => {
  it("est fermé par défaut (contenu non affiché)", () => {
    render(<Collapse title="Fiabilité" content="Texte de test" />);
    const content = screen.queryByText("Texte de test");
    expect(content).not.toBeInTheDocument();
  });

  it("affiche le contenu après un clic sur l'en-tête", () => {
    render(<Collapse title="Fiabilité" content="Texte de test" />);
    const header = screen.getByText("Fiabilité");
    fireEvent.click(header);
    const content = screen.getByText("Texte de test");
    expect(content).toBeInTheDocument();
  });

  it("cache de nouveau le contenu après deux clics", () => {
    render(<Collapse title="Fiabilité" content="Texte de test" />);
    const header = screen.getByText("Fiabilité");

    // 1er clic : ouverture
    fireEvent.click(header);
    expect(screen.getByText("Texte de test")).toBeInTheDocument();

    // 2e clic : fermeture
    fireEvent.click(header);
    const content = screen.queryByText("Texte de test");
    expect(content).not.toBeInTheDocument();
  });

  it("met à jour la classe de la flèche en fonction de l'état", () => {
    render(<Collapse title="Fiabilité" content="Texte de test" />);
    const arrow = screen.getByText("▾");
    expect(arrow).toHaveClass("collapse-arrow");

    const header = screen.getByText("Fiabilité");
    fireEvent.click(header);
    expect(arrow).toHaveClass("open");
  });
});
