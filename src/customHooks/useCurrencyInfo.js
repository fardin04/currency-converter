import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${currency}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch exchange rates");
        }
        const data = await response.json();
        setRates(data.rates || {});
      } catch (err) {
        setError(err.message);
        setRates({});
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [currency]);

  return { rates, loading, error };
}

export default useCurrencyInfo;
