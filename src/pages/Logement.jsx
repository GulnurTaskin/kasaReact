import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "./Logement.css";

function Logement() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  // 0: Description, 1: Equipements, null: rien
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setLoading(true);
    setProperty(null);

    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        setLoading(false);
        setOpenIndex(null);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p style={{ padding: "50px" }}>Chargement...</p>;
  }

  // Eğer API hata verdiyse veya logement bulunamadıysa
  if (property === null || !property.id) {
    return <Navigate to="/404" replace />;
  }

  function handleToggle(index) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <div className="logement-page">
      <Slideshow pictures={property.pictures} />

      <div className="logement-header">
        <div className="logement-info">
          <h1 className="logement-title">{property.title}</h1>
          <p className="logement-location">{property.location}</p>

          <div className="logement-tags">
            {property.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

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
            {[1, 2, 3, 4, 5].map((num) => (
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

      <div className="logement-collapses">
        <Collapse
          title="Description"
          content={property.description}
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
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
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
        />
      </div>
    </div>
  );
}

export default Logement;
