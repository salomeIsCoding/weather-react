import React from "react";
import Date from "./Date";
import City from "./City";
import Condition from "./Condition";

export default function WeatherData() {
  return (
    <div>
      <Date day="Tuesday" time="21:00" />
      <City value="Berlin" />
      <Condition />
    </div>
  );
}
