import React from "react";
import { useParams } from "react-router-dom";

function Detalji() {
  const { ime, dat } = useParams();
  // const id = params.id;
  return (
    <div>
      Detail
      <div>
        5 {ime} of {dat}
      </div>
    </div>
  );
}

export default Detalji;
