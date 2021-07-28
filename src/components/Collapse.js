import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "2px auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

  Accordion: {
    borderBottom: "1px solid #b71c1c",
    minWidth: "100%",
  },
}));

export default function SimpleAccordion(props) {
  const {
    heading,
    body,
    body2019,
    body2018,
    body2017,
    body2016,
    body2015,
    body2014,
    body2013,
    Tab,
    viddesk,
    vidmob,
    style
  } = props;
  const classes = useStyles();

  return (
    <Accordion className={classes.Accordion} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{heading}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <div style={style}>
        {body}
        </div>
        {body2019}
        {body2018}
        {body2017}
        {body2016}
        {body2015}
        {body2014}
        {body2013}
        {Tab}

        <Box style={{ width: "100%" }} id="delorian">
          {viddesk}
        </Box>

        <Box style={{ width: "100%" }} id="delorian">
          {vidmob}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
