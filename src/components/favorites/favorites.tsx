import { Grid } from "@mui/material";
import { keyLocalStorage } from "../../const.ts";
import { FavoritesItem } from "./components/favoritesItems.tsx";
import { useLocalStorage } from "../../hooks/useLocalStorage.tsx";
import { FavRepository, Repository } from "../../shared.ts";

export const Favorites = () => {
  const { data: list, setLocalStorageData } = useLocalStorage(keyLocalStorage);

  const handleRemoveFromFavorites = (itemId: number) => {
    const updatedList = list.filter((item: Repository) => item.id !== itemId);
    setLocalStorageData(updatedList);
  };

  const handleRating = (itemId: number, newRating: number) => {
    const updatedList = list.map((item: FavRepository) =>
      item.id === itemId ? { ...item, rating: newRating } : item,
    );

    setLocalStorageData(updatedList);
  };

  return (
    <Grid
      sx={{
        display: "flex",
        marginTop: "40px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {list?.map((item: FavRepository) => (
        <FavoritesItem
          key={item.id}
          item={item}
          handleDelete={handleRemoveFromFavorites}
          handleRating={handleRating}
        />
      ))}
    </Grid>
  );
};
