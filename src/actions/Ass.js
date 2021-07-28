import * as api from "../api";
import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/actionTypes";

export const getAssignments = () => async dispatch => {
  try {
    const { data } = await api.fetchAss();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAssignment = Ass => async dispatch => {
  try {
    const { data } = await api.createAss(Ass);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateAssignment = (id, assignment) => async dispatch => {
  try {
    const { data } = await api.updateAss(id, assignment);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAssignment = id => async dispatch => {
  try {
    await api.deleteAssignment(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const grader = (id, grade) => async dispatch => {
  try {
    const { data } = await api.grade(id, grade);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
