import styles from './MainLayout.module.scss';
import { Link } from "react-router-dom";
import KasaLogo from "../../assets/icon/KasaLogo.jsx";

/**
 * @param children {ReactNode} Children to display in `<main>` element
 * @returns {JSX.Element}
 */
export default function MainLayout({ children }) {
  return <>
    <main className={styles.layout_main_container}>
      <header className={styles.header}>
        <KasaLogo />
        <nav>
          <Link to={"/"}>Accueil</Link>
          <Link to={"/about"}>A Propos</Link>
        </nav>
      </header>
      <section>
        {children}
      </section>
    </main>
    <footer className={styles.layout_footer}>
      <KasaLogo variant="footer" width={122} height={39} />
      <p>&#169; 2020 Kasa. All rights reserved</p>
    </footer>
  </>;
}
