import { combineReducers } from "redux";
import auth from "./auth";
import navReducer from "./nav";

const AppReducer = combineReducers({
  nav: navReducer,
  auth
});

export default AppReducer;
