import { createMuiTheme } from "@material-ui/core";
import { grey, red, yellow } from "@material-ui/core/colors";

const values = {
  xs: 0,
  sm: 740,
  md: 1050,
  lg: 1280,
  xl: 1920,
};

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
      contrastText: grey[900],
    },
    secondary: {
      main: red[900],
      contrastText: grey[900],
    },
  },

  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: key => `@media (min-width:${values[key]}px)`,
  },
});

Theme.props = {
  MuiTooltip: {
    arrow: true,
  },
};

Theme.overrides = {
  MuiButton: {
    root: {
      transition: "500ms ease",
      border: "none",
      outline: "none",
      minWidth: "fit-content",
      minHeight: "30px",
    },
    containedPrimary: {
      "&:hover": {
        transform: "scale(1.05)",
        outline: "none",
      },
    },
  },
  MuiInput: {
    root: {
      background: "tranparent",
      textAlign: "center",
      margin: "5px",
    },
  },
  MuiTooltip: {
    tooltip: {
      backgroundColor: "white",
      color: "black",
      border: "2px solid black",
    },
    arrow: {
      color: "black",
    },
  },
  MuiGrid: {
    GridItem: {
      alignText: "center",
    },
  },

  MuiCard: {
    root: {
      "&:hover": {
        transform: "scale(1.05)",
        outline: "none",
      },
    },
  },

  MuiAccordion: {
    root: {
      display: "block",
      transition: " 250ms cubic-bezier(1, 0, 0, 1)",
      borderBottom: "1px solid #b71c1c",
      "&:hover": {
        outline: "none",
        backgroundColor: "#ebebeb",
      },
      justifyContent: "left",
    },
  },

  MuiAccordionDetails: {
    root: {
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: "white",
      justifyContent: "space-evenly",
      padding: "0px",
      borderBottom: "2px solid #b71c1c",
    },
  },
};

export default Theme;
