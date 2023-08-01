import React from "react";
import { Button, Grid, Link, Typography } from "@mui/material";
import { FavRepository, Repository } from "../../../shared.ts";

interface IItemComponent {
  item: Repository;
  onToggle: (item: FavRepository) => void;
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
      url: item.url,
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
      <Link href={item.url} target="blank">
        <Typography
          variant="h6"
          sx={{ color: "blue", width: "300px", textAlign: "center" }}
        >
          {item.name}
        </Typography>
      </Link>
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
