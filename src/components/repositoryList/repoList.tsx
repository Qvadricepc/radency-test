import React from "react";
import { CircularProgress, Grid } from "@mui/material";
import { Item } from "./components/item.tsx";
import { useLocalStorage } from "../../hooks/useLocalStorage.tsx";
import { keyLocalStorage } from "../../const.ts";
import { FavRepository, Repository } from "../../shared.ts";

export interface IRepoList {
  data: Repository[] | undefined;
  loading: boolean;
}

export const RepoList: React.FC<IRepoList> = ({ data, loading }) => {
  const { data: favorites, setLocalStorageData } =
    useLocalStorage(keyLocalStorage);

  const isItemFavorite = (itemId: number) =>
    favorites.some((item: Repository) => item.id === itemId);

  const handleToggleFavorite = (item: FavRepository) => {
    const itemId = item.id;

    const updatedFavorites = isItemFavorite(itemId)
      ? favorites.filter((favorite: Repository) => favorite.id !== itemId)
      : [...favorites, item];

    setLocalStorageData(updatedFavorites);
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
      {loading ? (
        <CircularProgress />
      ) : (
        data?.map((item) => (
          <Item
            key={item.id}
            item={item}
            onToggle={handleToggleFavorite}
            isFavorite={isItemFavorite(item.id)}
          />
        ))
      )}
    </Grid>
  );
};
