import React from "react";
import {
  Avatar,
  Button,
  Paper,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "../input";

const Personal1 = ({
  formData,
  setFormData,
  showPassword,
  handleShowPassword,
  handleSubmit,
  switchMode,
  isSignUp,
  classes,
  PrevStep,
  NextStep,
}) => {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography variant="h5">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Typography>
          <Grid
            container
            spacing={2}
            style={{
              justifyContent: "space-evenly",
              display: "flex",
              width: "100%",
              justifyItems: "center",
              margin: "auto",
            }}
          >
            <Input
              name="FirstName"
              label="First Name"
              onChange={e =>
                setFormData({
                  ...formData,
                  FirstName: e.target.value,
                })
              }
              autoFocus
              half
            />
            <Input
              name="LastName"
              label="Last Name"
              onChange={e =>
                setFormData({
                  ...formData,
                  LastName: e.target.value,
                })
              }
              half
            />
            <Input
              name="email"
              label="Email Address"
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
            />
            <Input
              name="password"
              label="Password"
              onChange={e =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            <Input
              name="confirmPassword"
              label="Repeat Password"
              onChange={e =>
                setFormData({
                  ...formData,
                  confirmPassword: e.target.value,
                })
              }
              type="password"
            />
            {formData.UserType === "Learner" && (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => {
                  PrevStep();
                  switchMode();
                }}
              >
                Back
              </Button>
            )}
            <Button
              onClick={() => {
                NextStep();
                if (formData.UserType === "Teacher") {
                  switchMode();
                }
              }}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Next
            </Button>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Personal1;
