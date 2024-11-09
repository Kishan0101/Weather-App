import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Assuming you're using plain CSS

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const getWeather = async () => {
    if (!city) return;
    try {
      // Geocode API to get latitude and longitude (for simplicity, using a fixed city here)
      const geoResponse = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=en`
      );
      const { latitude, longitude } = geoResponse.data.results[0];

      // Fetching current weather based on lat and lon
      const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      setWeather(weatherResponse.data.current_weather);
      setError(null);
    } catch (err) {
      setError("Error fetching weather data. Please try again.");
    }
  };

  return (
    <div className="App">
      <h1>Weather Now</h1>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city"
      />
      <button onClick={getWeather}>Get Weather</button>

      {error && <p>{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{city}</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windspeed} km/h</p>
          <p>Condition: {weather.weathercode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
