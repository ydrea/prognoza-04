import React, { useEffect } from "react";
import Slija from "./Slija";
import { useDispatch, useSelector } from "react-redux";
import { deleteIt, toggleFav } from "../redux/apiSlice";

function Detail({ id, ime, fav, icon }) {
  // console.log(city);
  // const temp = useSelector((state) => state.api);
  // console.log(temp);

  const dispatch = useDispatch();

  const handleFavCheck = () => {
    dispatch(
      toggleFav({
        id: id,
        fav: !fav,
      })
    );
  };

  const handleDeleteIt = () => {
    dispatch(deleteIt({ id: id }));
  };

  return (
    <div className="card">
      <span className="command">
        <input type="checkbox" checked={fav} onChange={handleFavCheck} />

        <h1 className="h1">{ime}</h1>
        <button onClick={handleDeleteIt}>X</button>
      </span>

      <ul className="ulist">
        <li>Min:</li>
        <li>{icon}</li>
        <li>Max:</li>
      </ul>
    </div>
  );
}

export default Detail;
