import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import KasaRouter from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <KasaRouter />
  </StrictMode>,
);
