import React, { useEffect } from "react";
import Detail from "./Detail";
import { useDispatch, useSelector } from "react-redux";
import { getEmAsync, resetList } from "../redux/apiSlice";
// import {  } from "../redux/apiCall";
export default function List() {
  const cities = useSelector((state) => state.api);
  console.log(cities);
  // const query = useSelector((state) => state.api.city);
  // console.log(query);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmAsync());
  }, []);

  const handleResetList = () => {
    dispatch(resetList());
  };

  const tenPieces = cities.slice(0, 5).map((i) => {
    return <Detail id={i.id} city={i.city} fav={i.fav} />;
  });

  return (
    <div>
      <div>List</div>
      <button onClick={handleResetList}>Reset</button>
      <ul>
        {tenPieces}
        {/* {cities.map((i) => (
          <Detail id={i.id} city={i.city} fav={i.fav} />
        ))} */}
      </ul>
    </div>
  );
}
