import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  return (
    <div>
      <input type="search" />
      <button type="submit" onClick={() => navigate("/conform")}>
        Conform
      </button>
      <nav>
        <Link to="list">listA</Link>
        <Link to="fav">favA</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Form;
