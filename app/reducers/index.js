import { combineReducers } from "redux";
import { example } from "../modules/example/reducer/index.js";

const reducers = combineReducers({
  example
});

export default reducers;
