import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { deleteIt, toggleFav } from "../redux/apiSlice";

function Detail({ id, city, fav }) {
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
    <div className="card">
      <span className="command">
        <input type="checkbox" checked={fav} onChange={handleFavCheck} />

        <h1 className="h1">{city}</h1>
        <button onClick={handleDeleteIt}>X</button>
      </span>
      <ul className="ulist">
        <li>{/* <strong>Actor Name:</strong> {item.portrayed} */}</li>
        <li>{/* <strong>Nickname:</strong> {item.nickname} */}</li>
        <li>{/* <strong>Birthday:</strong> {item.birthday} */}</li>
        <li>{/* <strong>Status:</strong> {item.status} */}</li>
      </ul>
    </div>
  );
}
Detail.propTypes = {
  id: PropTypes.number,
  city: PropTypes.string,
  fav: PropTypes.bool,
};

export default Detail;
