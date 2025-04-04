import { useEffect, useState } from "react";
import { fetchHousings } from "../../action/HousingAction.js";

/**
 * Hook used for housings data retrieval
 * @returns {{housings: any[]}}
 */
export default function useHousingData() {
  const [housings, setHousings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetchHousings()
      .then(setHousings)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { housings, loading, error };
}
