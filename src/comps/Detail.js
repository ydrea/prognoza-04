import React from "react";

function Detail({ id, city, fav }) {
  console.log(city);
  return (
    <li className={`list-item ${fav && "list-item-success"}`}>
      <span>
        <input type="checkbox" checked={fav} />
        {city}
      </span>
    </li>
  );
}

export default Detail;
