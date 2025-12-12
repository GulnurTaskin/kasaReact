// Page d'accueil : récupération des données et affichage des cards

import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "./Home.css";

export default function Home() {
  // État pour stocker la liste des propriétés
  const [properties, setProperties] = useState([]);

  // Récupération des données depuis l'API back-end
  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Erreur API :", error));
  }, []);

  return (
    <div className="home">
      {/* Bannière en haut de la page */}
      <Banner />

      {/* Bloc gris contenant la grille des propriétés */}
      <section className="home__gallery">
        {properties.map((property) => (
          <Card
            key={property.id}        // clé unique pour chaque carte
            id={property.id}
            title={property.title}
            cover={property.cover}
          />
        ))}
      </section>
    </div>
  );
}
