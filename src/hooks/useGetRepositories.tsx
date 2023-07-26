import { useEffect, useState } from "react";
import { IData } from "../types.ts";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useGetRepositories = (
  search: string,
): {
  data: IData | null;
  loading: boolean;
  error: boolean;
} => {
  const apiUrl = `https://api.github.com/search/repositories?q=`;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      setData(null);
      return;
    }

    setLoading(true);
    fetch(apiUrl + debouncedSearch)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [apiUrl, debouncedSearch]);

  return { data, error, loading };
};
