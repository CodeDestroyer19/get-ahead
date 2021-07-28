import { FETCH_ALL, CREATE, DELETE } from "../constants/actionTypes";

const VidReducer = (VidReducer = [], action) => {
  switch (action.type) {
    case DELETE:
      return VidReducer.filter(vid => vid._id !== action.payload);

    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...VidReducer, action.payload];
    default:
      return VidReducer;
  }
};

export default VidReducer;