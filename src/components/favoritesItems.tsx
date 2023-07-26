import { Button, Grid, Typography } from "@mui/material";
import { CustomRating } from "./rating.tsx";

interface IFavoritesItem {
  name: string;
  id: number;
  rating: number;
  handleDelete: (itemId: number) => void;
}

export const FavoritesItem: React.FC<IFavoritesItem> = ({
  name,
  id,
  rating,
  handleDelete,
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
        {name}
      </Typography>
      <CustomRating id={id} rating={rating} />
      <Button
        variant="contained"
        color="error"
        onClick={() => handleDelete(id)}
      >
        Delete
      </Button>
    </Grid>
  );
};
