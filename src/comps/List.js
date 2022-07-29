import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";

import { getEmAsync, resetList } from "../redux/apiSlice";
import "../styles/style.css";
// import Modal from "./Modal";
export default function List() {
  // const [modalOpen, modalOpenSet] = useState(false);
  const cities = useSelector((state) => state.api);
  console.log(cities);

  // const icon = useSelector((state) =>
  //   state.api.map((i) => i.city.list[0].weather[0].icon)
  // );

  // const dispatch = useDispatch();
  // const handleResetList = () => {
  //   dispatch(resetList());
  // };

  // const tenPieces = cities.slice(0, 5).map((i) => {
  //   <Detail id={i.id} city={i.ime} fav={i.fav} />;
  // });

  return (
    <div className="list-container">
      {cities.length > 2 ? (
        <p>mao </p>
      ) : (
        cities.map((i) => {
          return (
            <Card
              className="cards"
              key={i.id + 1}
              id={i.id}
              ime={i.ime}
              fav={i.fav}
              icon={i.city.list[0].weather[0].icon}
              min={i.city.list[0].main.temp_min}
              max={i.city.list[0].main.temp_max}
            />
          );
        })
      )}
    </div>
  );
}
