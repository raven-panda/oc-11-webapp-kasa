import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";

export default function KasaRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
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
      </MainLayout>
    </BrowserRouter>
  );
}

const RoutesNode = <></>;
