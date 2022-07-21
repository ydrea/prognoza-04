import React from "react";
import { useNavigate } from "react-router-dom";

export default function Four0Four() {
  const navigate = useNavigate();
  return (
    <div>
      <h1> 404</h1>
      <p>Nema ničega + đe je ba ono nestalo.</p>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}
