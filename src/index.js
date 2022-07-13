import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";

import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
// import { weatherSlice } from "./redux/weatherSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
