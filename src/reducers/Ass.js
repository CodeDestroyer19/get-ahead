import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

const AssReducer = (AssReducer = [], action) => {
  switch (action.type) {
    case DELETE:
      return AssReducer.filter(ass => ass._id !== action.payload);

    case UPDATE:
      return AssReducer.map(ass =>
        ass._id === action.payload._id ? action.payload : ass
      );

    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...AssReducer, action.payload];

    default:
      return AssReducer;
  }
};

export default AssReducer;
