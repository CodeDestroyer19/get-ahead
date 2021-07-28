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
import Select from "react-select";
import makeAnimated from "react-select/animated";
import FileBase from "react-file-base64";

const animatedComponents = makeAnimated();

const options = [
  { value: "Mathematics", label: "Mathematics" },
  { value: "Mathematics Literacy", label: "Maths Literacy" },
  { value: "Life Sciences", label: "Life Sciences" },
  { value: "Physcial Sciences", label: "Physcial Sciences" },
  { value: "Tourism", label: "Tourism" },
  { value: "Computer Applications Technology", label: "CAT" },
  { value: "Afrikaans First Additional Language", label: "Afrikaans FAL" },
  { value: "Economics", label: "Economics" },
  { value: "Business Studies", label: "Business Studies" },
  { value: "Accounting", label: "Accounting" },
  { value: "Geography", label: "Geography" },
  { value: "English Home Language", label: "English HL" },
  { value: "English First Additional Language", label: "English FAL" },
  { value: "Spedi Home Language", label: "Spedi HL" },
  { value: "IsiZulu Home Language", label: "IsiZulu" },
  { value: "History", label: "History" },
  { value: "Life Orientation", label: "L.O" },
];

const grades = [
  { value: "12", label: "Grade 12" },
  { value: "11", label: "Grade 11" },
  { value: "10", label: "Grade 10" },
];

function AnimatedMulti({ onChange, p, opt, isMulti }) {
  const selectStyles = {
    menu: base => ({
      ...base,
      zIndex: 100,
    }),
    placeholder: base => ({
      fontSize: 16,
      margin: "auto",
      color: "#00000080",
      fontWeight: "light",
      height: 45,
    }),
    input: base => ({
      height: 23,
    }),
  };
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      options={opt}
      isMulti={isMulti}
      placeholder={p}
      onChange={onChange}
      styles={selectStyles}
    />
  );
}

const Personal2 = ({
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
  const Set = formData.Settings;
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
            <Grid
              item
              xs={12}
              style={{
                padding: "10px",
                width: "97%",
                margin: "auto",
              }}
            >
              <AnimatedMulti
                opt={options}
                p="Select your Subjects"
                isMulti
                onChange={e => setFormData({ ...formData, Subjects: e })}
              />
            </Grid>
            {formData.UserType === "Learner" && (
              <Grid
                item
                xs={12}
                style={{
                  padding: "10px",
                  width: "97%",
                  margin: "auto",
                }}
              >
                <AnimatedMulti
                  opt={grades}
                  p="Select your Grade"
                  onChange={e => setFormData({ ...formData, Grade: e })}
                />
              </Grid>
            )}
            <Grid
              item
              xs={2}
              style={{
                padding: "10px",
                width: "97%",
                margin: "auto",
              }}
            >
              <Avatar
                className={classes.avatar}
                src={formData.Settings.profilePicture}
              ></Avatar>
            </Grid>
            <Grid
              item
              xs={10}
              style={{
                padding: "10px",
                width: "97%",
                margin: "auto",
              }}
            >
              <div className={classes.fileInput}>
                <FileBase
                  type="All"
                  id="file"
                  multipile={false}
                  onDone={({ base64 }) =>
                    setFormData({
                      ...formData,
                      Settings: {
                        ...Set,
                        profilePicture: base64,
                      },
                    })
                  }
                />
              </div>
            </Grid>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                PrevStep();
              }}
            >
              Back
            </Button>
            <Button
              onClick={NextStep}
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

export default Personal2;
