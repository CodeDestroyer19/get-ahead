import React from "react";
import { Box, Grid, CircularProgress } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import UseStyles from "../theme/style";
import SimpleAccordion from "../components/Collapse";
import Pp from "../data/notesData";
import FreeSolo from "../components/AutoCompleteNav";
import IconButton from "@material-ui/core/IconButton";
import { Search } from "@material-ui/icons";
import Random from "../components/randomSuggestings";
import back from "../media/Notes/note.png";

export default function Notes(props) {
  document.getElementById("title").innerHTML = "Notes";
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!user) {
    window.history.pushState({}, "", "/");
    window.location.reload();
  }

  return user ? (
    <React.Fragment>
      <header
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "fixed",
        }}
      >
        <div className="App-header" id="header">
          <Box display={{ xs: "flex" }} style={UseStyles.toolBarInterSea}>
            <IconButton
              color={"secondary"}
              style={{ width: "64px", height: "64px", margin: "auto" }}
            >
              <Search />
            </IconButton>
            <FreeSolo style={{ width: "80%" }}></FreeSolo>
          </Box>
        </div>

        <div id="main-container">
          <div id="MainContainerTextdiv">
            <Typography variant="h3" style={{ textAlign: "center" }}>
              Notes
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
                  <SimpleAccordion heading={i.sub} Tab={i.Tab} />
                ))}
              </Grid>

              <Grid item xs={false} sm={4} style={UseStyles.toolBar}>
                <Random />
              </Grid>
            </Grid>
          </Box>
        </div>
      </header>
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
