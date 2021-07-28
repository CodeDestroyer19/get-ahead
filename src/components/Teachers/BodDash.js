import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Subjects from "./subjects";
import DashBoardPaper from "./DashBoardPaper";
import {
  Grow,
  Grid,
  Typography,
  Box,
  Paper,
} from "@material-ui/core";

const BodDash = ({
  buts,
  path,
  head,
  setHead,
  allAss,
  setAllAss,
  ass,
  setCurrentId,
  OverviewIssued,
  currentId,
  setOverviewIssued,
  student,
  stud,
  text1,
  text2,
  user,
  Stud,
  setStud,
  at,
}) => {
  window.onbeforeunload = function (e) {
    localStorage.removeItem("sub");
  };

  function myFunction() {
    document.getElementById("postAss").click();
  }

  return (
    <Grow in>
      <Grid container component="main" style={{ paddingTop: "15px" }}>
        <CssBaseline />

        <Grid item xs={false} sm={3} component="main">
          <Box
            display={{ xs: "none", sm: "flex" }}
            style={{ flexWrap: "wrap" }}
          >
            <Subjects
              sub={"OverView"}
              handel={() => {
                setHead("OverView");
                localStorage.removeItem("sub");
                setAllAss(ass.reverse());
                setOverviewIssued(false);
                setStud(student.reverse());
              }}
            />
            {buts}
          </Box>
        </Grid>

        <Grid item xs={12} sm={9}>
          <Paper
            elevation={0}
            style={{
              width: "98%",
              margin: "auto",
              backgroundColor: "transparent",
            }}
          >
            <Typography
              id="headTypo"
              variant="h4"
              align="center"
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                padding: "8px",
                boxShadow: "0px 3px 3px #00000080",
              }}
            >
              {head}
            </Typography>

            <Grid container spacing={2} style={{ marginTop: "6px" }}>
              <Grid item xs={12} sm={stud ? 12 : 6}>
                <DashBoardPaper
                  text={text1}
                  vari="outlined"
                  color="#eee"
                  allAss={allAss}
                  user={user}
                  ass={ass}
                  Issued={true}
                  path={path}
                  dis={true}
                  setCurrentId={setCurrentId}
                  myFunction={myFunction}
                  switcher={true}
                  OverviewIssued={OverviewIssued}
                  stud={stud}
                  clear={true}
                />
              </Grid>

              {user?.result?.UserType === "Teacher" ? (
                <Grid item xs={12} sm={6}>
                  <DashBoardPaper
                    text={
                      student.length
                        ? text2
                        : Stud.length
                        ? text2
                        : "Nothing to see here!"
                    }
                    vari="outlined"
                    dis={true}
                    switcher={!stud ? true : false}
                    color="#eee"
                    user={user}
                    allAss={Stud}
                    stass={student}
                    OverviewIssued={OverviewIssued}
                    setCurrentId={setCurrentId}
                    at={at}
                  />
                </Grid>
              ) : (
                user?.result?.UserType === "Learner" &&
                path && (
                  <>
                    <Grid item xs={12}>
                      {Stud.length ? (
                        <DashBoardPaper
                          text={"Your Assignments"}
                          vari="outlined"
                          dis={true}
                          switcher={!stud ? true : false}
                          color="#eee"
                          user={user}
                          allAss={Stud}
                          stass={student.filter(
                            i => i.UserID === user?.result?._id
                          )}
                          OverviewIssued={OverviewIssued}
                          setCurrentId={setCurrentId}
                          at={at}
                          noSubmit={true}
                          grade={true}
                        />
                      ) : (
                        <DashBoardPaper
                          text={"You haven't posted any Assignments"}
                        />
                      )}
                    </Grid>
                  </>
                )
              )}

              {user?.result?.UserType === "Teacher" && path && (
                <>
                  <Grid item xs={6} sm={8}>
                    <DashBoardPaper
                      text={"Post Assignment"}
                      vari="outlined"
                      color="#eee"
                      post={true}
                      sub={head}
                      currentId={currentId}
                      setCurrentId={setCurrentId}
                    />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <DashBoardPaper
                      text={"Post Notes"}
                      vari="outlined"
                      color="#eee"
                      post={true}
                      currentId={currentId}
                      sub={head}
                      setCurrentId={setCurrentId}
                    />
                  </Grid>
                </>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grow>
  );
};

export default BodDash;
