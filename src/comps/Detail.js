import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
// import Table from "./Table";
function Detail() {
  //  //drill
  const lista = useSelector((state) => state.api.map((i) => i.city.list));
  console.log(lista);
  // dates

  // //
  // const datesTxt = useSelector((state) =>
  //   state.api.map((i) => i.city.list.map((ii) => ii.dt_txt))
  // );
  // console.log(datesTxt);
  // //icons
  // const icons = useSelector((state) =>
  //   state.api.map((i) => i.city.list.map((ii) => ii.weather[0].icon))
  // );
  // console.log(icons);
  // //
  // const iconurl = `https://openweathermap.org/img/w/${icon}.png`;
  //route
  const { ime, dan } = useParams();
  console.log(ime);
  console.log(dan);
  //
  return (
    <div>
      <h1>{ime}</h1>
      <Link to={`/card/${ime}/${dan}`}>{ime}</Link>
      <div>
        5
        {lista[0].map((i) => (
          <ul>
            <li key={i.dt + 134}>
              | {i.dt_txt.slice(0, 10)} | {i.weather[0].icon} |{" "}
              {i.main.temp_min}| {i.main.temp_max} |
            </li>
          </ul>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Detail;
