import React from "react";
import { useParams } from "react-router-dom";

function Detalji() {
  const { days, id } = useParams();
  // const id = params.id;
  return (
    <div>
      Detail
      <div>
        5 {days} of {id}
      </div>
    </div>
  );
}

export default Detalji;
