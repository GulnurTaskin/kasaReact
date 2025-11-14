// Configuration du routeur principal de l'application Kasa

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import About from "../pages/about";
import Logement from "../pages/Logement";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, // Page affichée si la route n'existe pas
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/logement/:id", // Route dynamique pour les logements
        element: <Logement />,
      },
    ],
  },
]);

export default router;
