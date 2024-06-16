import React from "react";

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;
  const currentDateTime = new Date().toLocaleString();

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{currentDateTime}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Weather: {weather[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
