import { combineReducers } from "redux";
import loginReducer from "../Login/LoginReducer";

export default combineReducers({
  user: loginReducer,
});
