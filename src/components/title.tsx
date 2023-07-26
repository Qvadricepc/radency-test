import { Grid, Typography } from "@mui/material";

export const Title = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <Typography variant="h4">
        Search repository on GitHub for Radency test task
      </Typography>
    </Grid>
  );
};
