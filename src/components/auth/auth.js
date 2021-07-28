import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { signin, signup } from "../../actions/auth.js";
import SignIn from "./SwitchComps/SignIn";
import Personal1 from "./SwitchComps/Personal1";
import Personal2 from "./SwitchComps/Personal2";
import Confirm from "./SwitchComps/Confirm";

const Auth = () => {
  const classes = useStyles();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    UserType: "Learner",
    Subjects: null,
    Settings: {
      toggle: false,
      theme: false,
      profilePicture: null,
    },
    Notifications: {
      count: 0,
    },
    Grade: null,
  });

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(formData);
  const handleSubmit = e => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleShowPassword = () =>
    setShowPassword(prevShowPassword => !prevShowPassword);

  const switchMode = () => {
    setIsSignUp(prev => !prev);
    setShowPassword(false);
  };

  if (user) {
    history.push("/Home");
  }

  const NextStep = () => {
    setStep(prev => prev + 1);
  };
  const PrevStep = () => {
    setStep(prev => prev - 1);
  };

  switch (step) {
    case 1:
      return (
        <div id='generalSign'>
          <SignIn
            formData={formData}
            setFormData={setFormData}
            showPassword={showPassword}
            handleSubmit={handleSubmit}
            handleShowPassword={handleShowPassword}
            switchMode={switchMode}
            NextStep={NextStep}
            classes={classes}
            isSignUp={isSignUp}
          />
        </div>
      );
    case 2:
      return (
        <Personal1
          formData={formData}
          setFormData={setFormData}
          showPassword={showPassword}
          handleSubmit={handleSubmit}
          handleShowPassword={handleShowPassword}
          switchMode={switchMode}
          NextStep={NextStep}
          classes={classes}
          isSignUp={isSignUp}
          PrevStep={PrevStep}
        />
      );
    case 3:
      return (
        <Personal2
          formData={formData}
          setFormData={setFormData}
          showPassword={showPassword}
          handleSubmit={handleSubmit}
          handleShowPassword={handleShowPassword}
          switchMode={switchMode}
          NextStep={NextStep}
          classes={classes}
          isSignUp={isSignUp}
          PrevStep={PrevStep}
        />
      );
    case 4:
      return (
        <Confirm
          formData={formData}
          setFormData={setFormData}
          showPassword={showPassword}
          handleSubmit={handleSubmit}
          handleShowPassword={handleShowPassword}
          switchMode={switchMode}
          NextStep={NextStep}
          classes={classes}
          isSignUp={isSignUp}
          PrevStep={PrevStep}
        />
      );
    default:
      return null;
  }
};

export default Auth;
