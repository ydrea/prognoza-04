import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function Table() {
  //takeHour   //just Dates
  const takeHour = useSelector((state) =>
    state.api.map((i) => i.city.list.map((ii) => ii.dt_txt.slice(10, 16)))
  );
  console.log("datumi", takeHour);

  // // params
  const { ime, dat } = useParams();
  console.log("route", ime, dat);

  // // dates
  const takeDate = useSelector((state) =>
    state.api.map((i) => i.city.list.map((ii) => ii.dt_txt.slice(5, 10)))
  );
  console.log("datumi", takeDate);

  //icons
  const icons = useSelector((state) =>
    state.api.map((i) => i.city.list.map((ii) => ii.weather[0].icon))
  );
  console.log(icons);

  //list
  const lista = useSelector((state) => state.api.map((i) => i.city.list));
  console.log(lista);

  // //drill
  // const selected = useSelector((state) =>
  //   lista.filter((i) => i.takeDate === dat)
  // );
  // console.log(selected);

  return (
    <div>
      Table
      <table>
        <thead>
          <tr>
            <th>dat</th>
          </tr>
        </thead>
        <tbody>
          {lista[0]
            .filter((ii) => ii.dt_txt.slice(5, 10) == dat)
            // .filter((i, index) => {
            //   return index == [0, 4];
            // })
            .map((i) => (
              <tr>
                <td>{i.dt_txt.slice(11, 14)} </td>
                {/* <td>{i.weather[0].icon}</td> */}
                <td>{i.main.temp}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
