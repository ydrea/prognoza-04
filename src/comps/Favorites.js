import React from "react";
import { selectFav, useSelectorApi } from "../redux/reduxHooks";
import Card from "./Card";
//
export default function Favorites() {
  const faved = selectFav(state);
  // useSelectorApi((state) =>
  //   state.api.filter((i) => i.fav === true)
  // );
  //
  return (
    <div className="list-container">
      <h4 className="alert">Broj omiljenih: {faved.length}</h4>
      {faved.map((i) => (
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
      ))}
    </div>
  );
}
