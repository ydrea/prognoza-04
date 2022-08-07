import React, { useState } from "react";
import { useDispatchApi } from "../redux/reduxHooks";
import { Outlet } from "react-router-dom";
import { getEmAsync } from "../redux/apiSlice";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatchApi();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getEmAsync({ city: value }));
    setValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form-container">
        <label className="instruction">Unesite ime grada</label>
        <input
          className="inputCity"
          type="text"
          placeholder="city"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>

        <button type="submit" className="button">
          Dodaj
        </button>
      </form>
      <Outlet />
    </>
  );
};

export default Form;
