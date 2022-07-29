import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function Table() {
  //takeHour   //just Dates
  const takeDate = useSelector((state) =>
    state.api.map((i) => i.city.list.map((ii) => ii.dt_txt.slice(10, 15)))
  );
  console.log("datumi", takeDate);

  const dat = useParams();
  console.log("route", dat);
  //
  //  //drill
  // // dates
  //icons
  const icons = useSelector((state) =>
    state.api.map((i) => i.city.list.map((ii) => ii.weather[0].icon))
  );
  console.log(icons);
  const lista = useSelector((state) => state.api.map((i) => i.city.list));
  console.log(lista);
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
          {lista[0].map((i) => (
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
