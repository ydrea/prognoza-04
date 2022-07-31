import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/userSlice";
import { resetList } from "../redux/apiSlice";
import Switch from "./Switch";
//
function Logout() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [value, setValue] = useState(false);

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

      <Switch toggle={value} handleToggle={() => setValue(!value)} />
      <p> switch to {value ? "light" : "dark"} mode</p>
    </div>
  );
}

export default Logout;
