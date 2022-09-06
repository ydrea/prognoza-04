import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      made with
      <a href="https://api.openweathermap.org/"> OpenWeatherMaps </a>
    </div>
  );
};

export default Footer;
