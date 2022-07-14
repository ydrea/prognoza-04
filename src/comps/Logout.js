import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/userSlice";
import { getEmAsync, resetList } from "../redux/apiSlice";

function Logout() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
    </div>
  );
}

export default Logout;
