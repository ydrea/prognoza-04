import React from "react";
import { useSelector } from "react-redux";
// import "./styles/style.sass";
import Favorites from "./comps/Favorites";
import Form from "./comps/Form";
import List from "./comps/List";
// import Api from "./redux/apiCall";
export default function App() {
  const stejt = useSelector((state) => state);
  console.log(stejt);

  return (
    <div>
      App
      <Form />
      <List />
      {/* <Favorites /> */}
    </div>
  );
}
