import React from "react";
import { Paper, Grid, Typography, Button } from "@material-ui/core";

const DisplayItems = ({ url, name, dis, sub }) => {
  return (
    <Paper style={{ width: "100%", height: "fit-content", margin: "15px 0px" }}>
      <Grid
        container
        spcing={2}
        style={{
          width: "100%",
          padding: "5px 10px",
        }}
      >
        <Grid item xs={4}>
          <Typography variant="inherit">{name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{dis}</Typography>
          {!localStorage.getItem("sub") && (
            <>
              <br />
              <Typography variant="caption">{sub}</Typography>
            </>
          )}
        </Grid>
        <Grid item xs={2} style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{ margin: "auto" }}
            size="small"
            color="secondary"
            variant="contained"
            onClick={() => {
              localStorage.setItem(
                "videoCall",
                JSON.stringify({
                  SessionName: name,
                  SessionCreator: "no",
                })
              );
              window.history.pushState({}, "", url);
              setTimeout(() => {
                window.location.reload();
              }, 500);
            }}
          >
            Join
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DisplayItems;
