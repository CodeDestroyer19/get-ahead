import React from "react";
import { Box } from "@material-ui/core";
import { Typography, CircularProgress, Grid } from "@material-ui/core";
import UseStyles from "../theme/style";
import Listo from "../components/List";
import ImgMediaCard from "../components/Cards";
import AlertDialogSlide from "../components/PopUpDialogue";
import img from "../media/cards/bus.jpg";
import img2 from "../media/cards/eco.jpg";
import img3 from "../media/cards/tour.jpg";
import img4 from "../media/cards/lit.jpg";
import img5 from "../media/cards/his.jpg";
import img6 from "../media/cards/acc.jpg";

export default function Commerce() {
  document.getElementById("title").innerHTML = "Commerce";
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!user) {
    window.history.pushState({}, "", "/");
    window.location.reload();
  }
  const dataCom = [
    {
      namer: "Business Studies",
      info: `Business studies is a broad subject in the social sciences, allowing the in-depth study of a range of specialties such as accountancy, finance, organisation, human resources management and marketing.`,
      butt: (
        <AlertDialogSlide
          namer={"Business Studies"}
          color="primary"
          content="Business Studies"
          contHead="Select your perfered method of study:"
          lab="Learn More!"
        />
      ),
      img: img,
    },
    {
      namer: "Economics",
      info: `Economics is a social science concerned with the production, distribution, and consumption of goods and services. It studies how individuals, businesses, governments, and nations make choices about how to allocate resources.`,
      img: "",
      butt: (
        <AlertDialogSlide
          namer={"Economics"}
          color="primary"
          content="Economics"
          contHead="Select your perfered method of study:"
          lab="Learn More!"
        />
      ),
      img: img2,
    },
    {
      namer: "Tourism",
      info: `Tourism comprises the activities of persons travelling to and staying in places outside their usual environment for not more than one consecutive year (12 months) for leisure, business or other purposes.`,
      butt: (
        <AlertDialogSlide
          namer={"Tourism"}
          color="primary"
          content="Tourism"
          contHead="Select your perfered method of study:"
          lab="Learn More!"
        />
      ),
      img: img3,
    },
    {
      namer: "Math Literacy",
      info: `Math literacy (also known as numeracy) means having the ability to problem-solve, reason and analyze information. Math literacy is the second key step for all students, beyond language literacy. It is the ability to use numbers to help solve real-world problems.`,
      butt: (
        <AlertDialogSlide
          namer={"Math Literacy"}
          color="primary"
          content="Math Literacy"
          contHead="Select your perfered method of study:"
          lab="Learn More!"
        />
      ),
      img: img4,
    },
    {
      namer: "History",
      info: `History (from Greek ἱστορία, historia, meaning "inquiry; knowledge acquired by investigation") is the study of the past. ... Historians seek to understand and represent the past through narratives. They often debate which narrative best explains an event, as well as the significance of different causes and effects.`,
      butt: (
        <AlertDialogSlide
          namer={"History"}
          color="primary"
          content="History"
          contHead="Select your perfered method of study:"
          lab="Learn More!"
        />
      ),
      img: img5,
    },
    {
      namer: "Accounting",
      info: `Accounting is the process of recording financial transactions pertaining to a business. The accounting process includes summarizing, analyzing and reporting these transactions to oversight agencies, regulators and tax collection entities.`,
      butt: (
        <AlertDialogSlide
          namer={"Accounting"}
          color="primary"
          content="Accounting"
          contHead="Select your perfered method of study:"
          lab="Learn More!"
        />
      ),
      img: img6,
    },
  ];

  const map = user?.result?.Subjects.map(i => i.label);

  const finaldata = dataCom.filter( i => map.includes( i.namer ) );
  
  return user ? (
    <React.Fragment>
      <div id="main-container" style={UseStyles.PageMainContainer}>
        <div id="MainContainerTextdiv" style={UseStyles.textHead}>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Commerce
          </Typography>
        </div>

        <hr id="line" style={UseStyles.line}></hr>

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
              theme={UseStyles.rootListLib}
              line={UseStyles.lineCardPri}
              name={l.namer}
              info={l.info}
              img={l.img}
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
