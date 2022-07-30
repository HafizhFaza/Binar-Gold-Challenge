import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import logo from "../../assets/image/logo62.png";

const ResponsNav = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid container>
          <Grid item xs={2} sx={{ marginLeft: "136px" }}>
            <Typography>
              <img src={logo}></img>
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ display: "flex", marginLeft: "auto" }}>
            <Typography>Our Services</Typography>
            <Typography>Why Us</Typography>
            <Typography>Testimonial</Typography>
            <Typography>FAQ</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsNav;
