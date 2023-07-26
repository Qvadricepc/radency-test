import { Grid } from "@mui/material";
import { keyLocalStorage } from "../../shared.ts";
import { FavoritesItem } from "./components/favoritesItems.tsx";
import { useLocalStorage } from "../../hooks/useLocalStorage.tsx";
import { IFavoriteItem, IItems } from "../../types.ts";

export const Favorites = () => {
  const { data: list, setLocalStorageData } = useLocalStorage(keyLocalStorage);

  const handleRemoveFromFavorites = (itemId: number) => {
    const updatedList = list.filter((item: IItems) => item.id !== itemId);
    setLocalStorageData(updatedList);
  };

  const handleRating = (itemId: number, newRating: number) => {
    const updatedList = list.map((item: IFavoriteItem) =>
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
      {list?.map((item: IFavoriteItem) => (
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
