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

const SignIn = ({
  formData,
  setFormData,
  showPassword,
  handleShowPassword,
  handleSubmit,
  switchMode,
  isSignUp,
  classes,
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
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid
              container
              spacing={2}
              style={{
                justifyContent: "space-evenly",
                display: "flex",
                width: "100%",
                justifyItems: "center",
              }}
            >
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Button
                  onClick={() => {
                    switchMode();
                    NextStep();
                  }}
                >
                  {isSignUp
                    ? "Already have an account? Sign in"
                    : "Don't have an account? Sign up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default SignIn;
