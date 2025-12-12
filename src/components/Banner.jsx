// Composant Banner affiché sur la page d'accueil
// L'image de fond et l'overlay sont gérés uniquement en CSS.

import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
  
      <p className="banner-text">
        Chez vous, <br className="banner-line-break" />
        partout et ailleurs
      </p>
    </div>
  );
}