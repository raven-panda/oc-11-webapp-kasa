import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/error/ErrorPage.jsx";

export default function KasaRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesNode}
        <Route
          path="*"
          element={
            <ErrorPage
              status={404}
              message={"Oups! La page que vous demandez n'existe pas."}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const RoutesNode = <></>;
