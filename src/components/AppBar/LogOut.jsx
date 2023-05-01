import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiIconButton from "@mui/material/IconButton";
import MuiMenu from "@mui/material/Menu";
import MuiAvatar from "@mui/material/Avatar";
import { Logout } from "@mui/icons-material";
import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import { useHistory } from "react-router-dom";

const IconButton = styled(MuiIconButton)({
  padding: "8px",
});

const Menu = styled(MuiMenu)({
  "& .MuiMenu-list": {
    minWidth: "unset",
  },
});

const Avatar = styled(MuiAvatar)({
  backgroundColor: "#3F51B5",
});

const LogoutDropdown = ({ onLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();

    // Clear Redux store

    // Clear session (if applicable)
    sessionStorage.clear();

    // Navigate to the root URL
    history.push("/");
  };

  return (
    <React.Fragment>
      <IconButton color="inherit" onClick={handleClick}>
        <Avatar>V</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleLogout}>
          <Logout sx={{ mr: 1 }} /> Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

LogoutDropdown.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default LogoutDropdown;
