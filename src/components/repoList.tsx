import React from "react";
import { CircularProgress, Grid } from "@mui/material";
import { Item } from "./item.tsx";
import { useLocalStorage } from "../hooks/useLocalStorage.tsx";
import { keyLocalStorage } from "../shared.ts";
import { IFavoriteItem, IItems } from "../types.ts";

export interface IRepoList {
  data: IItems[] | undefined;
  loading: boolean;
}

export const RepoList: React.FC<IRepoList> = ({ data, loading }) => {
  const { data: favorites, setLocalStorageData } =
    useLocalStorage(keyLocalStorage);

  const isItemFavorite = (itemId: number) =>
    favorites.some((item: IItems) => item.id === itemId);

  const handleToggleFavorite = (item: IFavoriteItem) => {
    const itemId = item.id;

    const updatedFavorites = isItemFavorite(itemId)
      ? favorites.filter((favorite: IItems) => favorite.id !== itemId)
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
