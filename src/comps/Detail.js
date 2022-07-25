import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import Card from "./Card";
import Table from "./Table";
function Detail() {
  //  //drill
  const lista = useSelector((state) => state.api.map((i) => i.city.list));
  console.log(lista);
  // const take5 = useSelector
  // //
  // const take5 = cities.slice(0, 5).map((i) => {
  //   <Detail id={i.id} city={i.ime} fav={i.fav} />;
  // });
  // const takeFive = () => {
  //   lista
  //     .filter((i, index) => {
  //       lista.indexOf(i) === index;
  //     })
  //     .map((ii) => {
  //       <Card key={Date.now()} />;
  //     });
  // };
  // //
  // dates
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
  //route
  const ime = useParams();
  console.log(ime);
  // console.log(dan);
  //
  return (
    <div>
      <div className="list-container">
        {lista[0].map((i) => {
          return (
            <Card
              className="cards"
              key={i.id - 1}
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
