import React from "react";
import { useDispatch } from "react-redux";
import { deleteIt, toggleFav } from "../redux/apiSlice";

export default function Detail({ id, city, fav }) {
  console.log(city);

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
    <li className={`list-item ${fav && "list-item-success"}`}>
      <span>
        <input type="checkbox" checked={fav} onChange={handleFavCheck} />
        {city}
      </span>
      <button onClick={handleDeleteIt}>X</button>
    </li>
  );
}
