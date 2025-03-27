import useHousingData from "../components/hook/HousingHook.js";
import HousingCard from "../components/cards/housing-card/HousingCard.jsx";
import "./HomePage.scss";
import PageTitleCard from "../components/cards/page-title-card/PageTitleCard.jsx";

export default function HomePage() {
  const { housings } = useHousingData();

  return (
    <>
      <PageTitleCard title="Chez vous, partout et ailleurs" />
      <section id="housing-list">
        {housings.map((housing) => (
          <HousingCard key={housing.id} {...housing} />
        ))}
      </section>
    </>
  );
}
