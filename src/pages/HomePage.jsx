import useHousingData from "../components/hook/HousingHook.ts.js";
import HousingCard from "../components/cards/HousingCard.jsx";
import "./HomePage.scss";

export default function HomePage() {
  const { housings } = useHousingData();

  return (
    <>
      <section id="housing-title">
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <section id="housing-list">
        {housings.map((housing) => (
          <HousingCard key={housing.id} {...housing} />
        ))}
      </section>
    </>
  );
}
