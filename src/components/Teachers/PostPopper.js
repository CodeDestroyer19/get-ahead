import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { IconButton } from "@material-ui/core";
import UseStyles from "../../theme/style";
import { Cancel } from "@material-ui/icons";
import { AddCircle } from "@material-ui/icons";
import Form from "./Form/Form";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const { color, sub, setCurrentId, currentId } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ backgroundColor: "transparent" }}>
      <IconButton
        id="postAss"
        color={color}
        onClick={handleClickOpen}
        style={{ width: "54px", height: "54px" }}
      >
        <AddCircle style={{ width: "32px", height: "32px" }} />
      </IconButton>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby={sub}
        aria-describedby={sub}
        style={{ backgroundColor: "transparent" }}
      >
        <DialogTitle id="alert-dialog-slide-title">
          <div style={{ display: "inline" }}>{`${sub}`}</div>
          <IconButton
            style={{ float: "right", padding: "0px" }}
            onClick={handleClose}
          >
            <Cancel color="secondary" />
          </IconButton>
          <hr style={UseStyles.lineCardSec}></hr>
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "transparent" }}>
          <DialogContentText id="alert-dialog-slide-description">
            <Form setCurrentId={setCurrentId} currentId={currentId} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
