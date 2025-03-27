import { useEffect, useState } from "react";
import housingsFixture from "../../__fixtures__/logements.json";

/**
 * Hook used for housings data retrieval
 * @returns {{housings: any[]}}
 */
export default function useHousingData() {
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    setHousings(housingsFixture ?? []);
  }, []);

  return { housings };
}
