import { useEffect, useState } from "react";

function Weather({ city }){
    const [currentTemp, setCurrentTemp] = useState(null);
    const [loading, setLoading] = useState(true);
    // useEffect wird standardmäßig dann ausgeführt wenn die Komponente geladen wird.
    useEffect(() => {
        // Wichtig: Wir können den cb in useEffect nicht direkt als async kennzeichnen, wir müssend dafür eine innere Funktion bauen. 
        async function fetchData() {
            const API_KEY = '56ab3824b91fb6c1546a15ce19d23f8e';
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            console.log(data);
            setCurrentTemp(data.main.temp);
            setLoading(false);
        }
        fetchData();
    }, [city])

    return (
        <>
             {loading ?
                <> Wetter wird geladen </> :
                <div className="weather-info"> <span className="weather-description ">{city}</span>  hat die Temperatur <span className="weather-temperature">{currentTemp}!</span>  </div>
            }
        </>
    )
}

export default Weather;