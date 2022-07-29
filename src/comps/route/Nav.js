import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="form"> Form</Link>
      <Link to="form/list">List</Link>
      <Link to="form/list/:don">Dan</Link>
      <Link to="form/list/:dan/:id">List id</Link>
    </div>
  );
}

export default Nav;
