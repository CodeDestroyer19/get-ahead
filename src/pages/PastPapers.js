import React from "react";
import { Box, Grid, CircularProgress } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import UseStyles from "../theme/style";
import SimpleAccordion from "../components/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { Search } from "@material-ui/icons";
import FreeSolo from "../components/AutoCompleteNav";
import Pp from "../data/pastpapersdata";
import Random from "../components/randomSuggestings";

export default function PastPapers() {
  document.getElementById("title").innerHTML = "Past Papers";
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!user) {
    window.history.pushState( {}, "", "/" );
    window.location.reload();

  }

  return user ? (
    <React.Fragment>
      <header className="App-header" id="header">
        <Box display={{ xs: "flex" }} style={UseStyles.toolBarInterSea}>
          <IconButton
            color={"secondary"}
            style={{ width: "64px", height: "64px", margin: "auto" }}
          >
            <Search />
          </IconButton>
          <FreeSolo style={{ width: "80%" }}></FreeSolo>
        </Box>
      </header>
      <div id="main-container">
        <div id="MainContainerTextdiv">
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Past Papers
          </Typography>
          <hr id="line" style={UseStyles.line}></hr>
        </div>

        <Box display={{ xs: "flex" }} id="container">
          <Grid container style={UseStyles.BoxStyleList}>
            <Grid
              item
              xs={12}
              sm={8}
              style={{ float: "left", margin: "10px auto" }}
            >
              {Pp.map(i => (
                <SimpleAccordion
                  heading={i.sub}
                  body2019={i.body2019}
                  body2018={i.body2018}
                  body2017={i.body2017}
                  body2016={i.body2016}
                  body2015={i.Body2015}
                  body2014={i.body2014}
                  body2013={i.body2013}
                />
              ))}
            </Grid>

            <Grid item xs={false} sm={4} style={UseStyles.toolBar}>
              <Random />
            </Grid>
          </Grid>
        </Box>
      </div>
    </React.Fragment>
  ) : (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        overflow: "none",
      }}
    >
      <CircularProgress
        color="secondary"
        style={{ margin: "auto" }}
        size="3rem"
      />
    </div>
  );
}
