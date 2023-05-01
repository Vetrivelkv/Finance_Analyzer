import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Logout from "./LogOut";

const drawerWidth = 240;

const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBar = () => {
  return (
    <AppBarStyled
      position="sticky"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: "#9BBBE7",
        color: "black",
      }}
    >
      <Toolbar>
        <Typography sx={{ fontSize: "1rem" }} noWrap component="div">
          Finance Analyzer
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Logout />
      </Toolbar>
    </AppBarStyled>
  );
};

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

AppBar.defaultProps = {
  open: false,
  toggleDrawer: () => {},
};

export default AppBar;
