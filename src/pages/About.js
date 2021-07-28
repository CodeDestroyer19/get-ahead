import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import UseStyles from "../theme/style";
import TextField from "@material-ui/core/TextField";
import { Email, Message } from "@material-ui/icons";

export default function About() {
  document.getElementById("title").innerHTML = "About";
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!user) {
    window.history.pushState({}, "", "/");
    window.location.reload();
  }
  return (
    <React.Fragment>
      <div id="main-container">
        <div id="MainContainerTextdiv" style={UseStyles.MainContainerTextdiv}>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            About
          </Typography>

          <hr id="line" style={UseStyles.line}></hr>
        </div>

        <Grid
          container
          id="container"
          style={{ width: "90%", margin: "auto" }}
          spacing={3}
        >
          <Grid item xs={12} sm={6}>
            <div>
              <h2>Get in Touch</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.
              </p>
              <p>
                Mauris dolor augue, vulputate in pharetra ac, facilisis nec
                libero. Fusce condimentum gravida urna, vitae scelerisque erat
                ornare nec.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consctetur adipiscing elit.
                Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.
              </p>
              <p>
                Mauris dolor augue, vulputate in pharetra ac, facilisis nec
                libero. Fusce condimentum gravida urna, vitae scelerisque erat
                ornare nec.
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div>
              <form>
                <div class="inputfield" style={{ display: "flex" }}>
                  <Email />
                  <TextField type="email" id="email"></TextField>
                  <label for="email">Your Email</label>
                </div>
                <div class="inputfield" style={{ display: "flex" }}>
                  <Message />
                  <TextField
                    id="message"
                    class="materialize-TextField"
                    cols="20"
                    rows="20"
                  ></TextField>
                  <label for="message">Your Message</label>
                </div>
                <div class="inputfield" style={{ display: "flex" }}>
                  <i class="material-icons prefix">date_range</i>
                  <input type="text" id="date" class="datepicker"></input>
                  <label for="date">Choose a date you need me for...</label>
                </div>
                <div class="inputfield">
                  <p>Services required:</p>
                  <p>
                    <label>
                      <input type="checkbox"></input>
                      <span>Male</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input type="checkbox"></input>
                      <span>Female</span>
                    </label>
                  </p>
                </div>
                <div class="input-field center">
                  <button class="btn red">Submit</button>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
