// Layout principal de l'application Kasa
// Ce composant englobe le header, le contenu dynamique et le footer

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* En-tête du site */}
      <header>
        <h1>Kasa</h1>
      </header>

      {/* Contenu dynamique qui change selon la route */}
      <main>
        <Outlet />
      </main>

      {/* Pied de page */}
      <footer>
        <p>© 2025 Kasa. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
