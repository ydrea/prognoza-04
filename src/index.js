import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
//
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") || document.createElement("div")
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
