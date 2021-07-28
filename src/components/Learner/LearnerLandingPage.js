import React from "react";
import Typography from "@material-ui/core/Typography";
import ImgMediaCard from "../Cards";
import { Box, Button, Grid, Paper, Toolbar, AppBar } from "@material-ui/core";
import Listo from "../List";
import UseStyles from "../../theme/style";
import img from "../../media/cards/sci2.jpg";
import img2 from "../../media/cards/accounting.jpg";
import img3 from "../../media/cards/lang2.jpg";
import SSlider from "../slider";

const url = "http://localhost:3000";

const dataHome = [
  {
    namer: `Sciences`,
    info: `Science (from the Latin word scientia, meaning "knowledge") is a systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions about the universe.`,
    lab: "Go!",
    butt: (
      <Button
        namer={"Sciences"}
        color="primary"
        variant="contained"
        href={`${url}/Sciences`}
      >
        Go!
      </Button>
    ),
    img: img,
  },
  {
    namer: `Commerce`,
    info: `Commerce is the field of study in which students learn topics related to business, financial information, trading of economic values, merchandising and trading.`,
    lab: "Go!",
    butt: (
      <Button
        namer={"Commerce"}
        color="primary"
        variant="contained"
        href={`${url}/Commerce`}
      >
        Go!
      </Button>
    ),
    img: img2,
  },
  {
    namer: `Languages`,
    info: `Language is the specifically human capacity for acquiring and using complex systems of acoustic as well as kinesic signals to express thoughts and feelings, and language is used for the exchange of knowledge and experiences.`,
    lab: "Go!",
    butt: (
      <Button
        namer={"Languages"}
        color="primary"
        variant="contained"
        href={`${url}/Languages`}
      >
        Go!
      </Button>
    ),
    img: img3,
  },
];

const LearnerLandingPage = () => {
  return (
    <>
      <Paper elevation={3} style={{ backgroundColor: "#00000080" }}>
        <SSlider />
      </Paper>
      <div id="main-container" style={UseStyles.PageMainContainer}>
        <Paper
          id="MainContainerTextdiv"
          elevation={3}
          style={UseStyles.textHead}
        >
          <Typography variant="h3">Leaders in African Education!</Typography>
          <hr id="line" style={UseStyles.line}></hr>
        </Paper>

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
            {dataHome.map(i => (
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
          {dataHome.map(l => (
            <Listo
              theme={UseStyles.rootListCard}
              line={UseStyles.lineCardPri}
              name={l.namer}
              info={l.info}
              img={l.img}
              butt={l.butt}
            />
          ))}
        </Box>
      </div>
    </>
  );
};

export default LearnerLandingPage;
