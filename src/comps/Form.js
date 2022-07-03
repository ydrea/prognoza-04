import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCity } from "../redux/apiSlice";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCity({
        id: Date.now(),
        city: value,
        fav: true,
      })
    );
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
