// import React from "react";
import Detail from "./Detail";
import { useSelector } from "react-redux";
import { resetList } from "../redux/apiSlice";

export default function List() {
  const cities = useSelector((state) => state.api);
  console.log(cities);

  return (
    <div>
      <div>List</div>
      {/* <button onClick={resetList}>Reset<button/> */}
      <ul>
        {cities.map((i) => (
          <Detail id={i.id} city={i.city} fav={i.fav} />
        ))}
      </ul>
    </div>
  );
}
