import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import moment from "moment";
import {
  DoneAllOutlined,
  MoreVert,
  Delete,
  Edit,
  GradeOutlined,
  Publish,
  DoneOutlined,
} from "@material-ui/icons";
import { TextField, ListItem, Typography, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deleteAssignment, grader, createAssignment } from "../../actions/Ass";
import MenuPopupState from "../Pop";
import { createStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import FileBase from "react-file-base64";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    padding: "2px",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  iconbutImg: {
    width: "54px",
    height: "54px",
  },
  link: {
    width: "100%",
    padding: "0px 10px",
    height: "fit-content",
  },
  rootGrade: {
    flexGrow: 1,
    padding: "5px",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} download />;
}

const ListItemDash = ({
  Issued,
  ass,
  setCurrentId,
  myFunction,
  path,
  dense,
  at,
  grade,
  clear,
  noSubmit,
}) => {
  const [change, setChange] = useState(ass.AssignmentGrade.seen);
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const calc = Math.ceil(
    (ass.AssignmentGrade.grade / ass.AssignmentGrade.outOff) * 100
  );

  const BorderLinearProgress = withStyles(theme =>
    createStyles({
      root: {
        height: 10,
        borderRadius: 5,
        width: "90%",
        margin: "auto",
      },
      colorPrimary: {
        backgroundColor:
          theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
      },
      bar: {
        borderRadius: 5,
        backgroundColor:
          calc === 0
            ? "#eee"
            : calc < 30
            ? "red"
            : calc <= 50
            ? "orange"
            : calc > 60 && "#00FF00",
        margin: "auto",
      },
    })
  )(LinearProgress);

  function CustomizedProgressBars({ grade }) {
    return (
      <div className={classes.rootGrade}>
        <BorderLinearProgress variant="determinate" value={grade} />
      </div>
    );
  }

  const Editor = () => {
    return (
      <Grid container style={{ width: "fit-content" }}>
        <Grid
          item
          xs={12}
          style={{ width: "fit-content", display: "flex", flexWrap: "nowrap" }}
        >
          <ListItem
            button
            edge="end"
            aria-label="delete"
            onClick={() => dispatch(deleteAssignment(ass._id))}
          >
            <Delete />
            <Typography style={{ margin: "auto" }}>Delete</Typography>
          </ListItem>
        </Grid>

        <Grid
          item
          xs={12}
          style={{ width: "fit-content", display: "flex", flexWrap: "nowrap" }}
        >
          {path && (
            <ListItem
              button
              onClick={() => {
                setCurrentId(ass._id);
                myFunction();
              }}
              edge="end"
              aria-label="del"
            >
              <Edit />
              <Typography style={{ margin: "auto" }}>Edit</Typography>
            </ListItem>
          )}
        </Grid>
      </Grid>
    );
  };

  const Grade = ({ upload }) => {
    const [g, setG] = useState({
      grade: ass.AssignmentGrade.grade,
      message: "",
      File: "",
    });

    console.log(g);
    return (
      <Grid container style={{ width: "fit-content" }}>
        <Grid
          item
          xs={12}
          style={{ width: "200px", display: "flex", flexWrap: "wrap" }}
        >
          <Typography
            align="center"
            variant="button"
            style={{ margin: "auto", width: "100%" }}
          >
            {upload ? "Submit assignment" : `Grade ${ass.name}`}
          </Typography>
          &nbsp;
          {!upload && (
            <>
              <TextField
                fullWidth
                type="number"
                color="secondary"
                placeholder="Grade (No percentages)"
                onChange={e => setG({ ...g, grade: e.target.value })}
              />
              &nbsp;
            </>
          )}
          {upload && (
            <>
              <TextField
                fullWidth
                type="text"
                color="secondary"
                placeholder="Message (optional)"
                onChange={e => setG({ ...g, message: e.target.value })}
              />
              &nbsp;
              <FileBase
                type="All"
                id="file"
                multipile={false}
                onDone={({ base64 }) => setG({ ...g, File: base64 })}
              />
              &nbsp;
            </>
          )}
          <div
            style={{
              backgroundColor: "#b71c1c",
              color: "white",
              width: "100%",
              borderRadius: "5px",
            }}
          >
            <ListItem
              color="secondary"
              button
              onClick={e => {
                dispatch(
                  upload
                    ? createAssignment({
                        title: ass.title,
                        Subject: ass.Subject,
                        createdAt: new Date().toISOString(),
                        message: g.message,
                        File: g.File,
                        name: user?.result?.name,
                        UserType: user?.result?.UserType,
                        UserID: user?.result?._id,
                        AssignmentGrade: {
                          outOff: ass.AssignmentGrade.outOff,
                          grade: 0,
                          seen: false,
                        },
                      })
                    : grader(ass._id, {
                        ...ass,
                        AssignmentGrade: {
                          outOff: ass.AssignmentGrade.outOff,
                          grade: g.grade,
                          seen: setChange(prev => !prev),
                        },
                      })
                );
                // setTimeout(() => {
                //   window.location.reload();
                // }, 1000);
              }}
              edge="end"
              aria-label="del"
              style={{ width: "100%" }}
            >
              {upload ? <DoneOutlined /> : <GradeOutlined />}
              &nbsp;
              <Typography style={{ margin: "auto" }}>
                {upload ? "Submit" : "Grade"}
              </Typography>
            </ListItem>
          </div>
        </Grid>
      </Grid>
    );
  };

  return (
    <div className={classes.demo}>
      <List dense={dense} style={{ padding: "0px" }}>
        <ListItemLink href={ass.File} className={classes.link}>
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <ListItemText
                primary={ass.title}
                secondary={dense ? ass.message : null}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="caption">
                {moment(ass.createdAt).fromNow()}
              </Typography>
            </Grid>

            {noSubmit ? null : (
              <Grid item xs={12} sm={4} spacing={2}>
                <Typography variant="caption">
                  {at ? `From: ${ass.name}` : `Submit by: ${ass.SubmitBy}`}
                </Typography>
              </Grid>
            )}

            <Grid item xs={12} sm={4} spacing={2}>
              <Typography variant="caption">
                {`Out off ${ass.AssignmentGrade.outOff}`}
              </Typography>
            </Grid>

            {grade && (
              <Grid item xs={12} sm={10}>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Typography style={{ width: "fit-content" }}>
                    Your Grade: {ass.AssignmentGrade.grade}/
                    {ass.AssignmentGrade.outOff}
                  </Typography>
                  <CustomizedProgressBars grade={calc} />
                  {calc}% &nbsp;&nbsp;
                  <Typography style={{ margin: "auto" }}>
                    {ass.AssignmentGrade.seen === false
                      ? "Yet to be marked"
                      : "Marked"}
                  </Typography>
                </div>
              </Grid>
            )}
          </Grid>

          <ListItemSecondaryAction>
            {user?.result?.UserType === "Teacher" ? (
              Issued ? (
                user?.result?.name === ass?.name && (
                  <MenuPopupState edit={<Editor />} img={<MoreVert />} />
                )
              ) : (
                <MenuPopupState
                  no={true}
                  img={
                    change === false ? (
                      <DoneAllOutlined />
                    ) : (
                      <DoneAllOutlined style={{ color: "#1E90FF" }} />
                    )
                  }
                  edit={<Grade />}
                />
              )
            ) : path && clear ? (
              <MenuPopupState
                no={true}
                img={<Publish />}
                edit={<Grade upload={true} />}
              />
            ) : null}
          </ListItemSecondaryAction>
        </ListItemLink>
      </List>
    </div>
  );
};

export default ListItemDash;
