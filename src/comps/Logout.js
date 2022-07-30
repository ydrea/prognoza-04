import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/userSlice";
import { resetList } from "../redux/apiSlice";
import Toggle from "./Toggle";
function Logout() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [toggle, toggleSet] = useState(false);

  const deleteIt = (e) => {
    e.preventDefault();
    dispatch(resetList());
    dispatch(remove());
  };
  return (
    <div className="logout-container">
      <button disabled={user.pending} onClick={deleteIt}>
        Logout
      </button>
      <span>{user.email} </span>
      <Toggle onChange={(e) => toggleSet(e.target.checked)} />
      <p> switch to {toggle ? "light" : "dark"} mode</p>
    </div>
  );
}

export default Logout;
