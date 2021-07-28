import { createStyles } from "@material-ui/core/styles";
import img from "../media/backgrounds/bg.jpg";

const UseStyles = createStyles({
  rootCardHomeLight: {
    // width: "325px",
    height: 460,
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "5px",
    marginRight: "5px",
    boxShadow: "0px 5px 20px black",
    transition: "500ms ease",
    backgroundColor: "white",
  },

  rootCardHomeDark: {
    width: "350px",
    height: 435,
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "5px",
    marginRight: "5px",
    boxShadow: "0px 5px 20px black",
    transition: "500ms ease",
    backgroundColor: "#292929",
    color: "white",
  },

  rootCardLib: {
    marginBottom: "20px",
    backgroundColor: "#000000b2",
    color: "white",
  },

  contentDivCard: {
    height: 265,
  },

  imgCard: {
    height: 390,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
  },

  buttonColorCard: {
    fontSize: "24",
    color: "black",
    width: "100%",
    height: "45px",
    textAlign: "center",
    padding: 0,
    margin: "auto",
    background: "linear-gradient(45deg, #f50057, blue)",
    transition: "500ms in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  textCard: {
    backgroundColor: "#00000080",
    color: "white",
  },

  rootListCard: {
    margin: "20px auto",
    width: "90%",
    boxShadow: "0px 5px 20px black",
    transition: "500ms ease",
    minHeight: "100px",
    maxHeight: "175px",
    color: "black",
  },

  rootListLib: {
    margin: "20px auto",
    width: "90%",
    boxShadow: "0px 5px 20px black",
    transition: "500ms ease",
    minHeight: "90px",
    maxHeight: "175px",
    backgroundColor: "#000000b2",
    color: "white",
  },

  imgList: {
    height: 100,
    backgroundRepeat: "no-repeat",
  },

  buttonColorList: {
    fontSize: "24",
    color: "black",
    width: "100%",
    height: "40px",
    textAlign: "center",
    padding: 0,
    margin: "auto",
  },

  PageMainContainer: {
    width: "90%",
    height: "fit-content",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  PageMainContainerLib: {
    padding: "30px",
    width: "100%",
    height: "92vh",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "5%",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
  },

  MainContainerTextdiv: {
    backgroundColor: "transparent",
    margin: "auto",
    border: "none",
    padding: "10px",
    color: "black",
  },

  navCompBut: {
    height: "64px",
    margin: "0px",
    padding: "0px",
    paddingRight: "15px",
    paddingLeft: "15px",
  },

  navCompBox: {
    margin: "auto",
    width: "70%",
  },

  rootHome: {
    background: "linear-gradient(45deg, red, blue)",
    border: 0,
    color: "white",
    padding: "5px 30px",
    margin: 5,
    borderRadius: "30px",
  },

  line: {
    border: "1px solid #b71c1c",
    alignSelf: "center",
    margin: "25px auto",
    width: "20%",
  },

  lineCardSec: {
    border: "1px solid  #b71c1c",
    alignSelf: "center",
    width: "100%",
    margin: "none",
  },

  lineCardPri: {
    border: "1px solid  #fceb0088",
    alignSelf: "center",
    width: "100%",
    margin: 0,
  },

  HometextH: {
    fontSize: "40px",
    color: "Black",
    textAlign: "center",
    margin: "auto",
  },

  Homecontainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "auto",
  },

  HomesubContainer: {
    minWidth: "calc(400px + 5% )",
    maxWidth: "48%",
    margin: "0px",
    padding: "20px",
    display: "block",
  },

  Navbutt: {
    height: "100%",
    margin: "0px",
    display: "flex",
    float: "right",
  },

  butcontainerNav: {
    display: "flex",
    flexWrap: "nowrap",
  },

  BoxLibStyleList: {
    width: "100%",
    justifyContent: "center",
    height: "fit-content",
  },

  BoxStyleList: {
    margin: "auto",
    width: "100%",
    height: "fit-content",
    padding: "25px",
    justifyContent: "space-evenly",
  },

  BoxStyleListVc: {
    margin: "auto",
    width: "100%",
    height: "fit-content",
    padding: "5px",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },

  boxxy: {
    width: "100%",
  },

  textHead: {
    textAlign: "center",
    width: "100%",
    margin: "auto",
    marginTop: "20px",
    padding: "20px",
    paddingBottom: "0px",
  },

  toolBar: {
    display: "box",
    height: "100%",
    backgroundColor: "light gray",
    float: "right",
    alignContent: "center",
  },

  toolBarInter: {
    width: "90%",
    backgroundColor: " #00000083",
    color: "white",
    margin: "auto",
    padding: "10px",
    borderRadius: "10px",
    position: "relative",
    justifyContent: "center",
  },
  toolBarInterSea: {
    width: "60%",
    backgroundColor: " #transparent",
    color: "white",
    margin: "auto",
    padding: "10px",
    borderRadius: "10px",
    position: "relative",
    justifyContent: "center",
  },
});

export default UseStyles;
