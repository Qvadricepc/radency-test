import { useEffect, useState } from "react";
import { FavRepository } from "../shared.ts";

export const useLocalStorage = (key: string) => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  });

  const setLocalStorageData = (newData: FavRepository) => {
    setData(newData);
    localStorage.setItem(key, JSON.stringify(newData));
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return { data, setLocalStorageData };
};
