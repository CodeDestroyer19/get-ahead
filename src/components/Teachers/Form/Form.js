import { Button, Paper, Typography, Grid, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createAssignment, updateAssignment } from "../../../actions/Ass";
import { useSelector } from "react-redux";
import moment from "moment";

const Form = ({ currentId, setCurrentId }) => {
  const assignments = useSelector(state =>
    currentId ? state.AssReducer.find(p => p._id === currentId) : null
  );


  const sub = JSON.parse(localStorage.getItem("sub"));
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    File: "",
    SubmitBy: moment(),
    AssignmentGrade: {
      grade: 0,
      outOff: 0,
      seen: false,
    },
  });

  const val = user?.result?.Subjects?.map(i => i.label);
  const finalval = val.filter(element => element === sub?.sub);

  const [render, setRender] = useState(false);

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      File: "",
      SubmitBy: "",
      AssignmentGrade: {
        grade: 0,
        outOff: 0,
        seen: false,
        up: false
      },
    });
  };


  const HandleSubmit = e => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updateAssignment(currentId, {
          ...postData,
          name: user?.result?.name,
          Subject: finalval.toString(),
          UserType: user?.result?.UserType,
          UserID: user?.result?._id,
        })
      );
    } else {
      dispatch(
        createAssignment({
          ...postData,
          Subject: finalval.toString(),
          name: user?.result?.name,
          UserType: user?.result?.UserType,
          UserID: user?.result?._id,
        })
      );
    }
    setTimeout(() => {
      clear();
    }, 600);
  };

  useEffect(() => {
    if (assignments) setPostData(assignments);
  }, [assignments]);

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign in to post Assignments!
        </Typography>
      </Paper>
    );
  }

  return (
    <form
      autoComplete="off"
      noValidate
      className={classes.form}
      onSubmit={HandleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            {currentId ? "Editing" : "Creating"} An Assignment!
          </Typography>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              color="secondary"
              name="title"
              variant="outlined"
              style={{ width: "100%" }}
              label="title"
              value={postData.title}
              onChange={e =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
          </Grid>
          {user?.result?.UserType === "Learner" ? null : (
            <>
              <Grid item xs={12}>
                <Typography>Submit By</Typography>
                <TextField
                  color="secondary"
                  name="SubmitBy"
                  variant="outlined"
                  type="datetime-local"
                  style={{ width: "100%" }}
                  value={postData.SubmitBy}
                  onChange={e =>
                    setPostData({ ...postData, SubmitBy: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>Total for this Assignment?</Typography>
                <TextField
                  color="secondary"
                  name="outOff"
                  variant="outlined"
                  type="number"
                  style={{ width: "100%" }}
                  value={postData.AssignmentGrade.outOff}
                  onChange={e =>
                    setPostData({
                      ...postData,
                      AssignmentGrade: {
                        outOff: e.target.value,
                        grade: 0,
                        seen: false,
                      },
                    })
                  }
                />
              </Grid>
            </>
          )}
          <Grid item xs={12}>
            <TextField
              color="secondary"
              name="message"
              fullwidth
              variant="outlined"
              label="message"
              type="textarea"
              style={{ width: "100%" }}
              value={postData.message}
              onChange={e =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
          </Grid>

          <div className={classes.fileInput}>
            <FileBase
              type="All"
              id="file"
              multipile={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, File: base64 })
              }
            />
          </div>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Button
                className={classes.buttonSubmit}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Button
                className={classes.buttonSubmit}
                variant="contained"
                color="secondary"
                size="large"
                onClick={clear}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
