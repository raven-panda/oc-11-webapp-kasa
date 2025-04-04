import { useState } from "react";
import housingsFixture from "../../__fixtures__/logements.json";
import { fetchHousingById } from "../../action/HousingAction.js";

/**
 * Hook used for a housing object retrieval by ID
 * @returns {{housing: any, searchById: (id: string) => void}}
 */
export default function useHousingByIdData() {
  const [housing, setHousing] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  /**
   * @param id {string} ID of the housing to get
   */
  const searchById = (id) => {
    setLoading(true);
    fetchHousingById(id)
      .then(setHousing)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return { housing, searchById, loading, error };
}
