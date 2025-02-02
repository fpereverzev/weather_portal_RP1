import React, { useState, useEffect } from 'react';
import WeatherForm from './WeatherForm';
import WeatherCurrent from './WeatherCurrent';
import WeatherForecast from './WeatherForecast';
import "../styles/App.css";


const API_KEY = 'YOUR_API_KEY_HERE'; // вставьте ваш API ключ

function App() {
    const [city, setCity] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    // Когда выбран город, делаем запрос по координатам
    useEffect(() => {
        if (city) {
            // One Call API требует lat и lon
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`;
            fetch(url)
                .then(response => response.json())
                .then(data => setWeatherData(data))
                .catch(err => console.error(err));
        }
    }, [city]);

    return (
        <div className="app-container">
            <h1>Прогноз погоды</h1>
            <WeatherForm onCitySelect={setCity} />
            {weatherData && (
                <>
                    <WeatherCurrent current={weatherData.current} />
                    <WeatherForecast daily={weatherData.daily} />
                </>
            )}
        </div>
    );
}

export default App;
