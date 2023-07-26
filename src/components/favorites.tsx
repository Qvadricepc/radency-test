import { Grid } from "@mui/material";
import { keyLocalStorage } from "../shared.ts";
import { FavoritesItem } from "./favoritesItems.tsx";
import { useLocalStorage } from "../hooks/useLocalStorage.tsx";
import { IFavoriteItem, IItems } from "../types.ts";

export const Favorites = () => {
  const { data: list, setLocalStorageData } = useLocalStorage(keyLocalStorage);

  const handleRemoveFromFavorites = (itemId: number) => {
    const updatedList = list.filter((item: IItems) => item.id !== itemId);
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
          name={item.name}
          id={item.id}
          rating={item.rating}
          handleDelete={handleRemoveFromFavorites}
        />
      ))}
    </Grid>
  );
};
