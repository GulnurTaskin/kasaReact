// Page "A Propos" : affichage en mode accordéon (un seul panneau ouvert)

import { useState } from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import "./About.css";

const aboutSections = [
  {
    title: "Fiabilité",
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale...",
  },
  {
    title: "Respect",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa...",
  },
  {
    title: "Service",
    content: "La qualité du service est au cœur de nos priorités...",
  },
  {
    title: "Sécurité",
    content: "La sécurité est la priorité de Kasa...",
  },
];

export default function About() {
  // Index du collapse actuellement ouvert (null = aucun)
  const [openIndex, setOpenIndex] = useState(null);

  // Ouvre/ferme un panneau ; ferme automatiquement les autres
  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="about">
      <Banner />

      <div className="about__collapses">
        {aboutSections.map((section, index) => (
          <Collapse
            key={section.title}
            title={section.title}
            content={section.content}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
