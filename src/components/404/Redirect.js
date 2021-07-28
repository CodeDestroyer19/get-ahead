import React from "react";
import { Button, ButtonGroup, Grid, Typography, Box } from "@material-ui/core";

const Redirect = () => {
  document.getElementById("title").innerText = "OOPs!";
  const url = "http://localhost:3000";

  const PrevPage = () => [window.history.back()];
  return (
    <>
      <Grid
        container
        spacing={4}
        style={{
          width: "100%",
          marginTop: "140px",
        }}
      >
        <Grid item xs={12} style={{ maxHeight: "fit-content" }}>
          <Typography
            variant="h3"
            color="error"
            style={{ width: "70%", margin: "auto" }}
            align="center"
          >
            404 Error
          </Typography>
        </Grid>

        <Grid item xs={12} style={{ maxHeight: "fit-content" }}>
          <Typography
            variant="body1"
            style={{ width: "70%", margin: "auto" }}
            align="center"
          >
            The page you have indexed does not exist in our database, consider
            the folloing options to arrive back to sivilization!
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box
            display={{ xs: "none", sm: "flex" }}
            style={{ width: "40%", margin: "auto" }}
          >
            <ButtonGroup fullWidth>
              <Button
                color="secondary"
                variant="outlined"
                href={`${url}/Home`}
                style={{ height: "100%" }}
              >
                Home
              </Button>
              <Button color="secondary" variant="outlined" onClick={PrevPage}>
                Previous Page
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            display={{ xs: "flex", sm: "none" }}
            style={{ width: "70%", margin: "auto" }}
          >
            <ButtonGroup fullWidth>
              <Button
                color="secondary"
                variant="outlined"
                href={`${url}/Home`}
                style={{ height: "100%" }}
              >
                Home
              </Button>
              <Button color="secondary" variant="outlined" onClick={PrevPage}>
                Previous Page
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Redirect;
