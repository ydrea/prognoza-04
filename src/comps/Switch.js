import React from "react";

const Switch = ({ toggle, handleToggle }) => {
  return (
    <>
      <input
        checked={toggle}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />

      <label
        style={{ background: toggle && "#ff8700" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        {" "}
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
