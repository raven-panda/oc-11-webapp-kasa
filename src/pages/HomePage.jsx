import useHousingData from "../components/hook/HousingHook.js";
import HousingCard from "../components/cards/housing-card/HousingCard.jsx";
import "./HomePage.scss";
import PageBanner from "../components/cards/page-title-card/PageBanner.jsx";

export default function HomePage() {
  const { housings } = useHousingData();

  return (
    <>
      <PageBanner title="Chez vous, partout et ailleurs" />
      <section id="housing-list">
        {housings.map((housing) => (
          <HousingCard key={housing.id} {...housing} />
        ))}
      </section>
    </>
  );
}
