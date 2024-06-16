import React, { Component } from "react";
import WeatherCard from "./WeatherCard";

class WeatherList extends Component {
  render() {
    const { weatherData } = this.props;

    return (
      <div className="weather-list">
        {weatherData.map((data, index) => (
          <WeatherCard key={index} data={data} />
        ))}
      </div>
    );
  }
}

export default WeatherList;
