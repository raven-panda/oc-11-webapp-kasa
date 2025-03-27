import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import KasaRouter from "./router.jsx";

// Specify the root element where to render the React app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <KasaRouter />
  </StrictMode>,
);
