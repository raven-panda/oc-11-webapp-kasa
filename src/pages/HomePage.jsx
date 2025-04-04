import useHousingData from "../components/hook/HousingHook.js";
import HousingCard from "../components/cards/housing-card/HousingCard.jsx";
import "./HomePage.scss";
import PageTitleCard from "../components/cards/page-title-card/PageTitleCard.jsx";
import LoadingIndicator from "../components/loading-indicator/LoadingIndicator.jsx";

export default function HomePage() {
  const { housings, loading } = useHousingData();

  return (
    <>
      <PageTitleCard title="Chez vous, partout et ailleurs" />
      <section id="housing-list" className={loading ? 'loading' : undefined}>
        {loading ? <LoadingIndicator /> : housings.map((housing) => (
          <HousingCard key={housing.id} {...housing} />
        ))}
      </section>
    </>
  );
}
