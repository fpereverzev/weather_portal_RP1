import React, { useEffect, useState } from 'react';

function WeatherForecast({ daily }) {

    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        if (daily && daily.length > 0) {
            setLoaded(true);
        }
    }, [daily]);


    if (!loaded) {
        return <p>Загрузка данных...</p>;
    }


    return (
        <div className="weather-forecast">
            <h2>5-Day Forecast</h2>
            <ul>
                {daily.slice(0, 5).map((day, index) => (
                    <li key={index}>
                        <p>Day {index + 1}</p>
                        <p>Temperature: {day.temp.day} °C</p>
                        <p>Weather: {day.weather?.[0]?.description || "No data"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WeatherForecast;
