// import React from "react";
import Detail from "./Detail";
import { useDispatch, useSelector } from "react-redux";
// import { resetList } from "../redux/apiSlice";

export default function List() {
  const cities = useSelector((state) => state.api);
  console.log(cities);

  // const dispatch = useDispatch();

  // const handleResetList = () => {
  //   dispatch(resetList());
  // };

  return (
    <div>
      <div>List</div>
      {/* <button onClick={handleResetList}>Reset</button> */}
      <ul>
        {cities.map((i) => (
          <Detail id={i.id} city={i.city} fav={i.fav} />
        ))}
      </ul>
    </div>
  );
}
