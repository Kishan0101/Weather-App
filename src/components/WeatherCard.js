import React from "react";

const WeatherCard = ({ weather, city }) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
      <p>Condition: {weather.weathercode}</p>
    </div>
  );
};

export default WeatherCard;
