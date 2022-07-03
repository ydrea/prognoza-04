import React from "react";
import Detail from "./Detail";

function List() {
  const cities = [
    { id: 1, city: "cit1", fav: false },
    { id: 2, city: "cit2", fav: false },
    { id: 3, city: "cit3", fav: false },
  ];
  return (
    <>
      <div>List</div>
      <ul>
        {cities.map((i) => (
          <Detail id={i.id} city={i.city} fav={i.fav} />
        ))}
      </ul>
    </>
  );
}

export default List;
