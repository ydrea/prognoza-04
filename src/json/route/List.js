import React from "react";
import { Outlet } from "react-router-dom";

function List() {
  return (
    <div>
      List
      <ul>
        <li>en</li>
        <li>cvo</li>
        <li>tli</li>
        <Outlet />
      </ul>
    </div>
  );
}

export default List;
