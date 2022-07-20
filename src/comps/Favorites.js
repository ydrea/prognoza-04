import React from "react";
import { useSelector } from "react-redux";

export default function Favorites() {
  const faved = useSelector((state) => state.api.filter((i) => i.fav === true));
  console.log(faved);

  return (
    <>
      <div>Omiljeni</div>
      <h4>Broj omiljenih: {faved.length}</h4>;{faved.map((f) => f.ime)}
    </>
  );
}
