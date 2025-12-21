import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "apropos", element: <About /> },
      { path: "logement/:id", element: <Logement /> },
    ],
  },
]);

export default router;
