// Tests unitaires pour le composant Banner (sans state)

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Banner from "../Banner";

describe("Banner", () => {
  it("affiche le titre attendu", () => {
    render(<Banner />);
    const title = screen.getByText("Chez vous, partout et ailleurs");
    expect(title).toBeInTheDocument();
  });

  it("contient un conteneur avec la classe CSS 'banner'", () => {
    const { container } = render(<Banner />);
    expect(container.firstChild).toHaveClass("banner");
  });
});
