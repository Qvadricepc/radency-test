import { Button, Grid, Typography } from "@mui/material";
import { CustomRating } from "./rating.tsx";
import { IFavoriteItem } from "../../../types.ts";

interface IFavoritesItemComponent {
  item: IFavoriteItem;
  handleDelete: (itemId: number) => void;
  handleRating: (itemId: number, newRating: number) => void;
}

export const FavoritesItem: React.FC<IFavoritesItemComponent> = ({
  item,
  handleDelete,
  handleRating,
}) => {
  return (
    <Grid
      sx={{
        display: "flex",
        gap: "15px",
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
      <CustomRating item={item} handleRating={handleRating} />
      <Button
        variant="contained"
        color="error"
        onClick={() => handleDelete(item.id)}
      >
        Delete
      </Button>
    </Grid>
  );
};
