import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("user entered: " + value);
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="City..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default Form;
