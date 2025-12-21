import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Slideshow from "../components/Slideshow";

describe("Slideshow", () => {
  const pictures = ["image1.jpg", "image2.jpg", "image3.jpg"];

  it("doit afficher la première image par défaut", () => {
    render(<Slideshow pictures={pictures} />);
    expect(screen.getByRole("img", { name: /logement/i })).toHaveAttribute("src", "image1.jpg");
  });

  it("doit afficher l’image suivante au clic sur la flèche droite", () => {
    render(<Slideshow pictures={pictures} />);
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByRole("img", { name: /logement/i })).toHaveAttribute("src", "image2.jpg");
  });

  it("doit revenir à la première image après la dernière image", () => {
    render(<Slideshow pictures={pictures} />);
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByRole("img", { name: /logement/i })).toHaveAttribute("src", "image1.jpg");
  });

  it("ne doit rien afficher si la liste d’images est vide", () => {
    const { container } = render(<Slideshow pictures={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("ne doit rien afficher si pictures est absent", () => {
    const { container } = render(<Slideshow pictures={undefined} />);
    expect(container.firstChild).toBeNull();
  });

  it("ne doit pas afficher les flèches ni les points lorsqu’il n’y a qu’une seule image", () => {
    render(<Slideshow pictures={["only.jpg"]} />);
    expect(screen.getByRole("img", { name: /logement/i })).toHaveAttribute("src", "only.jpg");
    expect(screen.queryByRole("button", { name: /previous/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /next/i })).toBeNull();
    expect(document.querySelector(".dots")).toBeNull();
  });
});
it("doit afficher l’image précédente au clic sur la flèche gauche", () => {
  render(<Slideshow pictures={["img1.jpg", "img2.jpg"]} />);

  fireEvent.click(screen.getByRole("button", { name: /next/i }));
  expect(screen.getByRole("img", { name: /logement/i })).toHaveAttribute("src", "img2.jpg");

  fireEvent.click(screen.getByRole("button", { name: /previous/i }));
  expect(screen.getByRole("img", { name: /logement/i })).toHaveAttribute("src", "img1.jpg");
});
