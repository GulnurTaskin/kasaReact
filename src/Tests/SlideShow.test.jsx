import { render, screen, fireEvent } from "@testing-library/react";
import Slideshow from "../components/Slideshow";

describe("Composant Slideshow", () => {
  const picturesMock = ["image1.jpg", "image2.jpg", "image3.jpg"];

  test("affiche la première image par défaut", () => {
    render(<Slideshow pictures={picturesMock} />);

    const image = screen.getByRole("img", { name: /logement/i });
    expect(image).toHaveAttribute("src", "image1.jpg");
  });

  test("affiche l’image suivante lorsque l’utilisateur clique sur la flèche droite", () => {
    const { container } = render(<Slideshow pictures={picturesMock} />);

    const nextButton = container.querySelector("button.arrow.right");
    expect(nextButton).not.toBeNull();

    fireEvent.click(nextButton);

    const image = screen.getByRole("img", { name: /logement/i });
    expect(image).toHaveAttribute("src", "image2.jpg");
  });

  test("revient à la première image après la dernière image", () => {
    const { container } = render(<Slideshow pictures={picturesMock} />);

    const nextButton = container.querySelector("button.arrow.right");
    expect(nextButton).not.toBeNull();

    fireEvent.click(nextButton); // image 2
    fireEvent.click(nextButton); // image 3
    fireEvent.click(nextButton); // retour à l’image 1

    const image = screen.getByRole("img", { name: /logement/i });
    expect(image).toHaveAttribute("src", "image1.jpg");
  });

  test("ne rend rien lorsque la liste d’images est vide ou absente", () => {
    const { container: containerEmpty } = render(
      <Slideshow pictures={[]} />
    );
    expect(containerEmpty.firstChild).toBeNull();

    const { container: containerUndefined } = render(
      <Slideshow pictures={undefined} />
    );
    expect(containerUndefined.firstChild).toBeNull();
  });

  test("ne montre pas les flèches ni les points lorsqu’il n’y a qu’une seule image", () => {
    const { container } = render(
      <Slideshow pictures={["only.jpg"]} />
    );

    // l’image est bien affichée
    expect(screen.getByRole("img", { name: /logement/i })).toHaveAttribute(
      "src",
      "only.jpg"
    );

    // les flèches ne sont pas affichées
    expect(container.querySelector("button.arrow.left")).toBeNull();
    expect(container.querySelector("button.arrow.right")).toBeNull();

    // les points ne sont pas affichés
    expect(container.querySelector(".dots")).toBeNull();
  });
});
