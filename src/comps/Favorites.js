import React from "react";
import { useSelector } from "react-redux";

export default function Favorites() {
  const faved = useSelector((state) => state.api.filter((i) => i.fav === true));

  return (
    <>
      <div>Omiljeni</div>
      <h4 className="mt-3">Broj omiljenih: {faved.length}</h4>;
      {faved.map((f) => f.city)}
    </>
  );
}
