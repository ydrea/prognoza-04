import React from "react";
import { useSelector } from "react-redux";
import "./styles/style.css";
import Favorites from "./comps/Favorites";
import Form from "./comps/Form";
import List from "./comps/List";

export default function App() {
  const stejt = useSelector((state) => state);
  console.log(stejt);

  return (
    <div>
      App
      <Form />
      <List />
      <Favorites />
    </div>
  );
}
