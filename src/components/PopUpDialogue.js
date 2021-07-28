import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { ButtonGroup, IconButton } from "@material-ui/core";
import UseStyles from "../theme/style";
import { Cancel } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const { color, namer, content, urlV, urlN, contHead, lab } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color={color} onClick={handleClickOpen}>
        {lab}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby={namer}
        aria-describedby={namer}
      >
        <DialogTitle id="alert-dialog-slide-title">
          <div style={{ display: "inline" }}>{`${namer}`}</div>
          <IconButton
            style={{ float: "right", padding: "0px" }}
            onClick={handleClose}
          >
            <Cancel color="secondary" />
          </IconButton>
          <hr style={UseStyles.lineCardSec}></hr>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Select your perfered method of studying:
            <br></br>
            <br></br>
            Premade videos for {namer}?<br></br>
            <b>Or</b>
            <br></br>
            {namer} Notes?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              padding: "15px",
            }}
          >
            <Link to={urlV}>
              <Button
                variant="contained"
                color={color}
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById(namer).click();
                  }, 900);
                }}
              >
                Videos
              </Button>
            </Link>

            <Link to={urlN}>
              <Button variant="contained" color={color}>
                Notes
              </Button>
            </Link>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
