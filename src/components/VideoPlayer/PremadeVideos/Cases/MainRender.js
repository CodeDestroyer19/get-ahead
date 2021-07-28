import React, { useState } from "react";
import Subjects from "../../../Teachers/subjects";
import { ArrowBack, PlayArrow, CenterFocusStrong } from "@material-ui/icons";
import {
  Container,
  Grow,
  Toolbar,
  Grid,
  Typography,
  Paper,
  IconButton,
  CircularProgress,
  Box,
  Avatar,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import youtube from "../../../../api/youtube";
import CustomizedBreadcrumbs from "./Crumbs";
import Mobilelist from "./Mobilelist";

const MainRender = props => {
  const { user, usePlay, play, subHead, setSubHead, full, setFull } = props;
  const [videos, setVideos] = useState([]);

  const HandelInquery = async term => {
    const res = await youtube.get("/search", {
      params: { q: `${user?.result?.Grade?.value}+South+Africa+${term}` },
    });

    setVideos(res.data.items);
  };

  return (
    <>
      <Container style={{ padding: "0px", overflow: "hidden" }}>
        <CssBaseline />
        <Toolbar
          style={{
            paddingTop: full === false ? "10px" : "0px",
            paddingBottom: full === false ? "10px" : "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <Grid container>
            {full === false && (
              <>
                <Grid
                  item
                  xs={false}
                  sm={3}
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    display={{ xs: "none", sm: "flex" }}
                    style={{ flexWrap: "wrap" }}
                  >
                    <PlayArrow style={{ width: 50, height: 50 }} />
                    <Typography
                      variant="h5"
                      align="center"
                      style={{
                        height: "fit-content",
                        margin: "auto",
                        marginLeft: "0px",
                      }}
                    >
                      Premade Videos
                    </Typography>
                  </Box>
                </Grid>
                <Box
                  display={{ xs: "flex", sm: "none" }}
                  style={{
                    width: "100%",
                    height: "fit-content",
                    justifyContent: "center",
                  }}
                >
                  <PlayArrow style={{ width: 50, height: 50 }} />
                  <Typography
                    variant="h5"
                    align="center"
                    style={{
                      height: "fit-content",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    Premade Videos
                  </Typography>
                </Box>
              </>
            )}

            {play === true ? (
              <Grid item xs={12} sm={full === false ? 9 : 12}>
                <Paper
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    justifyContent: "space-evenly",
                  }}
                >
                  {full === false && (
                    <IconButton
                      onClick={function A() {
                        usePlay(false);
                        localStorage.removeItem("Vidsub");
                        localStorage.removeItem("VidsubTopic");
                      }}
                    >
                      <ArrowBack />
                    </IconButton>
                  )}
                  <Typography
                    variant="h5"
                    align="center"
                    style={{
                      margin: "auto",
                      width: full === false ? "80%" : "100%",
                    }}
                  >
                    {subHead}
                  </Typography>
                  <IconButton
                    onClick={function A() {
                      setFull(prev => !prev);
                    }}
                  >
                    {full === false ? (
                      <CenterFocusStrong />
                    ) : (
                      <CenterFocusStrong style={{ color: "#009ACD" }} />
                    )}
                  </IconButton>
                </Paper>
              </Grid>
            ) : null}
          </Grid>
        </Toolbar>
        <Grow in>
          <Grid container>
            {play === false ? (
              <Grid item xs={false} sm={3} component="main">
                {user?.result?.Subjects.map(i => (
                  <Box
                    display={{ xs: "none", sm: "flex" }}
                    style={{ flexWrap: "wrap" }}
                  >
                    <Subjects
                      sub={i.label}
                      handel={function A(e) {
                        localStorage.setItem(
                          "Vidsub",
                          JSON.stringify({ sub: i.value })
                        );
                        usePlay(true);
                        setSubHead(i.label);
                        HandelInquery(
                          `${i.value}+${user?.result?.Grade?.label}`
                        );
                      }}
                    />
                  </Box>
                ))}
              </Grid>
            ) : (
              full === false &&
              (!videos.length ? (
                <Grid xs={3} style={{ display: "flex" }}>
                  <Box
                    display={{ xs: "none", sm: "flex" }}
                    style={{
                      flexWrap: "wrap",
                      width: "100%",
                      justifyContent: "center",
                      paddingTop: "30px",
                    }}
                  >
                    <CircularProgress color="secondary" />
                  </Box>
                </Grid>
              ) : (
                <>
                  <Grid item xs={false} sm={3} component="main">
                    <Box
                      display={{ xs: "none", sm: "flex" }}
                      style={{ flexWrap: "wrap", width: "100%" }}
                    >
                      {videos.map(vid => (
                        <Subjects
                          sub={vid.snippet.title}
                          handel={function A(e) {
                            localStorage.setItem(
                              "VidsubTopic",
                              JSON.stringify({
                                sub: vid.snippet.title,
                                id: vid.id.videoId,
                              })
                            );
                            usePlay(true);
                            setSubHead(vid.snippet.title);
                          }}
                        />
                      ))}
                    </Box>
                  </Grid>
                </>
              ))
            )}

            <Grid xs={12} sm={full === false ? 9 : 12}>
              <Paper
                style={{
                  backgroundColor: "transparent",
                  width: "100%",
                }}
              >
                {!localStorage.getItem("Vidsub") ? (
                  <>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Paper
                          style={{
                            padding: "25px",
                            margin: "auto",
                            display: "flex",
                          }}
                        >
                          <Box display={{ xs: "none", sm: "flex" }}>
                            {user &&
                              (user?.result?.Settings?.profilePicture ===
                              null ? (
                                <Avatar
                                  alt={user.result.name}
                                  src={user.result.imageUrl}
                                  style={{ width: "50px", height: "50px" }}
                                >
                                  {user.result.name.charAt(0)}
                                </Avatar>
                              ) : (
                                <Avatar
                                  alt={user.result.name}
                                  src={user.result.Settings?.profilePicture}
                                  style={{ width: "50px", height: "50px" }}
                                ></Avatar>
                              ))}
                          </Box>
                          <Typography
                            variant="h6"
                            style={{ width: "fit-content", margin: "auto" }}
                          >
                            Want to watch a video {user.result.name}?
                          </Typography>
                        </Paper>
                      </Grid>

                      <Box
                        display={{ xs: "flex", sm: "none" }}
                        style={{ width: "100%" }}
                      >
                        <Grid item xs={12} sm={false}>
                          <Paper
                            style={{
                              width: "100%",
                              padding: "15px",
                              margin: "auto",
                              display: "flex",
                              flexWrap: "wrap",
                              overflow: "auto",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <Typography
                              variant="h5"
                              align="center"
                              style={{ width: "100%" }}
                            >
                              Select A subject!
                            </Typography>
                            {user?.result?.Subjects.map(i => (
                              <CustomizedBreadcrumbs
                                sub={i.label}
                                handel={function A(e) {
                                  localStorage.setItem(
                                    "Vidsub",
                                    JSON.stringify({ sub: i.value })
                                  );
                                  usePlay(true);
                                  setSubHead(i.label);
                                  HandelInquery(
                                    `${i.value}+${user?.result?.Grade?.label}`
                                  );
                                }}
                              />
                            ))}
                          </Paper>
                        </Grid>
                      </Box>

                      <Grid item xs={12} sm={6}>
                        <Paper
                          style={{
                            padding: "25px",
                            margin: "auto",
                            display: "flex",
                          }}
                        >
                          <Typography
                            variant="h6"
                            style={{ width: "fit-content", margin: "auto" }}
                          >
                            Something will come here {user.result.name}!
                          </Typography>
                        </Paper>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Paper
                          style={{
                            padding: "25px",
                            margin: "auto",
                            display: "flex",
                          }}
                        >
                          <Typography
                            variant="h6"
                            style={{ width: "fit-content", margin: "auto" }}
                          >
                            Just wait and see {user.result.name}!
                          </Typography>
                        </Paper>
                      </Grid>

                      <Grid item xs={12}>
                        <Paper
                          style={{
                            padding: "25px",
                            margin: "auto",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {!videos.length ? (
                            <CircularProgress color="secondary" />
                          ) : (
                            <>
                              <div
                                style={{
                                  margin: "auto",
                                  display: "flex",
                                  justifyContent: "space-evenly",
                                  flexWrap: "wrap",
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  align="center"
                                  style={{ width: "100%" }}
                                >
                                  Here are some quick suggestions
                                </Typography>
                                <br />
                                {videos.map(vid => (
                                  <Paper style={{ margin: "10px" }}>
                                    <iframe
                                      height="150px"
                                      width="175px"
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowfullscreen="allowfullscreen"
                                      mozallowfullscreen="mozallowfullscreen"
                                      msallowfullscreen="msallowfullscreen"
                                      oallowfullscreen="oallowfullscreen"
                                      webkitallowfullscreen="webkitallowfullscreen"
                                      src={`https://www.youtube.com/embed/${vid.id.videoId} `}
                                      key={vid.snippet.title}
                                      title={vid.snippet.title}
                                    ></iframe>
                                  </Paper>
                                ))}
                              </div>
                            </>
                          )}
                        </Paper>
                      </Grid>
                    </Grid>
                  </>
                ) : localStorage.getItem("VidsubTopic") ? (
                  <Paper>
                    <iframe
                      height={
                        document.body.scrollWidth < 740
                          ? "350px"
                          : full === false
                          ? "500px"
                          : "650px"
                      }
                      width="100%"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen="allowfullscreen"
                      mozallowfullscreen="mozallowfullscreen"
                      msallowfullscreen="msallowfullscreen"
                      oallowfullscreen="oallowfullscreen"
                      webkitallowfullscreen="webkitallowfullscreen"
                      src={`https://www.youtube.com/embed/${
                        JSON.parse(localStorage.getItem("VidsubTopic")).id
                      }`}
                      key={JSON.parse(localStorage.getItem("VidsubTopic")).sub}
                      title={JSON.parse(localStorage.getItem("VidsubTopic")).id}
                    ></iframe>
                  </Paper>
                ) : (
                  localStorage.getItem("Vidsub") && <div>Sup</div>
                )}
              </Paper>
              {localStorage.getItem("Vidsub") && (
                <Box
                  display={{ xs: "flex", sm: "none" }}
                  style={{ flexWrap: "wrap", width: "100%" }}
                >
                  <Grid item xs={12} sm={false} component="main">
                    {videos.map(vid => (
                      <Mobilelist
                        sub={vid.snippet.title}
                        des={vid.snippet.description}
                        thumb={vid.snippet.thumbnails.default.url}
                        handel={function A(e) {
                          localStorage.setItem(
                            "VidsubTopic",
                            JSON.stringify({
                              sub: vid.snippet.title,
                              id: vid.id.videoId,
                            }) 
                          );
                          usePlay(true);
                          setSubHead(vid.snippet.title);
                        }}
                      />
                    ))}
                  </Grid>
                </Box>
              )}
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </>
  );
};

export default MainRender;
