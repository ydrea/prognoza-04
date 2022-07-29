import React from "react";
import { useSelector } from "react-redux";
import "./styles/style.css";
// import Favorites from "./comps/Favorites";
// import Form from "./comps/Form";
// import List from "./comps/route/List";

import Router from "./comps/route/Router";

export default function App() {
  const stejt = useSelector((state) => state);
  console.log(stejt);

  return (
    <div className="app">
      <div className="form">
        <Router />
      </div>
    </div>
  );
}
