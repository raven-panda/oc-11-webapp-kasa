import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/_error/ErrorPage.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import HousingPage from "./pages/housing/HousingPage.jsx";

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
          <Route path="*" element={<ErrorPage status={404} />} />
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
const RoutesNode = (
  <>
    <Route path={"/"} element={<HomePage />} />
    <Route path={"/about"} element={<AboutPage />} />
    <Route path={"/housing/:id"} element={<HousingPage />} />
  </>
);
