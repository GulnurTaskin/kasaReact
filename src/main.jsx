// Point d'entrée principal de l'application Kasa
// Ici, on intègre le RouterProvider pour activer la navigation

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Fournit le routeur à toute l'application */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
