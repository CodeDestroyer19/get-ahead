import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  Grid,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { OndemandVideo } from "@material-ui/icons";
import Subjects from "../../Teachers/subjects";
import DisplayItems from "./DisplayItems";
import CreateRoom from "./CreateRoom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getvideos } from "../../../actions/Video";

const EduCast = () => {
  const [head, setHead] = useState("Welcome to EduCast!");
  const [create, setCreate] = useState(false);
  const ActiveVideoSessions = useSelector(state => state.VidReducer);
  const [getVid, setGetVid] = useState(ActiveVideoSessions);
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  var subs = JSON.parse(localStorage.getItem("sub"));
  var finalsub = subs?.sub;
  const [timeout, setTime] = useState(false);
  const [all, setAll] = useState(false);

  window.onbeforeunload = function (e) {
    localStorage.removeItem("sub");
  };

  const All = () => {
    localStorage.removeItem("sub");
  };

  useEffect(() => {
    if (!localStorage.getItem("sub")) {
      setGetVid(ActiveVideoSessions);
    } else {
      setGetVid(ActiveVideoSessions.filter(e => e.Subject === finalsub));
    }
    if (all) return;
  }, [ActiveVideoSessions, finalsub, all]);

  useEffect(() => dispatch(getvideos()), [dispatch]);

  return (
    <div>
      <Container style={{ marginTop: "15px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper style={{ display: "flex" }}>
              <IconButton
                onClick={() => {
                  setAll(prev => !prev);
                  All();
                  setHead("Welcome to EduCast!");
                }}
              >
                <OndemandVideo />
              </IconButton>
              <Typography
                align="center"
                variant="h4"
                style={{ padding: "8px", width: "100%" }}
              >
                {head}
              </Typography>
            </Paper>
          </Grid>

          <Grid item sm={3}>
            {user?.result?.Subjects.map(i => (
              <Subjects
                sub={i.label}
                handel={() => {
                  setHead(i.label);
                  localStorage.setItem("sub", JSON.stringify({ sub: i.label }));
                }}
              />
            ))}
          </Grid>

          <Grid item sm={9}>
            {localStorage.getItem("sub") && (
              <Paper style={{ width: "100%", height: "fit-content" }}>
                <Grid
                  container
                  spcing={2}
                  style={{
                    width: "100%",
                    padding: "5px 20px",
                    borderBottom: "2px solid black",
                  }}
                >
                  <Grid item xs={4}>
                    <Typography
                      style={{ borderRight: "2px solid black", width: "95%" }}
                    >
                      Lesson Name
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      style={{ borderRight: "2px solid black", width: "95%" }}
                    >
                      Discription
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>
                      {user?.result?.UserType === "Teacher"
                        ? "Create room"
                        : "Join room"}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            )}
            {localStorage.getItem("sub") ? (
              user?.result?.UserType === "Teacher" && (
                <CreateRoom user={user} create={create} setCreate={setCreate} />
              )
            ) : (
              <Paper style={{ width: "100%", height: "fit-content" }}>
                <Grid
                  container
                  spcing={2}
                  style={{
                    width: "100%",
                    padding: "5px 20px",
                    borderBottom: "2px solid black",
                  }}
                >
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ width: "100%", height: "fit-content" }}
                  >
                    All active Lessons on the Network!
                  </Typography>
                </Grid>
              </Paper>
            )}

            {!getVid.length
              ? setTimeout(() => {
                  setTime(true);
                }, 3000) && (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {timeout === true ? (
                      <Typography variant="h5" style={{ margin: "auto" }}>
                        Seems like no lessons are active at present!
                      </Typography>
                    ) : (
                      <CircularProgress
                        color="secondary"
                        style={{ margin: "auto" }}
                      />
                    )}
                  </div>
                )
              : getVid.map(e => (
                  <DisplayItems
                    user={user}
                    name={e.Title}
                    dis={e.Description}
                    sub={e.Subject}
                    url={e.URL}
                  />
                ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EduCast;
