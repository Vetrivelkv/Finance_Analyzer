import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";

import AppBar from "../../components/AppBar/AppBar";

const Home = () => {
  const [appBarDrawerOpen, setAppBarDrawerOpen] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const zoomLevel = window.innerWidth;
    setZoomLevel(zoomLevel);
  };

  const toggleDrawer = () => {
    setAppBarDrawerOpen(!appBarDrawerOpen);
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setAppBarDrawerOpen(false);
    }
  }, []);

  return (
    <div className="home">
      <AppBar open={appBarDrawerOpen} toggleDrawer={toggleDrawer} />
      <Grid container>
        <Grid
          xs={12}
          sm={12}
          md={1}
          lg={1}
          xl={zoomLevel > 2500 ? 2 : 1}
          item
        ></Grid>
        <Grid
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={zoomLevel > 2500 ? 7 : 7}
          item
        ></Grid>
        <Grid
          xs={1}
          sm={1}
          md={2}
          lg={2}
          xl={zoomLevel > 2500 ? 2 : 2}
          item
        ></Grid>
      </Grid>
    </div>
  );
};

export default Home;
