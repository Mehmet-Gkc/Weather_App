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
      const URL = import.meta.env.VITE_APP_URL
      const response = await fetch(`${URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      console.log("app-data",data);
         setInfo(data)  
         setLoading(false)
    };

  return (
    <div className="h-full flex flex-col justify-center items-center mt-11">
      <h1 className="text-3xl font-boogaloo text-bakir text-center uppercase sm:text-4xl md:text-6xl xl:text-9xl">
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

      <div className="text-4xl text-white flex m-3 p-3 sm:text-5xl md:text-7xl xl:text-9xl">
        <FaCloudSunRain /> <br />
      </div>

      <Info info={info} loading={loading}/>

    </div>
  );
}

export default Form;
