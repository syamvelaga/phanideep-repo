import React, { Component } from "react";

class WeatherCard extends Component {
  render() {
    const { data } = this.props;
    const { name, main, weather, wind } = data;
    const currentDate = new Date().toLocaleString();

    return (
      <div className="weather-card">
        <h2>{name}</h2>
        <p>{currentDate}</p>
        <p>Temperature: {main.temp}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} m/s</p>
        <p>{weather[0].description}</p>
      </div>
    );
  }
}

export default WeatherCard;
