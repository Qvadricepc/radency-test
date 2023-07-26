import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useGetRepositories } from "./hooks/useGetRepositories.tsx";
import { Title } from "./components/title.tsx";
import { Search } from "./components/search.tsx";
import { BasicTabs } from "./components/tabPanel.tsx";

export const App = () => {
  const [search, setSearch] = useState("");
  const { data, loading, error } = useGetRepositories(search);

  if (error) {
    return <Grid>Error</Grid>;
  }
  return (
    <Box>
      <Title />
      <Search search={search} setSearch={setSearch} />
      <BasicTabs data={data?.items} loading={loading} />
    </Box>
  );
};
