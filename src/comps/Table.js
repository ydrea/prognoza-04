import React from "react";
import { useSelector } from "react-redux";
function Table() {
  //  //drill
  // // dates
  // const takeDate = useSelector((state) =>
  //   state.api.map((i) => i.city.list.map((ii) => ii.dt_txt))
  // );
  // console.log(takeDate);
  //icons
  // const icons = useSelector((state) =>
  //   state.api.map((i) => i.city.list.map((ii) => ii.weather[0].icon))
  // );
  // console.log(icons);
  const lista = useSelector((state) => state.api.map((i) => i.city.list));
  console.log(lista);
  return (
    <div>
      Table
      <table>
        <thead>Table</thead>
        <tbody>
          {lista.map((i) => (
            <tr>
              <td>{i.dt_txt} </td>
              <td>{i.weather[0].icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
