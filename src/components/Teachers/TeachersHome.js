import React from "react";
import { Container } from "@material-ui/core";
import Dashboard from "./dashboard";

const TeachersHome = ({
  setCurrentId,
  currentId,
  user,
  subs,
  usertype,
  local,
  path,
  head,
  setHead,
  OverviewIssued,
  setOverviewIssued,
  overviewSub,
  intersection,
  student,
  allAss,
  setAllAss,
  setStud,
  Stud,
  at,
}) => {
  return (
    <div
      id="back"
      style={{ width: "100%", minHeight: "94vh", paddingBottom: "25px" }}
    >
      <Container
        syles={{
          width: "80%",
          padding: "20px",
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
          at={at}
          text2="Received Assignments"
          text1="Issued Assignments"
        />
      </Container>
    </div>
  );
};
export default TeachersHome;
