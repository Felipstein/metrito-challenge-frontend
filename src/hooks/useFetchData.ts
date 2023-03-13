import { useState, useEffect } from 'react';

export function useFetchData<T>(url: string, startLoading = true) {
  const [isFetching, setIsFetching] = useState(startLoading);
  const [errorFeedback, setErrorFeedback] = useState<string | null>(null);
  const [data, setData] = useState<T>();

  async function fetchData() {
    try {
      setIsFetching(true);
      setErrorFeedback(null);

      const response = await fetch(url);
      const json = await response.json();

      if(json.error_feedback) {
        throw new Error(json.error_feedback);
      }

      setData(json);
    } catch (err: Error | any) {
      setErrorFeedback(err.message || 'Ocorreu um erro enquanto processavamos a requisição');
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { isFetching, errorFeedback, data, fetchAgain: fetchData };
}
