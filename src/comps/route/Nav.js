import React from "react";
import { Link } from "react-router-dom";
//
function Nav() {
  return (
    <div className="nav">
      <Link to="/"> Form</Link>
      <Link to="weather">List</Link>
      <Link to="weather/:ime">Ime</Link>
      <Link to="weather/:ime/:dat">Dat</Link>
    </div>
  );
}

export default Nav;
