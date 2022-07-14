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
      <label className="instruction">Unesite ime grada</label>
      <input
        className="inputCity"
        type="text"
        placeholder="City..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>

      <button type="submit" className="button">
        Dodaj
      </button>
    </form>
  );
};

export default Form;
