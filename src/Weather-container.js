import React from "react";
import WeatherData from "./Weather-data";
import Temperature from "./Temperature";
import "./Weather-container.css";

export default function WeatherContainer() {
  return (
    <div className="weather-container">
      <WeatherData />
      <Temperature value={24} />
    </div>
  );
}
