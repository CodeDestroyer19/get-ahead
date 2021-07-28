import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { CssBaseline } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import UseStyles from "../theme/style";

const sty = UseStyles;
const NavComp = () => {
  const state = [
    { lable: "Home", url: "http://localhost:3000/Home" },
    { lable: "Library", url: "http://localhost:3000/Library" },
    { lable: "V-Class", url: "http://localhost:3000/V-Class" },
    { lable: "About", url: "http://localhost:3000/About" },
  ];

  return (
    <React.Fragment>
      <Box
        component="div"
        id="navCompBox"
        style={sty.navCompBox}
        display={{ xs: "none", sm: "flex", md: "flex" }}
      >
        <CssBaseline />
        <Grid container>
          <Grid item sm={3}>
            <Button size="medium">
              <Typography
                bold
                style={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: "calc(12px + 1vmin)",
                }}
              >
                Get Ahead
              </Typography>
            </Button>
          </Grid>

          <Grid item style={sty.butcontainerNav} sm={9}>
            {state.map(i => (
              <Button
                id="navCompBut"
                style={{ height: "100%", color: "white" }}
                href={i.url}
              >
                {i.lable}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default NavComp;
