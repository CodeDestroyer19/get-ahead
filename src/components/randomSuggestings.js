import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import UseStyles from "../theme/style";
import { Typography } from "@material-ui/core";

export default function Random() {
  let items = [
    "hello",
    "bye",
    "someone",
    "dog",
    "boy",
    "man",
    "movie",
    "hsng",
    "you",
    "hate",
    "book",
    "girl",
    "scape",
    "omoi",
    "daisuki",
  ];
  var random = Math.floor(Math.random() * items.length);

  return (
    <React.Fragment>
      <Box display={{ xs: "none", sm: "block" }} style={UseStyles.toolBarInter}>
        <Typography variant="h4" style={{ textAlign: "center", width: "100%" }}>
          Quick Actions
        </Typography>
        <Button variant="contained" color={"primary"}>
          Search
        </Button>
      </Box>
    </React.Fragment>
  );
}
