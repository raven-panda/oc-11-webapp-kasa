import "./ErrorPage.scss";
import { Link } from "react-router-dom";

/**
 * @param status {number} Status of error, default is 500
 * @returns {JSX.Element}
 */
export default function ErrorPage({
  status = 500
}) {
  const getMessage = () => {
    switch (status) {
      case 404:
        return "Oups! La page que vous demandez n'existe pas.";
      default:
        return "Oups! Une erreur est survenue lors du chargement de la page.";
    }
  };

  return (
    <section id="error-section">
      <h1>{status}</h1>
      <p>{getMessage()}</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
  );
}
