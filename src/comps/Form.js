import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCity, getCitiesAsync, getEmAsync } from "../redux/apiSlice";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const city = useSelector((state) => state.api.city);
  console.log("API", city);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("city");
    // dispatch(addCity());

    // dispatch(getCitiesAsync(value));
  };

  // useEffect(() => {
  //   dispatch(addCity(city));
  // }, [dispatch]);

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
