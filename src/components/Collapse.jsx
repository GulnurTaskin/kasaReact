// Composant Collapse : section repliable (mode contrôlé possible)
// - Si le parent fournit isOpen/onToggle → accordéon possible
// - Sinon → comportement autonome (useState interne)

import { useState } from "react";
import "./Collapse.css";

export default function Collapse({ title, content, isOpen, onToggle }) {
  // État interne utilisé uniquement si le parent ne contrôle pas le collapse
  const [internalOpen, setInternalOpen] = useState(false);

  // Détermine si le composant est contrôlé par le parent
  const isControlled = typeof isOpen === "boolean" && typeof onToggle === "function";
  const open = isControlled ? isOpen : internalOpen;

  // Gestion du clic
  const handleClick = () => {
    if (isControlled) onToggle();
    else setInternalOpen((prev) => !prev);
  };

  return (
    <div className="collapse">
      {/* En-tête cliquable */}
      <div className="collapse-header" onClick={handleClick}>
        <span className="collapse-title">{title}</span>

        {/* Icône flèche (arrow_back_ios) contrôlée par rotation */}
        <span className={`collapse-arrow ${open ? "open" : ""}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>

      {/* Contenu */}
      {open && <div className="collapse-content">{content}</div>}
    </div>
  );
}
