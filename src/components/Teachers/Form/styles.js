import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    padding: "10px",
    maxWidth: "430px",
  },
  fileInput: {
    width: "97%",
    margin: "5px 0",
    height: "35px",
  },
  buttonSubmit: {
    marginBottom: 10,
    width: "100%",
  },
}));
