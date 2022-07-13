import React, { useEffect } from "react";
import Detail from "./Detail";
import { useDispatch, useSelector } from "react-redux";
import { getEmAsync, resetList } from "../redux/apiSlice";
import "../App.css";
export default function List() {
  const cities = useSelector((state) => state.api);
  console.log(cities);
  const dispatch = useDispatch();

  // const handleResetList = () => {
  //   dispatch(resetList());
  // };

  // const tenPieces = cities.slice(0, 5).map((i) => {
  //   <Detail id={i.id} city={i.ime} fav={i.fav} />;
  // });

  return (
    <div className="container">
      {cities.length === 0 ? (
        <div className="instruction">Enter a city</div>
      ) : (
        cities.map((i) => {
          return (
            <div className="cards">
              <Detail id={i.id} city={i.ime} fav={i.fav} />
            </div>
          );
        })
      )}
    </div>
  );
}
