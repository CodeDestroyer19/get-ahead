import React, { useState } from "react";
import { CircularProgress, Paper, Typography, Box } from "@material-ui/core";
import ListItemDash from "./List";
import AlertDialogSlide from "./PostPopper";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { updateUser } from "../../actions/auth";
import { useDispatch } from "react-redux";

const IOSSwitch = withStyles(theme => ({
  root: {
    width: 39,
    height: 20,
    padding: 0,
    margin: theme.spacing(1),
    float: "right",
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 19,
    height: 19,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const DashBoardPaper = props => {
  const dispatch = useDispatch();

  const {
    text,
    vari,
    color,
    Issued,
    post,
    dis,
    ass,
    sub,
    allAss,
    setCurrentId,
    currentId,
    myFunction,
    path,
    switcher,
    OverviewIssued,
    stass,
    user,
    stud,
    at,
    grade,
    clear,
    noSubmit,
  } = props;

  const toggle = user?.result?.Settings?.toggle;

  const [dense, setDense] = useState(toggle);

  return (
    <>
      <Paper
        variant={vari}
        elevation={3}
        style={{
          width: "98%",
          margin: "auto",
          backgroundColor: color,
          minHeight: "fit-content",
          maxHeight: "375px",
          overflow: "auto",
          padding: "5px",
        }}
      >
        <Typography variant="h5" align="center" style={{ padding: "10px 5px" }}>
          {text}
          {switcher && (
            <IOSSwitch
              onChange={() => {
                setDense(prev => !prev);
              }}
            />
          )}
        </Typography>

        {dis && (
          <div
            style={{
              justifyContent: "center",
            }}
          >
            {OverviewIssued &&
              ass &&
              (!ass.length ? (
                <CircularProgress />
              ) : (
                ass.map(ass => (
                  <Box key={ass._id}>
                    <ListItemDash
                      ass={ass}
                      Issued={Issued}
                      post={post}
                      setCurrentId={setCurrentId}
                      myFunction={myFunction}
                      path={path}
                      dense={dense}
                      currentId={currentId}
                      stud={stud}
                      at={at}
                      grade={grade}
                      clear={clear}
                    />
                  </Box>
                ))
              ))}

            {OverviewIssued &&
              stass &&
              (!stass.length ? (
                <CircularProgress />
              ) : (
                stass.map(ass => (
                  <Box key={ass._id}>
                    <ListItemDash
                      at={at}
                      ass={ass}
                      Issued={Issued}
                      post={post}
                      setCurrentId={setCurrentId}
                      myFunction={myFunction}
                      path={path}
                      dense={dense}
                      stud={stud}
                      grade={grade}
                      currentId={currentId}
                      clear={clear}
                      noSubmit={noSubmit}
                    />
                  </Box>
                ))
              ))}

            {allAss?.length < 0 ? (
              <CircularProgress color="secondary" style={{ margin: "auto" }} />
            ) : (
              allAss.map(ass => (
                <Box key={ass._id}>
                  <ListItemDash
                    ass={ass}
                    Issued={Issued}
                    post={post}
                    setCurrentId={setCurrentId}
                    myFunction={myFunction}
                    path={path}
                    dense={dense}
                    grade={grade}
                    at={at}
                    currentId={currentId}
                    clear={clear}
                    noSubmit={noSubmit}
                  />
                </Box>
              ))
            )}
          </div>
        )}
        {post && (
          <Paper
            style={{
              display: "flex",
              justifyContent: "center",
              height: "83px",
            }}
          >
            <AlertDialogSlide
              sub={sub}
              setCurrentId={setCurrentId}
              currentId={currentId}
            />
          </Paper>
        )}
      </Paper>
    </>
  );
};

export default DashBoardPaper;
