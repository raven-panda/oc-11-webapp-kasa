import "./HousingPage.scss";
import useHousingByIdData from "../../components/hook/HousingByIdHook.js";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../_error/ErrorPage.jsx";
import CarouselCard from "../../components/cards/carousel/CarouselCard.jsx";
import FiveStarsRate from "../../components/cards/five-stars-rate/FiveStarsRate.jsx";
import CollapsibleBloc from "../../components/collapsible-data/CollapsibleBloc.jsx";

export default function HousingPage() {
  const { id } = useParams();
  const { housing, searchById, error } = useHousingByIdData();

  useEffect(() => {
    searchById(id);
  }, [searchById, id]);

  return error ? (
    <ErrorPage status={error} />
  ) : (
    housing && (
      <>
        <CarouselCard pictures={housing.pictures} alt={housing.title} />
        <header id="housing-header">
          <section>
            <h2 id="housing-title">{housing.title}</h2>
            <p id="housing-location">{housing.location}</p>
            <div id="housing-tags">
              {housing.tags.map(
                tag => <p>{tag}</p>
              )}
            </div>
          </section>
          <section>
            <div id="host-infos">
              <p>{housing.host.name}</p>
              <img
                src={housing.host.picture}
                width={64}
                height={64}
                alt={"Image de " + housing.host.name}
              />
            </div>
            <FiveStarsRate rate={housing.rating} />
          </section>
        </header>
        <div id="housing-infos-collapsible">
          <CollapsibleBloc title="Description">{housing.description}</CollapsibleBloc>
          <CollapsibleBloc title="Équipements">
            {housing.equipments.map(
              equipment => <p>{equipment}</p>
            )}
          </CollapsibleBloc>
        </div>
      </>
    )
  );
}
