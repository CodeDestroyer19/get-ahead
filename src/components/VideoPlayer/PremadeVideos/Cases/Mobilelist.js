import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="button" {...props} download />;
}

const Mobilelist = ({ sub, des, handel, thumb }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItemLink onClick={handel}>
        <ListItemAvatar style={{ paddingRight: "10px" }}>
          <Avatar
            src={thumb ? thumb : null}
            variant="square"
            style={{ width: "72px", height: "72px" }}
          ></Avatar>
        </ListItemAvatar>
        <ListItemText primary={sub} secondary={des} />
      </ListItemLink>
    </List>
  );
};

export default Mobilelist;
