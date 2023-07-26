import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { IFavoriteItem } from "../types.ts";

interface IRating {
  item: IFavoriteItem;
  handleRating: (itemId: number, newRating: number) => void;
}

export const CustomRating: React.FC<IRating> = ({ item, handleRating }) => {
  const [value, setValue] = React.useState<number | null>(item.rating);

  const handleRatingChange = (newValue: number | null) => {
    setValue(newValue);
    if (newValue !== null) {
      handleRating(item.id, newValue);
    }
  };

  return (
    <Box>
      <Rating
        value={value}
        onChange={(_e, newValue) => handleRatingChange(newValue)}
      />
    </Box>
  );
};
