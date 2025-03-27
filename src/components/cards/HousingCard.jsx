import styles from './HousingCard.module.scss';
import { Link } from "react-router-dom";

/**
 * Creates a card for housing in the Home Page
 * @param id {string} Id of the housing object
 * @param title {string} Title of the housing object
 * @param cover {string} URL of the cover file
 * @returns {JSX.Element}
 */
export default function HousingCard({ id, title, cover }) {
  return <article className={styles.card}>
    <img src={cover} alt={"Image de couverture de " + title} />
    <Link to={`/housing/${id}`}>
      <h2>{title}</h2>
    </Link>
  </article>;
}
