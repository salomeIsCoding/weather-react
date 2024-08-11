import "./App.css";
import Search from "./Search";
import WeatherContainer from "./Weather-container.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="weather-app-container">
      <Search />
      <WeatherContainer />
      <Footer />
    </div>
  );
}
