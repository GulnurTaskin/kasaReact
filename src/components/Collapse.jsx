// Composant Collapse : permet d'ouvrir et de fermer une section de contenu
import { useState } from "react";
import "./Collapse.css";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="collapse-title">{title}</span>
        <span className={`collapse-arrow ${isOpen ? "open" : ""}`}>V</span>
      </div>

      {isOpen && (
        <div className="collapse-content">
          {content}
        </div>
      )}
    </div>
  );
}
