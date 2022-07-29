import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="weather">List</Link>
      <Link to="weather/:don">Dan</Link>
      <Link to="weather/:dan/:id">List id</Link>
    </div>
  );
}

export default Nav;
