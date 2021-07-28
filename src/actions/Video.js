import * as api from "../api";
import { CREATE, FETCH_ALL, DELETE } from "../constants/actionTypes";

export const getvideos = () => async dispatch => {
  try {
    const { data } = await api.fetchvideo();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createVideo = vid => async dispatch => {
  try {
    const { data } = await api.createVideo(vid);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletevideo = id => async dispatch => {
  try {
    await api.deletevideo(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};