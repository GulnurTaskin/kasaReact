// Composant Collapse : permet d'ouvrir et de fermer une section de contenu

import { useState } from "react";
import "./Collapse.css";

export default function Collapse({ title, children }) {
  // État du collapse (ouvert ou fermé)
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour changer l'état
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      {/* En-tête cliquable */}
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? "open" : ""}`}>⌃</span>
      </div>

      {/* Contenu affiché seulement si ouvert */}
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}
