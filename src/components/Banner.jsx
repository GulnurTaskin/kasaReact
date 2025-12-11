// Composant Banner affiché sur la page d'accueil
// L'image de fond et l'overlay sont gérés uniquement en CSS.

import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}
