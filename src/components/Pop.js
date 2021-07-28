import React from "react";
import { IconButton } from "@material-ui/core";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";

export default function MenuPopupState({
  logout,
  edit,
  img,
  avatar,
  Subject,
  isMini,
  buts,
  overView,
  no,
  seen
}) {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <IconButton
            style={{ float: "right", width: "32px", height: "32px" }}
            {...bindTrigger(popupState)}
          >
            {user && avatar}
            {img}
            {isMini && Subject}
          </IconButton>

          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box p={1}>
              <Typography Button onClick={no ? null : popupState.close}>
                {logout}
                {edit}
                {overView}
                {buts}
              </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
