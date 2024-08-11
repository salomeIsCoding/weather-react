import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        This project was coded by{" "}
        <a href="https://github.com/salomeIsCoding" target="_blank" rel="noreferrer">
          Salomé Erard
        </a>
        , is{" "}
        <a
          href="https://github.com/salomeIsCoding/Meteo_Forecast_App"
          target="_blank" rel="noreferrer"
        >
          open-sourced on Github
        </a>{" "}
        and{" "}
        <a
          href="https://app.netlify.com/sites/meteo-app-w8/overview"
          target="_blank" rel="noreferrer"
        >
          hosted on Netlify.
        </a>
      </p>
    </div>
  );
}
