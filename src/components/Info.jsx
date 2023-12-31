import React from "react";

function Info({ info, loading }) {
  

  return (
    <>
      {loading ? (
        <p className="text-white text-xl mt-5 uppercase italic">please enter a city</p>
      ) : (
        <div className="text-2xl font-bold font-genumu sm:text-4xl md:text-6xl xl:text-8xl">
          <p className="italic px-2 capitalize text-bakir text-center">
            {info.name}, {info.sys.country}
          </p>
          <p className="font-bold text-white m-5 text-center">
            {info.main.temp}
          </p>
          <p className="text-white p-3 m-5 text-center">
            {info.weather[0].description}
          </p>
        </div>
      )}
    </>
  );
}

export default Info;
