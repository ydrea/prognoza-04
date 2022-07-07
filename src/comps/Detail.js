import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { deleteIt, toggleFav } from "../redux/apiSlice";

// import Api, { getEmAsync } from "../redux/apiCall";

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
    <li className={`list-item ${fav && "list-item-success"}`}>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h1>{city.name}</h1>
          </div>
          <div className="card-back">
            <h1>{city}</h1>
            <ul>
              <li>{/* <strong>Actor Name:</strong> {item.portrayed} */}</li>
              <li>{/* <strong>Nickname:</strong> {item.nickname} */}</li>
              <li>{/* <strong>Birthday:</strong> {item.birthday} */}</li>
              <li>{/* <strong>Status:</strong> {item.status} */}</li>
            </ul>
          </div>
        </div>
      </div>

      <span>
        <input type="checkbox" checked={fav} onChange={handleFavCheck} />
        {city}
      </span>
      <button onClick={handleDeleteIt}>X</button>
    </li>
  );
}
Detail.propTypes = {
  id: PropTypes.number,
  city: PropTypes.string,
  fav: PropTypes.bool,
};

export default Detail;
