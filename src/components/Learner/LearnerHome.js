import React from "react";
import LearnerLandingPage from "./LearnerLandingPage";
import { Container } from "@material-ui/core";
import Dashboard from "../Teachers/dashboard";

const url = "http://localhost:3000";

const LearnerHome = ({
  setCurrentId,
  currentId,
  user,
  subs,
  usertype,
  local,
  path,
  assignments,
  head,
  setHead,
  OverviewIssued,
  setOverviewIssued,
  overviewSub,
  intersection,
  student,
  allAss,
  setAllAss,
  Stud,
  setStud,
}) => {
  const dash = JSON.parse(localStorage.getItem("Dash"));
  return (
    <div id="leanerHome">
      {!dash ? (
        <LearnerLandingPage />
      ) : (
        <Container
          syles={{
            width: "100%",
            marginTop: "30px",
            maxHeight: "92vh",
            color: "white",
          }}
        >
          <br></br>
          <Dashboard
            setCurrentId={setCurrentId}
            currentId={currentId}
            user={user}
            subs={subs}
            usertype={usertype}
            local={local}
            setStud={setStud}
            Stud={Stud}
            path={path}
            head={head}
            setHead={setHead}
            OverviewIssued={OverviewIssued}
            setOverviewIssued={setOverviewIssued}
            overviewSub={overviewSub}
            intersection={intersection}
            student={student}
            allAss={allAss}
            setAllAss={setAllAss}
            stud={true}
            text1="Assignments"
            text2="Send Assignment"
          />
        </Container>
      )}
    </div>
  );
};

export default LearnerHome;
