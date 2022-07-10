import React, { useEffect } from "react";
import Detail from "./Detail";
import { useDispatch, useSelector } from "react-redux";
import { getEmAsync, resetList } from "../redux/apiSlice";
// import {  } from "../redux/apiCall";
export default function List() {
  const cities = useSelector((state) => state.api);
  console.log(cities);
  // const cityData = useSelector((state) => state.api.city);
  // console.log(cityData);
  const dispatch = useDispatch();

  const handleResetList = () => {
    dispatch(resetList());
  };

  // const tenPieces = cities.slice(0, 5).map((i) => {
  //   <Detail id={i.id} city={i.ime} fav={i.fav} />;
  // });

  return (
    <div className="cards">
      <div>List</div>
      <button onClick={handleResetList}>Reset</button>
      <ul>
        {cities.length === 0 ? (
          <div>daj grad</div>
        ) : (
          cities.map((i) => {
            return (
              <div>
                <Detail id={i.id} city={i.ime} fav={i.fav} />
                {/* {data.ime}, {data.id} */}
              </div>
            );
          })
        )}
        {/* (
        )} */}
      </ul>
    </div>
  );
}
