import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
