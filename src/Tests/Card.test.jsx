import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Card from "../components/Card";

describe("Card", () => {
  it("doit afficher le titre et l’image du logement", () => {
    render(
      <MemoryRouter>
        <Card
          id="abc123"
          title="Appartement test"
          cover="image.jpg"
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Appartement test")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "image.jpg");
  });
});
