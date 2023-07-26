import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { IFavoriteItem, IItems } from "../../../types.ts";

interface IItemComponent {
  item: IItems;
  onToggle: (item: IFavoriteItem) => void;
  isFavorite: boolean;
}

export const Item: React.FC<IItemComponent> = ({
  item,
  onToggle,
  isFavorite,
}) => {
  const handleToggleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onToggle({
      id: item.id,
      name: item.name,
      git_url: item.git_url,
      rating: 0,
    });
  };

  return (
    <Grid
      sx={{
        display: "flex",
        gap: "10px",
        marginBottom: "10px",
      }}
    >
      <Typography variant="h6">Repository name:</Typography>
      <Typography
        variant="h6"
        sx={{ color: "blue", width: "300px", textAlign: "center" }}
      >
        {item.name}
      </Typography>
      <Button
        disabled={isFavorite}
        variant="contained"
        onClick={(e) => handleToggleFavorite(e)}
      >
        Add to favorites
      </Button>
    </Grid>
  );
};
