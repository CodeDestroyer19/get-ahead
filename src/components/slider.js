import Slider from "react-slick";
import React from "react";
import Box from "@material-ui/core/Box";
import { Button, Typography } from "@material-ui/core";

export default function SSlider() {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    fade: "cubic",
  };
  return (
    <Slider {...settings}>
      <div
        id="imgholder"
        style={{
          width: "100vw",
          boxShadow: "0px 10px 0px black",
        }}
      >
        <div
          class="captionleftadivgn"
          style={{ padding: "45px", marginLeft: "5%", marginTop: "10%" }}
        >
          <Typography variant="h4" style={{ color: "white" }}>
            Learn in a subtle way
          </Typography>

          <br></br>

          <Box display={{ xs: "none", sm: "flex" }}>
            <Typography
              variant="h6"
              style={{ color: "white", textShadow: "0px 2px 20px black" }}
            >
              Your talents and abilities will improve over time, but for that
              you have to start
            </Typography>
          </Box>

          <br></br>

          <Button
            href="#sd"
            color="primary"
            style={{ padding: "25px" }}
            variant="contained"
            size="large"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div
        id="imgholder2"
        style={{
          width: "100vw",
        }}
      >
        <div
          class="caption right-adivgn"
          style={{
            padding: "45px",
            marginRight: "5%",
            float: "right",
            textAlign: "right",
            marginTop: "10%",
          }}
        >
          <Typography variant="h4" style={{ color: "white" }}>
            Learn Smart
          </Typography>

          <br></br>

          <Box display={{ xs: "none", sm: "flex" }}>
            <Typography variant="h6" style={{ color: "white" }}>
              The wonderful thing about learning something is that nobody can
              take it from us
            </Typography>
          </Box>

          <br></br>

          <Button
            href="#sd"
            color="primary"
            style={{ padding: "25px" }}
            variant="contained"
            size="large"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div
        id="imgholder3"
        style={{
          width: "100vw",
        }}
      >
        <div
          class="caption left-adivgn"
          style={{
            padding: "45px",
            marginRight: "5%",
            float: "right",
            textAlign: "right",
            marginTop: "10%",
          }}
        >
          <Typography variant="h4" style={{ color: "white" }}>
            Graduate with success
          </Typography>

          <br></br>

          <Box display={{ xs: "none", sm: "flex" }}>
            <Typography variant="h6" style={{ color: "white" }}>
              Books are dangerous. The best ones should be labeled with “This
              could change your life”
            </Typography>
          </Box>

          <br></br>

          <Button
            href="#sd"
            color="primary"
            style={{ padding: "25px" }}
            variant="contained"
            size="large"
          >
            Learn More
          </Button>
        </div>
      </div>
    </Slider>
  );
}
