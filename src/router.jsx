import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";

/**
 * Custom router of the app
 * @returns {JSX.Element} The `<BrowserRouter>` element that wraps the app layout and all routes inside
 */
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

/**
 * An element that contains all apps routes.
 *
 * To create one, add a `<Route>` child with a path and a page component
 * @type {JSX.Element}
 */
const RoutesNode = <></>;
