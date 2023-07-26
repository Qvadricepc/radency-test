import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useLocalStorage } from "../hooks/useLocalStorage.tsx";
import { keyLocalStorage } from "../shared.ts";
import { IFavoriteItem } from "../types.ts";

export const CustomRating = ({
  id,
  rating,
}: {
  id: number;
  rating: number;
}) => {
  const [value, setValue] = React.useState<number | null>(rating);
  const { data, setLocalStorageData } = useLocalStorage(keyLocalStorage);
  const handleRatingChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number | null,
  ) => {
    setValue(newValue);
    const updatedData = data.map((item: IFavoriteItem) =>
      item.id === id ? { ...item, rating: newValue } : item,
    );
    console.log(updatedData);
    setLocalStorageData(updatedData);
  };

  return (
    <Box>
      <Rating value={value} onChange={handleRatingChange} />
    </Box>
  );
};
