import { combineReducers } from "redux";
import authReducer from "./Auth";
import AssReducer from "./Ass";
import VidReducer from "./Vid";
export default combineReducers({
  authReducer,
  AssReducer,
  VidReducer,
});
