import React from "react";
import ImgMediaCard from "../components/Cards";
import Box from "@material-ui/core/Box";
import Listo from "../components/List";
import { Typography, CircularProgress, Grid } from "@material-ui/core";
import UseStyles from "../theme/style";
import AlertDialogSlide from "../components/PopUpDialogue";
import img from "../media/cards/maths2.jpg";
import img2 from "../media/cards/phy.jpg";
import img3 from "../media/cards/geo.jpg";
import img4 from "../media/cards/CAt.jpg";
import img5 from "../media/cards/ls.jpg";

export default function Sciences() {
  document.getElementById("title").innerHTML = "Sciences";
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!user) {
    window.history.pushState({}, "", "/");
    window.location.reload();
  }
  const data = [
    {
      namer: "Mathematics",
      type: "Sciences",
      info: `Mathematics includes the study of such topics as quantity (number theory), structure (algebra), space (geometry), and change (mathematical analysis).`,
      img: img,
      butt: (
        <AlertDialogSlide
          namer={"Mathematics"}
          color="primary"
          lab="Learn More!"
          urlV={`/V-Class/PreMadeHome`}
          urlN={`/Notes/#`}
        />
      ),
    },
    {
      namer: "Physcial Sciences",
      info: `Physical science is the study of the inorganic world. That is, it does not study living things. (Those are studied in biological, or life, science.) The four main branches of physical science are astronomy, physics, chemistry, and the Earth sciences, which include meteorology and geology.`,
      img: img2,
      butt: (
        <AlertDialogSlide
          namer={"Physcial Sciences"}
          color="primary"
          lab="Learn More!"
          urlV={`/V-Class/PreMadeHome`}
          urlN={`/Notes/#`}
        />
      ),
    },
    {
      namer: "Geography",
      info: `Geography is the study of places and the relationships between people and their environments. Geographers explore both the physical properties of Earth's surface and the human societies spread across it.`,
      img: img3,
      butt: (
        <AlertDialogSlide
          namer={"Geography"}
          color="primary"
          lab="Learn More!"
          urlV={`/V-Class/PreMadeHome`}
          urlN={`/Notes/#`}
        />
      ),
    },
    {
      namer: "CAT",
      info: `Computer Applications Technology, usually referred to as CAT, is a high school subject option for Grade 10 to Grade 12 that teaches students about the various components involved in computer systems, as well as an introduction into how to use computers effectively in every day situations`,
      img: img4,
      butt: (
        <AlertDialogSlide
          namer={"CAT"}
          color="primary"
          lab="Learn More!"
          urlV={`/V-Class/PreMadeHome`}
          urlN={`/Notes/#`}
        />
      ),
    },
    {
      namer: "Life Sciences",
      info: `Life science is the study of life and living things. Living things are also called organisms. Life science is often referred to as biology.`,
      img: img5,
      butt: (
        <AlertDialogSlide
          namer={"Life Sciences"}
          color="primary"
          lab="Learn More!"
          urlV={`/V-Class/PreMadeHome`}
          urlN={`/Notes/#`}
        />
      ),
    },
  ];

  const map = user?.result?.Subjects.map(i => i.label);

  const finaldata = data.filter(i => map.includes(i.namer));

  return user ? (
    <React.Fragment>
      <div id="main-container" style={UseStyles.PageMainContainer}>
        <div id="MainContainerTextdiv" style={UseStyles.textHead}>
          <Typography variant="h3">Sciences</Typography>
        </div>
        <hr style={UseStyles.line}></hr>
        <Box
          display={{ xs: "none", sm: "flex" }}
          style={UseStyles.boxxy}
          id="Homecontainer"
        >
          <Grid
            container
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {finaldata.map(i => (
              <Grid item sm={3} style={{ minWidth: "325px" }}>
                <ImgMediaCard
                  theme={UseStyles.rootCardHomeLight}
                  line={UseStyles.lineCardPri}
                  name={i.namer}
                  info={i.info}
                  img={i.img}
                  butt={i.butt}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          display={{ xs: "inline", sm: "none" }}
          style={UseStyles.BoxLibStyleList}
        >
          {finaldata.map(l => (
            <Listo
              color="primary"
              theme={UseStyles.rootListLib}
              line={UseStyles.lineCardPri}
              name={l.namer}
              info={l.info}
              img={l.img}
              lab={l.lab}
              butt={l.butt}
            />
          ))}
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
