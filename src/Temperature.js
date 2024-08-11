import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return <div className="weather-temperature">{props.value}°C</div>;
}
