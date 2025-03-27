import styles from './MainLayout.module.scss';
import { Link } from "react-router-dom";
import KasaLogo from "../../assets/icon/KasaLogo.jsx";

/**
 * @param children {ReactNode} Children to display in `<main>` element
 * @returns {JSX.Element}
 */
export default function MainLayout({ children }) {
  return <section>
    <div className={styles.layout_main_container}>
      <header className={styles.header}>
        <KasaLogo className={styles.layout_logo} />
        <nav>
          <Link to={"/"}>Accueil</Link>
          <Link to={"/about"}>A Propos</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
    <footer className={styles.layout_footer}>
      <KasaLogo width={122} height={39} />
      <p>&#169; 2020 Kasa. All rights reserved</p>
    </footer>
  </section>;
}
