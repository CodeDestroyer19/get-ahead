import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default function ImgMediaCard(props) {
  const { line, infoH, img, infoP, theme, name, info, butt } = props;

  return (
    <React.Fragment>
      <Card style={theme} id="Card">
        <CardActionArea>
          <CardMedia
            component="div"
            className=""
            alt={infoH}
            title={infoH}
            style={{ backgroundImage: `url(${img})`, height: 220 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {infoH}
              {name}
            </Typography>

            <Typography
              variant="body2"
              component="p"
              style={{ overflow: "auto", height: "115px" }}
            >
              {infoP}
              {info}
            </Typography>
          </CardContent>

          <hr style={line}></hr>
        </CardActionArea>

        <CardActions>
          <div>{butt}</div>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
