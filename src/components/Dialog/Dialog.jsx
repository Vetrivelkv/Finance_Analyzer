import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import PropTypes from "prop-types"; // ES6

const defaultProptypes = {
  dialogStlyles: {
    paperProps: { width: "200px" },
  },
};

const DialogComponent = ({
  title,
  children,
  actions,
  dialogOpen,
  dialogStlyles,
}) => {
  const [open, setOpen] = useState(false);
  const style = {
    ...dialogStlyles,
  };

  useEffect(() => {
    setOpen(dialogOpen);
  }, [dialogOpen]);

  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: style.paperProps,
      }}
      scroll="body"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};

DialogComponent.propTypes = {
  dialogStlyles: PropTypes.object,
};
DialogComponent.defaultProptypes = defaultProptypes;

export default DialogComponent;
