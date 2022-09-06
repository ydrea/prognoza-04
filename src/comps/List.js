import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelectorApi } from "../redux/reduxHooks";
import "../styles/style.css";
//
export default function List() {
  const [toomuch, toomuchSet] = useState("");
  const cities = useSelectorApi((state) => state.api);
  console.log("cities", cities);

  const tenPieces = cities.slice(0, 4);
  console.log("10pieces", tenPieces);

  useEffect(() => {
    console.log("Effect");
    if (cities.length > tenPieces.length) {
      toomuchSet("mnoogo kume!");
    } else {
      toomuchSet("");
    }
  }, [tenPieces, cities]);
  //
  //
  return (
    <div className="list-container">
      <div className="alert">
        <h4 className="error">{toomuch}</h4>
      </div>
      {
        tenPieces
          //
          .map((i, index) => {
            return (
              <Card
                className="cards"
                data-testId={`test-${index}`}
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
