import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Send } from "@material-ui/icons";
import {
  Container,
  Grid,
  Paper,
  Input,
  Typography,
  IconButton,
} from "@material-ui/core";

const socket = io.connect("http://localhost:5000");

const Room = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [state, setState] = useState({ name: user?.result?.name, message: "" });
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });

  const onMessageSubmit = () => {
    const { name, message } = state;
    socket.emit("message", { name, message });
    setState({ ...state, message: "" });
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <spam>{message}</spam>
        </h3>
      </div>
    ));
  };

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item sm={3}>
          <Paper elevation={2}>
            <Typography>Chat</Typography>
            {renderChat()}
          </Paper>
          <br />

          <Paper style={{ display: "flex", flexWrap: "nowrap" }}>
            <Input
              style={{ width: "95%" }}
              label="Text"
              name="Text"
              placeholder="Text"
              variant="outlined"
              onChange={e => setState({ ...state, message: e.target.value })}
            />
            <IconButton size="medium" onClick={onMessageSubmit}>
              <Send fontSize="small" />
            </IconButton>
          </Paper>
        </Grid>

        <Grid item sm={9}>
          <Paper elevation={2}>
            <Typography>Live Stream</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};


export default Room;