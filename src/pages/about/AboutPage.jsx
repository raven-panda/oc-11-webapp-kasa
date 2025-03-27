import PageTitleCard from "../../components/cards/page-title-card/PageTitleCard.jsx";
import CollapsibleBloc from "../../components/collapsible-data/CollapsibleBloc.jsx";
import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <>
      <PageTitleCard variant={"about"} />
      <section id="collapsibles-container">
        <CollapsibleBloc title={"Fiabilité"}>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
        </CollapsibleBloc>
        <CollapsibleBloc title={"Respect"}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </CollapsibleBloc>
        <CollapsibleBloc title={"Service"}>
          La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
        </CollapsibleBloc>
        <CollapsibleBloc title={"Sécurité"}>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </CollapsibleBloc>
      </section>
    </>
  );
}
