import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelectorApi } from "../redux/reduxHooks";
import "../styles/style.css";
//
export default function List() {
  const [toomuch, toomuchSet] = useState("");
  const cities = useSelectorApi((state) => state.api);
  console.log(cities);

  const tenPieces = cities.slice(0, 4);
  console.log(tenPieces);

  useEffect(() => {
    console.log("KAE!");
    if (cities.length > tenPieces.length) {
      toomuchSet("mnoogo kume!!!");
    } else {
      toomuchSet("");
    }
  }, [tenPieces, cities]);
  //
  return (
    <div className="list-container">
      <span className="error">{toomuch}</span>
      {
        tenPieces
          //
          .map((i) => {
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
        // )
      }
    </div>
  );
}
