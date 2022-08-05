// import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";
import userReducer from "./userSlice";

//
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from "../features/users/userSlice";
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  user: userReducer,
  api: apiReducer,
});
export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
//
export default configureStore({
  reducer: {
    api: apiReducer,
    user: userReducer,
  },
});
