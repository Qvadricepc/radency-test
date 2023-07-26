import { useEffect, useState } from "react";
import { IFavoriteItem } from "../types.ts";

export const useLocalStorage = (key: string) => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  });

  const setLocalStorageData = (newData: IFavoriteItem) => {
    setData(newData);
    localStorage.setItem(key, JSON.stringify(newData));
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return { data, setLocalStorageData };
};
