import React from "react";
import {
  selectDate,
  selectHour,
  selectIcon,
  selectlist,
  useSelectorApi,
} from "../redux/reduxHooks";
import { useParams } from "react-router-dom";
function Table() {
  //takeHour
  const takeHour = (state) =>
    state.api.map((i) => i.city.list.map((ii) => ii.dt_txt.slice(10, 16)));
  // selectHour();
  console.log("sati", takeHour);

  // // params
  const { ime, dat } = useParams();
  console.log("route", ime, dat);

  // // dates
  const takeDate = useSelectorApi((state) =>
    state.api.map((i) => i.city.list.map((ii) => ii.dt_txt.slice(1, 10)))
  );
  // selectDate();
  console.log("datumi", takeDate);

  //icons
  const icons = useSelectorApi((state) =>
    state.api.map((i) => i.city.list.map((ii) => ii.weather[0].icon))
  );

  // selectIcon();
  console.log(icons);

  //list
  const lista = useSelectorApi((state) => state.api.map((i) => i.city.list));

  // selectlist();
  console.log(lista);
  //
  const iconurl = "https://openweathermap.org/img/w/";
  //
  return (
    <div>
      <table className="table">
        <thead>
          <td>sat</td>
          <td>icon</td>
          <td>očekivana temperatura</td>
        </thead>
        <tbody>
          {lista[0]
            .filter((ii) => ii.dt_txt.slice(5, 10) == dat)
            //
            .map((i) => (
              <tr key={i.id}>
                <td>{i.dt_txt.slice(11, 16)} </td>
                <td>
                  <img src={iconurl + `${i.weather[0].icon}` + ".png"} />
                </td>
                <td>{i.main.temp}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
