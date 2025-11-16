// Page d'accueil : récupération des données et affichage des cards

import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "./Home.css";

export default function Home() {
  // État pour stocker la liste des propriétés
  const [properties, setProperties] = useState([]); // save data

  // Récupération des données du back-end
  useEffect(() => { // appel d'API
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Erreur API :", error));
  }, []);

  return (
    <div className="home-container">
      {/* Bannière du site */}
      <Banner />

      {/* Grille des propriétés */}
      <div className="cards-container">
        {properties.map((property) => ( // creation de card pour chaque property
          <Card
            key={property.id} // obligatoire pour éviter les warnings React
            id={property.id}
            title={property.title}
            cover={property.cover}
          />
        ))}
      </div>
    </div>
  );
}
