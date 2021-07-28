import React from "react";
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  Paper,
} from "@material-ui/core";
import VClassCards from "../components/VideoPlayer/VClassCards";
import { PersonalVideo } from "@material-ui/icons";
import UseStyles from "../theme/style";
import SimpleAccordion from "../components/Collapse";
import DefinedPlayers from "../components/videoplayer";
import DefinedPlayersMoblie from "../components/videoplayermobile";
import VideoplayerBase from "../components/VideoplayerBase";

export default function VClass() {
  document.getElementById("title").innerHTML = "V-Class";
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!user) {
    window.history.pushState({}, "", "/");
    window.location.reload();
  }

  return user ? (
    <div id="vclass">
      <heading className="App-header" style={{ backgroundColor: "skyblue" }}>
        <Typography
          style={{ width: "100%", margin: "auto" }}
          align="center"
          variant="h3"
        >
          V-Class
        </Typography>
      </heading>

      <Grid
        container
        spacing={4}
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="button" style={{ marginTop: "25px" }}>
            V-Class is where youy get access to all the most daunting topics you
            do not understand in a video form. Start watching videos of topics
            you found difficult in class.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography
            variant="h5"
            style={{
              marginBottom: "25px",
              borderBottom: "2px solid black",
            }}
          >
            Premade videos
          </Typography>
          <VClassCards head="" body="" sbody="" tbody="" links="PreMadeHome" />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Typography
            variant="h5"
            style={{
              marginBottom: "25px",
              borderBottom: "2px solid black",
            }}
          >
            Zoom Clone
          </Typography>
          <VClassCards head="" body="" sbody="" tbody="" links="EduCast" />
        </Grid>
      </Grid>
    </div>
  ) : (
    // <VideoplayerBase />
    //   <React.Fragment>
    //     <header className="App-header" id="header"></header>
    //     <div id="main-container">
    //       <div id="MainContainerTextdiv">
    //         <Typography variant="h3" style={{ textAlign: "center" }}>
    //           V-Class
    //         </Typography>
    //         <hr id="line" style={UseStyles.line}></hr>
    //       </div>

    //       <Box
    //         display={{ xs: "none", sm: "flex" }}
    //         id="container"
    //         style={UseStyles.BoxStyleListVc}
    //       >
    //         {DefinedPlayers.map(i => (
    //           <SimpleAccordion heading={i.name} viddesk={i.player} />
    //         ))}
    //       </Box>

    //       <Box
    //         display={{ xs: "flex", sm: "none" }}
    //         id="container"
    //         style={UseStyles.BoxStyleListVc}
    //       >
    //         {DefinedPlayersMoblie.map(i => (
    //           <SimpleAccordion heading={i.name} vidmob={i.player} />
    //         ))}
    //       </Box>
    //     </div>
    //   </React.Fragment>
    // )
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
