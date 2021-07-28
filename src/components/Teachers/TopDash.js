import React from "react";
import {
  Grid,
  Typography,
  Box,
  Toolbar,
  AppBar,
  IconButton,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Subject } from "@material-ui/icons";
import MenuPopupState from "../Pop";
import Subjects from "./subjects";

const TopDash = ({
  user,
  subs,
  intersection,
  student,
  setHead,
  setAllAss,
  setStud,
  setOverviewIssued,
}) => {
  return (
    <AppBar position="static">
      <Toolbar style={{ color: "black" }}>
        <Grid container component="main">
          <CssBaseline />
          <Grid item xs={3} component="main">
            <Box
              display={{ xs: "none", sm: "flex" }}
              style={{ borderRight: "2px solid black" }}
            >
              <Typography align="center" variant="h5">
                Subjects
              </Typography>
            </Box>

            <Box
              display={{ xs: "flex", sm: "none" }}
              style={{
                borderRight: "2px solid black",
                justifyContent: "center",
              }}
            >
              <MenuPopupState
                Subject={<Subject style={{ color: "black" }} />}
                isMini={true}
                overView={
                  <Subjects
                    sub={"OverView"}
                    handel={() => {
                      setHead("OverView");
                      localStorage.removeItem("sub");
                      setAllAss(intersection.reverse());
                      setOverviewIssued(false);
                      setStud(student.reverse());
                    }}
                  />
                }
                buts={subs?.map(sub => (
                  <Subjects
                    sub={sub}
                    handel={function A(e) {
                      localStorage.setItem("sub", JSON.stringify({ sub: sub }));
                      setHead(sub);
                      setAllAss(
                        intersection
                          .filter(subj => subj.Subject === sub)
                          .reverse()
                      );

                      const stu = student.filter(subj => subj.Subject === sub);
                      const stuID = stu.filter(
                        i => i.UserID === user?.result?._id
                      );

                      setStud(
                        user?.result?.UserType === "Teacher" ? stu : stuID
                      );
                      setOverviewIssued(false);
                    }}
                  />
                ))}
              />
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h5" style={{ width: "90%", margin: "auto" }}>
              Hi {user?.result?.name}!
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopDash;
