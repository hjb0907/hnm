import { combineReducers } from "redux";
import authenticateReducer from "./authenticateeReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth : authenticateReducer,
  product : productReducer
});