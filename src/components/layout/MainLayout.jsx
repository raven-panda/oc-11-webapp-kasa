import styles from "./MainLayout.module.scss";
import { Link, useLocation } from "react-router-dom";
import KasaLogo from "../../assets/icon/KasaLogo.jsx";

/**
 * @param children {ReactNode} Children to display in `<main>` element
 * @returns {JSX.Element}
 */
export default function MainLayout({ children }) {
  const location = useLocation();

  return (
    <>
      <main className={styles.layout_main_container}>
        <header className={styles.header}>
          <KasaLogo />
          <nav>
            <Link
              className={
                location.pathname === "/" ? styles.current_location : undefined
              }
              to={"/"}
            >
              Accueil
            </Link>
            <Link
              className={
                location.pathname === "/about"
                  ? styles.current_location
                  : undefined
              }
              to={"/about"}
            >
              A Propos
            </Link>
          </nav>
        </header>
        {children}
      </main>
      <footer className={styles.layout_footer}>
        <KasaLogo variant="footer" width={122} height={39} />
        <p>&#169; 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}
