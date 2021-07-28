import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 255,
    minHeight: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function VClassCards({
  isButton,
  head,
  body,
  sbody,
  tbody,
  links,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <List>
        <Link to={`/V-Class/${links}`}>
          <ListItem button className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {head}
              </Typography>
              <Typography variant="h5" component="h2">
                {body}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {sbody}
              </Typography>
              <Typography variant="body2" component="p">
                {tbody}
                <br />
              </Typography>
            </CardContent>
          </ListItem>
        </Link>
      </List>
      {isButton && (
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      )}
    </Card>
  );
}
