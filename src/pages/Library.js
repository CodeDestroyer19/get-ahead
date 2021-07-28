import React from "react";
import Typography from "@material-ui/core/Typography";
import ImgMediaCard from "../components/Cards";
import { Box, Button, CircularProgress, Grid } from "@material-ui/core";
import Listo from "../components/List";
import UseStyles from "../theme/style";

export default function Library(props) {
  document.getElementById("title").innerHTML = "Library";
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!user) {
    window.history.pushState({}, "", "/");
    window.location.reload();
  }

  const data = [
    {
      infoP:
        "past paper archive which will help you excel in all your subjects",
      infoH: "Past Papers",
      butt: (
        <Button
          variant="contained"
          style={{ height: "fit-content" }}
          color="primary"
          href="http://localhost:3000/PastPapers"
        >
          Past Papers!
        </Button>
      ),
    },
    {
      infoP: "The best notes which will help you excel in all your subjects",
      infoH: "Notes",
      butt: (
        <Button
          variant="contained"
          color="primary"
          href="http://localhost:3000/Notes"
        >
          Notes time!
        </Button>
      ),
    },
  ];
  return user ? (
    <React.Fragment>
      <div id="main-container" style={UseStyles.PageMainContainerLib}>
        <Grid container style={{ width: "100%" }}>
          <Typography
            variant="h2"
            style={{
              width: "100%",
              fontSize: "calc(1.5rem + 2.25vmin)",
              color: "white",
              marginLeft: "20px",
              height: "fit-content",
            }}
          >
            Library
            <hr style={{ margin: 0, width: "20%" }}></hr>
          </Typography>
          <Box
            display={{ xs: "none", sm: "flex" }}
          >
            {data.map(i => (
              <Grid item sm={6} style={{ maxHeight: "125px" }}>
                <ImgMediaCard
                  infoH={i.infoH}
                  theme={UseStyles.rootCardLib}
                  infoP={i.infoP}
                  line={UseStyles.lineCardSec}
                  butt={i.butt}
                  butTheme={UseStyles.buttonColorCard}
                />
              </Grid>
            ))}
          </Box>

          <Box
            display={{ xs: "inline", sm: "none" }}
            style={UseStyles.BoxLibStyleList}
          >
            <Grid item sm={6}>
              {data.map(i => (
                <Listo
                  infoH={i.infoH}
                  infoP={i.infoP}
                  theme={UseStyles.rootListLib}
                  line={UseStyles.lineCardPri}
                  butt={i.butt}
                  butTheme={UseStyles.buttonColorList}
                />
              ))}
            </Grid>
          </Box>
        </Grid>
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
