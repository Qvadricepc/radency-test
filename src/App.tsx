import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { Title } from "./components/title.tsx";
import { Search } from "./components/search.tsx";
import { BasicTabs } from "./components/tabPanel.tsx";
import { useGetData } from "./hooks/useGetData.tsx";

export const App = () => {
  const [search, setSearch] = useState("");
  const { loading, error, data } = useGetData(search);

  if (error) {
    return <Grid>Error</Grid>;
  }

  return (
    <Box>
      <Title />
      <Search search={search} setSearch={setSearch} />
      <BasicTabs data={data?.search.nodes} loading={loading} />
    </Box>
  );
};
