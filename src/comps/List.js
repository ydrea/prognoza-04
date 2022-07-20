import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";

import { getEmAsync, resetList } from "../redux/apiSlice";
import "../styles/style.css";
export default function List() {
  const cities = useSelector((state) => state.api);
  console.log(cities);

  // const icon = useSelector((state) =>
  //   state.api.map((i) => i.city.list[0].weather[0].icon)
  // );
  // console.log(icon);

  // const dispatch = useDispatch();
  // const handleResetList = () => {
  //   dispatch(resetList());
  // };

  // const tenPieces = cities.slice(0, 5).map((i) => {
  //   <Detail id={i.id} city={i.ime} fav={i.fav} />;
  // });

  return (
    <div className="list-container">
      {cities.length > 3 ? (
        <alert>smanji </alert>
      ) : (
        cities.map((i) => {
          return (
            <div className="cards">
              <Card
                id={i.id}
                ime={i.ime}
                fav={i.fav}
                icon={i.city.list[0].weather[0].icon}
                min={i.city.list[0].main.temp_min}
                max={i.city.list[0].main.temp_max}
              />
            </div>
          );
        })
      )}
    </div>
  );
}
