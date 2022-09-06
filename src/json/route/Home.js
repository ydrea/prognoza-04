import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <button type="submit" onClick={() => navigate("conform")}>
        Conform
      </button>
    </div>
  );
}

export default Home;
