// Page À propos contenant plusieurs sections en Collapse

import Collapse from "../components/collapse";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <Collapse title="Fiabilité">
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale.
          Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées.
        </p>
      </Collapse>

      <Collapse title="Respect">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa.
          Tout comportement irrespectueux entraînera une exclusion de la plateforme.
        </p>
      </Collapse>

      <Collapse title="Service">
        <p>
          Nos équipes se tiennent à votre disposition pour vous assurer une expérience parfaite.
        </p>
      </Collapse>

      <Collapse title="Sécurité">
        <p>
          La sécurité est la priorité de Kasa.
          C’est pour cette raison que nos hôtes s’engagent à respecter un code strict.
        </p>
      </Collapse>
    </div>
  );
}
