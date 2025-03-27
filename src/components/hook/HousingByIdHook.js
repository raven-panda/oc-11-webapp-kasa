import { useState } from "react";
import housingsFixture from "../../__fixtures__/logements.json";

/**
 * Hook used for a housing object retrieval by ID
 * @returns {{housing: any, searchById: (id: string) => void}}
 */
export default function useHousingByIdData() {
  const [housing, setHousing] = useState();
  const [error, setError] = useState();

  /**
   * @param id {string} ID of the housing to get
   */
  const searchById = (id) => {
    const foundHousing = housingsFixture.find(housing => housing.id === id);
    setHousing(foundHousing);
    setError(!foundHousing ? 404 : undefined);
  };

  return { housing, searchById, error };
}
