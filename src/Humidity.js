import React from "react";
import "./Humidity.css";

export default function Humidity(props) {
  return (
    <div>
      Humidity: <span> {props.value}%</span>
    </div>
  );
}
