import React, { useState } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Avatar,
  Paper,
  Grow,
} from "@material-ui/core";
import { signup } from "../../actions/auth";
import Subjects from "../Teachers/subjects";

const Settings = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  document.getElementById("title").innerText = "Settings";
  const [head, setHead] = useState("Settings");
  const [settings, setSettings] = useState({
    ...user?.result?.Settings,
  });

  console.log(settings);

  return (
    <Container>
      <AppBar
        position="relative"
        style={{
          borderRadius: "5px",
          backgroundColor: "white",
          marginTop: "10px",
        }}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={3} style={{ display: "flex" }}>
              <Avatar src={user?.result?.Settings?.profilePicture}></Avatar>
              <Typography
                variant="button"
                style={{ width: "90%", height: "fit-content", marign: "auto" }}
              >
                {user?.result?.name}
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography align="left" variant="h5" style={{ width: "100%" }}>
                {head}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Grow in>
        <Grid container style={{ marginTop: "15px" }}>
          <Grid item xs={false} sm={3}>
            <Subjects sub="Profile" />
            <Subjects sub="Theme" />
          </Grid>

          <Grid item xs={12} sm={9}>
            {function A() {
              return <div>Hi</div>;
            }}
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default Settings;
