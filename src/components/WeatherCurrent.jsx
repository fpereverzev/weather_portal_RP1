import React from 'react';

function WeatherCurrent({ current }) {

    if (!current) {
        return <p>Загрузка данных...</p>;
    }

    return (
        <div className="weather-current">
            <h2>Current Weather</h2>
            <p>Temperature: {current.temp} °C</p>
            <p>Weather: {current.weather?.[0]?.description || "No data"}</p>
            <p>Humidity: {current.humidity}%</p>
        </div>
    );
}

export default WeatherCurrent;
