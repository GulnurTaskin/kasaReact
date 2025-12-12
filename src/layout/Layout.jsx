// Layout principal de l'application Kasa
import { Outlet, NavLink } from "react-router-dom";
import "./Layout.css"; 
import logo from "../assets/logo.svg";
import logoBW from "../assets/logoBW.svg";


export default function Layout() {
  return (
    <div className="layout-container">
      {/* HEADER */}
      <header className="layout-header">
        <img src={logo} alt="Kasa" className="layout-logo" />

        <nav className="layout-nav">
  <NavLink
    to="/"
    end
    className={({ isActive }) =>
      "layout-link" + (isActive ? " layout-link--active" : "")
    }
  >
    Accueil
  </NavLink>

  <NavLink
    to="/apropos"
    className={({ isActive }) =>
      "layout-link" + (isActive ? " layout-link--active" : "")
    }
  >
    A Propos
  </NavLink>
</nav>
      </header>

      {/* CONTENU */}
      <main className="layout-main">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="layout-footer">
        <img src={logoBW} alt="Kasa" className="layout-footer-logo" />
        <p className="layout-footer-text">
          © 2020 Kasa. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
