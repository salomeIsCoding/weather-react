import React from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner';

export default function Weather(props) {
    function handleResponse(response){
        let temperature = Math.round(response.data.main.temp);
        alert(`The weather in ${response.data.name} is ${temperature}°C`);
    }

    let apiKey = "ad793a6d772939c31783de5822791acf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (<Audio
  height="80"
  width="80"
  radius="9"
  color="orange"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>);
}