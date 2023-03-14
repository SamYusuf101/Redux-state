import counterReducer from "./counter";
import userReducer from "./users";

import { combineReducers } from "redux";

const Reducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default Reducers;
