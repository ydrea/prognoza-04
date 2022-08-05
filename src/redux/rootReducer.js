import { combineReducers } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";
import userReducer from "../userSlice";
//
const rootReducer = combineReducers({
  reducer: {
    user: userReducer,
    api: apiReducer,
  },
});

export default rootReducer;
