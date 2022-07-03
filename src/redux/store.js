import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    api: apiReducer,
    user: userReducer,
  },
});
