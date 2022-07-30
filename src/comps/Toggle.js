import React from "react";

function Toggle({ onChange }) {
  return (
    <label className="toggle">
      <input type="checkbox" onChange={onChange} />
      <span className="slider" />
    </label>
  );
}

export default Toggle;
