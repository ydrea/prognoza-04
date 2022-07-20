// import React, { useEffect } from "react";
import Slija from "./Slija";
import { useDispatch, useSelector } from "react-redux";
import { deleteIt, toggleFav } from "../redux/apiSlice";
import { useNavigate, Outlet } from "react-router-dom";
function Card({ id, ime, fav, icon, min, max }) {
  const dispatch = useDispatch();

  // const navigate = useNavigate();

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

  const iconurl = `https://openweathermap.org/img/w/${icon}.png`;
  return (
    <div className="card">
      <span className="command">
        <input type="checkbox" checked={fav} onChange={handleFavCheck} />

        <h1 className="h1" link to="detail">
          {ime}
        </h1>
        <button onClick={handleDeleteIt}>X</button>
      </span>

      <ul className="ulist">
        <li>Min: {min}</li>
        <li>{<img src={iconurl} alt={icon} />}</li>
        <li>Max: {max}</li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Card;
