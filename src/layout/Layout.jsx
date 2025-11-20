// Layout principal de l'application Kasa
import { Outlet } from "react-router-dom";
import "./Layout.css"; 

export default function Layout() {
  return (
    <div className="layout-container">
      <header>
        <h1>Kasa</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2025 Kasa. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
