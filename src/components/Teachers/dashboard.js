import React, { useEffect } from "react";
import TopDash from "./TopDash";
import BodDash from "./BodDash";
import Subjects from "./subjects";

const Dashboard = props => {
  const {
    setCurrentId,
    currentId,
    user,
    subs,
    stud,
    path,
    head,
    setHead,
    OverviewIssued,
    setOverviewIssued,
    intersection,
    student,
    allAss,
    setAllAss,
    text1,
    text2,
    setStud,
    Stud,
    at,
    grade,
  } = props;

  return (
    <>
      <TopDash
        user={user}
        subs={subs}
        intersection={intersection}
        student={student}
        setHead={setHead}
        setAllAss={setAllAss}
        setStud={setStud}
        setOverviewIssued={setOverviewIssued}
      />
      <BodDash
        user={user}
        setHead={setHead}
        stud={stud}
        currentId={currentId}
        setCurrentId={setCurrentId}
        setAllAss={setAllAss}
        allAss={allAss}
        Stud={Stud}
        setStud={setStud}
        ass={intersection}
        head={head}
        path={path}
        student={student}
        OverviewIssued={OverviewIssued}
        setOverviewIssued={setOverviewIssued}
        text1={text1}
        text2={text2}
        grade={grade}
        at={at}
        buts={subs?.map(sub => (
          <Subjects
            sub={sub}
            handel={function A(e) {
              localStorage.setItem("sub", JSON.stringify({ sub: sub }));
              setHead(sub);
              setAllAss(
                intersection.filter(subj => subj.Subject === sub).reverse()
              );

              const stu = student.filter(subj => subj.Subject === sub);
              const stuID = stu.filter(i => i.UserID === user?.result?._id);

              setStud(user?.result?.UserType === "Teacher" ? stu : stuID);
              setOverviewIssued(false);
            }}
          />
        ))}
      />
    </>
  );
};

export default Dashboard;

// (function(){"use strict";

// var secondsSpentElement = document.getElementById("seconds-spent");
// var millisecondsSpentElement = document.getElementById("milliseconds-spent");

// requestAnimationFrame(function updateTimeSpent(){
//     var timeNow = performance.now();

//     secondsSpentElement.value = round(timeNow/1000);
//     millisecondsSpentElement.value = round(timeNow);

//     requestAnimationFrame(updateTimeSpent);
// });
// var performance = window.performance, round = Math.round;
// })();
