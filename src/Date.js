import React from "react";
import "./Date.css";

export default function Date(props) {
  return (
    <div className="weather-data">
      {props.day}, {props.time}
    </div>
  );
}
