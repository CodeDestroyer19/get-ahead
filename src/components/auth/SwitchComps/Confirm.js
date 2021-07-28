import React from "react";
import {
  Avatar,
  Button,
  Paper,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
const Confirm = ({
  formData,
  setFormData,
  showPassword,
  handleShowPassword,
  handleSubmit,
  switchMode,
  isSignUp,
  classes,
  NextStep,
  PrevStep,
}) => {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h6">Confirm your credentials</Typography>
          <Avatar
            className={classes.avatar}
            src={formData.Settings.profilePicture}
          ></Avatar>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid
              container
              spacing={2}
              style={{
                width: "100%",
                margin: "auto",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  width: "100%",
                  margin: "auto",
                }}
              >
                You're Almost done!
              </Typography>
              <br />
              <Typography
                variant="button"
                style={{
                  width: "100%",
                  margin: "auto",
                }}
              >
                Name: {formData.FirstName}
              </Typography>
              <Typography
                variant="button"
                style={{
                  width: "100%",
                  margin: "auto",
                }}
              >
                Surname: {formData.LastName}
              </Typography>
              <Typography
                variant="button"
                style={{
                  width: "100%",
                  margin: "auto",
                }}
              >
                Email: {formData.email}
              </Typography>
              <Typography
                variant="button"
                style={{
                  width: "100%",
                  margin: "auto",
                }}
              >
                Your subjects:
              </Typography>
              {formData?.Subjects?.map(i => (
                <Typography
                  variant="caption"
                  style={{ width: "100%", paddingLeft: "25px" }}
                  key={i?.label}
                >
                  {i.label}
                </Typography>
              ))}

              <Typography variant="button">{formData?.Grade?.label}</Typography>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={() => {
                PrevStep();
              }}
            >
              Back
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Confirm;
