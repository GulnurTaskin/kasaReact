// Page Logement : affiche les détails d'une propriété
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/collapse";
import "./Logement.css"; 

export default function Logement() {
  const { id } = useParams(); 
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  // Récupération des données du logement
  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  // Si la propriété n'existe pas → redirection vers la page d'erreur
  if (!loading && !property?.id) {
    return <Navigate to="/error" />;
  }

  if (loading) {
    return <p style={{ padding: "50px" }}>Chargement...</p>;
  }

  return (
    <div className="logement-page">

      {/* SLIDESHOW */}
      <Slideshow pictures={property.pictures} />

      {/* HEADER DU LOGEMENT */}
      <div className="logement-header">
        
        {/* TITRE + LOCALISATION + TAGS */}
        <div className="logement-info">
          <h1 className="logement-title">{property.title}</h1>
          <p className="logement-location">{property.location}</p>

          <div className="logement-tags">
            {property.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* HOST + RATING */}
        <div className="logement-host-rating">
          
          <div className="host">
            <p className="host-name">{property.host.name}</p>
            <img 
              className="host-picture" 
              src={property.host.picture} 
              alt={property.host.name} 
            />
          </div>

          <div className="rating">
            {[1,2,3,4,5].map((num) => (
              <span
                key={num}
                className={num <= property.rating ? "star active" : "star"}
              >
                ★
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* COLLAPSES */}
      <div className="logement-collapses">
        
        <Collapse 
          title="Description" 
          content={property.description} 
        />

        <Collapse 
          title="Équipements" 
          content={
            <ul>
              {property.equipments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          }
        />

      </div>

    </div>
  );
}

