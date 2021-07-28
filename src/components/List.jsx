import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function Listo(props) {
  const { line, infoH, img, infoP, theme, name, info, butt } = props;

  return (
    <React.Fragment>
      <Card style={theme} id="List">
        <CardActionArea style={{ padding: "0px" }}>
          <Grid container>
            <Grid item xs={5}>
              <CardMedia
                component="div"
                className=""
                alt={infoH}
                title={infoH}
                style={{
                  backgroundImage: `url(${img})`,
                  height: "100%",
                  maxHeight: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    height: "100%",
                    maxHeight: "125px",
                  }}
                >
                  <div style={{ padding: "5px" }}>{butt}</div>
                </div>
              </CardMedia>
            </Grid>

            <Grid item xs={7}>
              <CardContent style={{ padding: "10px" }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {infoH}
                  {name}
                </Typography>

                <Typography
                  variant="body2"
                  component="p"
                  style={{ overflow: "auto", maxHeight: "90px" }}
                >
                  {infoP}
                  {info}
                </Typography>
              </CardContent>
              <div style={{ width: "100%", margin: "0px" }}>
                <hr style={line}></hr>
              </div>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}
