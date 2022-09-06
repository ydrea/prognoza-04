import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  return (
    <div>
      <input type="search" />
      <button type="submit" onClick={() => navigate("/weather")}>
        List
      </button>
      <nav className="nav">
        <Link to="/weather">list</Link>
        <Link to="/fav">fav</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Form;
