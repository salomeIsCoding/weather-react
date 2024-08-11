import React from "react";
import "./Condition.css";
import Wind from "./Wind";
import Humidity from "./Humidity";

export default function Condition(props) {
  return (
    <div className="weather-condition">
      <Wind value={70} />
      <Humidity value={92} />
    </div>
  );
}
