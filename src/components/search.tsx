import React from "react";
import { Grid, TextField } from "@mui/material";

interface ISearch {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: React.FC<ISearch> = ({ search, setSearch }) => {
  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearch(e.target.value);
  };
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <TextField
        label="Search field"
        type="search"
        value={search}
        onChange={(e) => handleSearch(e)}
        sx={{ width: "700px" }}
      />
    </Grid>
  );
};
