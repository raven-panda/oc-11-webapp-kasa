import PageBanner from "../../components/cards/page-banner/PageBanner.jsx";
import CollapsibleBlock from "../../components/collapsible-block/CollapsibleBlock.jsx";
import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <>
      <PageBanner variant={"about"} />
      <section id="collapsibles-container">
        <CollapsibleBlock title={"Fiabilité"}>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </CollapsibleBlock>
        <CollapsibleBlock title={"Respect"}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </CollapsibleBlock>
        <CollapsibleBlock title={"Service"}>
          La qualité du service est au cœur de notre engagement chez Kasa. Nous
          veillons à ce que chaque interaction, que ce soit avec nos hôtes ou
          nos locataires, soit empreinte de respect et de bienveillance.
        </CollapsibleBlock>
        <CollapsibleBlock title={"Sécurité"}>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </CollapsibleBlock>
      </section>
    </>
  );
}
