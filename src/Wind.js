import React from "react";
import "./Humidity.css";

export default function Wind(props) {
  return (
    <div>
      Wind:
      <span> {props.value} km/h</span>
    </div>
  );
}
