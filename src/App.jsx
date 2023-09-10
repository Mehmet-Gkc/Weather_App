import { useState } from "react";
import Weather from "./components/Weather";
import { FaCloudSunRain } from "react-icons/fa";
import "./App.css";

function App() {
  const [city, setCity] = useState("Berlin");

  return (
    <>
      <div class="weather-container">
        <h1 className="app-title">Weather App</h1>
        <div className="weather-icon ">
          <FaCloudSunRain /> <br />
        </div>
        
        <input
          className="city-input"
          type="text"
          value={city}
          placeholder="Write a city"
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <Weather city={city} />
      </div>
    </>
  );
}

export default App;
