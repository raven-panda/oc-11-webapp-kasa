import "./ErrorPage.scss";
import { Link } from "react-router-dom";

/**
 * @param status {number} Status of error, default is 500
 * @param message {string} Error message supplied
 * @returns {JSX.Element}
 */
export default function ErrorPage({
  status = 500,
  message = "Oups! Une erreur est survenue lors du chargement de la page.",
}) {
  return (
    <section id="error-section">
      <h1>{status}</h1>
      <p>{message}</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
  );
}
