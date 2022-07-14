import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCity, getEmAsync } from "../redux/apiSlice";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(value);
    dispatch(getEmAsync({ city: value }));

    // //
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className="form-container">
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
