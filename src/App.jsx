import { useState } from "react";
import Weather from "./components/Weather";
import { FaCloudSunRain } from "react-icons/fa";
import "./App.css";

function App() {
  const [city, setCity] = useState("");

  return (
    <>
      <div className="container p-3 mt-2 flex flex-col justify-center items-center w-96 bg-slate-50 ">
        <h1 className="text-4xl font-boogaloo">Weather App</h1>
        <div className="weather-icon text-5xl pt-3">
          <FaCloudSunRain className=""/> <br />
        </div>
        
        <input
          className="bg-transparent p-2 border focus:outline-none border-black rounded-md hover:border-blue-600"
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
