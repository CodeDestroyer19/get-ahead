import React, { useEffect, useState, useReducer } from "react";
import LearnerHome from "../components/Learner/LearnerHome";
import TeachersHome from "../components/Teachers/TeachersHome";
import Buffer from "../components/Buffer";
import { useDispatch } from "react-redux";
import { getAssignments } from "../actions/Ass";
import { useSelector } from "react-redux";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const subs = user?.result?.Subjects?.map(i => i.label);
  const usertype = user?.result?.UserType;
  const local = JSON.parse(localStorage.getItem("sub"));
  const path = local?.sub;
  const assignments = useSelector(state => state.AssReducer);

  const [head, setHead] = useState("OverView");
  const [OverviewIssued, setOverviewIssued] = useState(true);

  const overviewSub = assignments.filter(ass => ass.Subject);

  const intersection = overviewSub.filter(element =>
    subs.includes(element.Subject)
  );
  const IssuedAss = intersection.filter(e => e.UserType === "Teacher");
  const student = intersection.filter(e => e.UserType === "Learner");

  const [Stud, setStud] = useState([]);
  const [allAss, setAllAss] = useState([]);

  if (!user) {
    window.history.pushState({}, "", "/");
    window.location.reload();
  }
  document.getElementById("title").innerHTML = "Home";

  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAssignments()), [dispatch]);

  return user?.result?.UserType === "Teacher" ? (
    <TeachersHome
      setCurrentId={setCurrentId}
      currentId={currentId}
      user={user}
      subs={subs}
      usertype={usertype}
      local={local}
      path={path}
      head={head}
      setHead={setHead}
      OverviewIssued={OverviewIssued}
      setOverviewIssued={setOverviewIssued}
      overviewSub={overviewSub}
      intersection={IssuedAss}
      Stud={Stud}
      setStud={setStud}
      student={student}
      allAss={allAss}
      setAllAss={setAllAss}
      at={true}
    />
  ) : user?.result?.UserType === "Learner" ? (
    <LearnerHome
      setCurrentId={setCurrentId}
      currentId={currentId}
      user={user}
      subs={subs}
      usertype={usertype}
      local={local}
      path={path}
      head={head}
      setHead={setHead}
      OverviewIssued={OverviewIssued}
      setOverviewIssued={setOverviewIssued}
      overviewSub={overviewSub}
      intersection={IssuedAss}
      Stud={Stud}
      setStud={setStud}
      student={student}
      allAss={allAss}
      setAllAss={setAllAss}
      grade={true}
    />
  ) : (
    <Buffer />
  );
}
