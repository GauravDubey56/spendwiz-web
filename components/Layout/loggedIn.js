import { Grid, Box } from "@mui/material";
import Header from "./header";
const MainLayout = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Grid item xs={12}>
        {/* <Box sx={{ bgcolor: "background.paper", p: 2 }}> */}
        <Header />
        {/* </Box> */}
      </Grid>

      {/* Sidebar */}
      {/* 
      <Grid item md={3} xs={12}>
        <Box sx={{ bgcolor: "background.paper", p: 2 }}>

        /Box>
      </Grid> 
      */}
      {/* <Grid container spacing={2}> */}
        {/* Main content */}
        <Grid item md={9} xs={12}>
          <Box sx={{ bgcolor: "background.paper", p: 2 }}>{props.children}</Box>
        </Grid>
      {/* </Grid> */}
    </Box>
  );
};

export default MainLayout;
