// Composant Card utilisé pour afficher une propriété dans la liste
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <article>
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </article>
    </Link>
  );
}
