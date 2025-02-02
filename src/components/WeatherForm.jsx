import React, {useState} from 'react';


const cities = [
    {name: 'New York', lat: 40.7128, lon: -74.0060},
    {name: 'London', lat: 51.5074, lon: -0.1278},
    {name: 'Tokyo', lat: 35.6895, lon: 139.6917},
    {name: 'Moscow', lat: 55.7512, lon: 37.6184},
];

function WeatherForm({onCitySelect}) {
    const [selectedCity, setSelectedCity] = useState('');

    const handleChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cityObj = cities.find(city => city.name === selectedCity);
        if (cityObj) {
            onCitySelect(cityObj);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="weather-form">
            <label htmlFor="city-select">Выберите город: </label>
            <select id="city-select" value={selectedCity} onChange={handleChange}>
                <option value="">--Город--</option>
                {cities.map(city => (
                    <option key={city.name} value={city.name}>{city.name}</option>
                ))}
            </select>
            <button type="submit">Получить прогноз</button>
        </form>
    );
}

export default WeatherForm;
