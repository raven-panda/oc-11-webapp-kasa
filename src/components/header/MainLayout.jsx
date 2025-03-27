import styles from './MainLayout.module.scss';
import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
  return <>
    <header className={styles.header}>
      <picture>
        <source media="(max-width: 375px)" srcSet="/kasa-logo-146.png"/>
        <img
          src="/kasa-logo-211.png"
          alt="Kasa Logo"
        />
      </picture>
      <nav>
        <Link to={"/"}>Accueil</Link>
        <Link to={"/about"}>A Propos</Link>
      </nav>
    </header>
    <main>
      {children}
    </main>
  </>;
}
