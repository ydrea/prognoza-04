import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="form"> Form</Link>
      <Link to="list"> List</Link>
      <Link to="fav"> Fav</Link>
    </div>
  );
}

export default Nav;
