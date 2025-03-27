import { useEffect, useState } from "react";
import housingsFixture from "../../__fixtures__/logements.json";

export default function useHousingData() {
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    setHousings(housingsFixture ?? []);
  }, []);

  return { housings };
}
