import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { IRepoList, RepoList } from "./repositoryList/repoList.tsx";
import { Favorites } from "./favorites/favorites.tsx";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const BasicTabs: React.FC<IRepoList> = ({ data, loading }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "900px" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={(_e, newValue) => handleChange(newValue)}
            aria-label="basic tabs example"
          >
            <Tab label="Search List" {...a11yProps(0)} />
            <Tab label="Favorites List" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <RepoList data={data} loading={loading}></RepoList>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Favorites />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};
