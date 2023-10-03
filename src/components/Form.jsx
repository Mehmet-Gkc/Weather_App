import React, { useEffect, useState }  from "react";
import { FaCloudSunRain } from "react-icons/fa";
import Info from "./Info";

function Form() {
    const [city, setCity] = useState("");
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const API_KEY = import.meta.env.VITE_APP_API_KEY
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      console.log("app-data",data);
         setInfo(data)  
         setLoading(false)
    };

  return (
    <div className="container flex flex-col justify-center items-center mt-11">
      <h1 className="text-8xl font-boogaloo text-bakir text-center uppercase">
        Weather App
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <input
          className="bg-transparent m-10 border-b-2 border-bakir text-center w-96 text-2xl text-white"
          type="text"
          value={city}
          placeholder="Write a city"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="border border-bakir bg-bakir text-white px-10 py-1"
        >
          Search
        </button>
      </form>

      <div className="text-8xl text-white flex m-3 p-3">
        <FaCloudSunRain className="" /> <br />
      </div>

      <Info info={info} loading={loading}/>

    </div>
  );
}

export default Form;
