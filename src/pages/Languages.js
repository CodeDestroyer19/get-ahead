import React from "react";
import { Box, CircularProgress, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import UseStyles from "../theme/style";
import Listo from "../components/List";
import ImgMediaCard from "../components/Cards";
import AlertDialogSlide from "../components/PopUpDialogue";
import img from "../media/cards/eng.jpg";
import img2 from "../media/cards/fal.jpg";
import img3 from "../media/cards/af.jpg";
import img4 from "../media/cards/spe.jpg";
import img5 from "../media/cards/zu.jpg";

export default function Languages() {
  document.getElementById("title").innerHTML = "Languages";
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!user) {
    window.history.pushState({}, "", "/");
    window.location.reload();
  }
  const dataLang = [
    {
      namer: `English HL`,
      info: `English Home Language provides pupils with an understanding of, and appreciation for, the literary aspect of the language.`,
      butt: (
        <AlertDialogSlide
          namer={"English HL"}
          color="primary"
          lab="Learn More!"
          urlV={`/V-Class/PreMadeHome`}
          urlN={`/Notes/#`}
        />
      ),
      img: img,
    },
    {
      namer: `English FAL`,
      info: `English First Additional Language focuses on communicative competence involving oral work, creative writing, language and grammar and literature. Learners will explore features of poetry and short stories from various texts.`,
      butt: (
        <AlertDialogSlide
          namer={"English FAL"}
          color="primary"
          lab="Learn More!"
          urlV={`/V-Class/PreMadeHome`}
          urlN={`/Notes/#`}
        />
      ),
      img: img2,
    },
    {
      namer: `Afrikaans FAL`,
      info: `Afrikaans First Additional Language assumes that learners do not necessarily have any knowledge of Afrikaans when they arrive at school.`,
      butt: (
        <AlertDialogSlide
          namer={"Afrikaans FAL"}
          color="primary"
          lab="Learn More!"
          urlV={`/V-Class/PreMadeHome`}
          urlN={`/Notes/#`}
        />
      ),
      img: img3,
    },
    {
      namer: `Sepedi HL`,
      info: `Northern Sotho or Sesotho sa Leboa and more commonly referred to as Pedi or Sepedi - is a Sotho-Tswana language spoken in the northeastern provinces of South Africa.`,
      butt: (
        <AlertDialogSlide
          namer={"Sepedi HL"}
          color="primary"
          lab="Learn More!"
          urlV={`/V-Class/PreMadeHome`}
          urlN={`/Notes/#`}
        />
      ),
      img: img4,
    },
    {
      namer: `IsiZulu HL`,
      info: `Zulu, or isiZulu, is a Southern Bantu language of the Nguni branch spoken in Southern Africa. It is the language of the Zulu people, with about 12 million native speakers, who primarily inhabit the province of KwaZulu-Natal of South Africa.`,
      butt: (
        <AlertDialogSlide
          namer={"IsiZulu HL"}
          color="primary"
          lab="Learn More!"
          urlV={`/V-Class/PreMadeHome`}
          urlN={`/Notes/#`}
        />
      ),
      img: img5,
    },
  ];

  const map = user?.result?.Subjects.map(i => i.label);

  const finaldata = dataLang.filter(i => map.includes(i.namer));

  return user ? (
    <React.Fragment>
      <div id="main-container" style={UseStyles.PageMainContainer}>
        <div id="MainContainerTextdiv" style={UseStyles.textHead}>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Languages
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
