// Composant Slideshow pour afficher les images d'un logement
import { useState } from "react";
import "./Slideshow.css";

export default function Slideshow({ pictures }) {
  // Index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour passer à l'image précédente
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  // Si une seule image, on affiche uniquement l'image sans les contrôles
  if (!pictures || pictures.length === 0) {
    return null;
  }

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt="Logement"
        className="slideshow-image"
      />

      {/* Affichage des flèches uniquement s'il y a plusieurs images */}
      {pictures.length > 1 && (
        <>
          <button className="arrow left" onClick={prevImage}>
            ❮
          </button>
          <button className="arrow right" onClick={nextImage}>
            ❯
          </button>

          {/* Bullet points dynamiques */}
          <div className="dots">
            {pictures.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
