import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import Card from "./Card";
import Table from "./Table";
function Detail() {
  //drill
  const lista = useSelector((state) => state.api.map((i) => i.city.list));
  console.log("lista", lista);
  //just Dates
  const takeDate = useSelector((state) =>
    state.api.map((i) => i.city.list.map((ii) => ii.dt_txt.slice(1, 10)))
  );
  console.log("datumi", takeDate);

  //just Unique
  const justUnique = [...new Set(takeDate[0])];
  console.log("samo unique", justUnique);

  //route
  const ime = useParams();
  console.log("route ime", ime);
  // console.log(dan);
  const data = [
    { sizes: "small" },
    { sizes: "medium,small" },
    { sizes: "small,big" },
    { sizes: "big" },
    { sizes: "medium" },
  ];

  const filterOptions = ["big", "small"];

  let res = data.filter((i) =>
    i.sizes.split(",").some((ii) => filterOptions.includes(ii))
  );

  console.log("try", res);
  //
  return (
    <div>
      <div className="list-container">
        {lista[0]
          //
          .filter(function (i, index) {
            return index % 8 == 0;
          })
          .map((i) => {
            return (
              <Card
                className="cards"
                key={i.id}
                id={i.id}
                ime={i.dt_txt.slice(5, 10)}
                fav={i.fav}
                icon={i.weather[0].icon}
                min={i.main.temp_min}
                max={i.main.temp_max}
              />
            );
          })}
      </div>
      <Table dat={ime} />
      <Outlet />
    </div>
  );
}

export default Detail;
