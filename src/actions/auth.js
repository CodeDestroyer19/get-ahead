import * as api from "../api";
import { AUTH, UPDATE } from "../constants/actionTypes";

export const signin = (formData, history) => async dispatch => {
  try {
    const { data } = await api.signin(formData);

    dispatch({ type: AUTH, data });

    history.push("/Home");
    window.setTimeout(() => {
      window.location.reload();
    }, 300);
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async dispatch => {
  try {
    const { data } = await api.signup(formData);

    dispatch({ type: AUTH, data });

    history.push("/Home");
    window.setTimeout(() => {
      window.location.reload();
    }, 300);
  } catch (error) {
    console.log(error);
  }
};