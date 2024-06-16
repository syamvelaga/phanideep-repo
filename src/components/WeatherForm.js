import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";

class WeatherForm extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
    };
  }

  handleChange = (e) => {
    this.setState({ location: e.target.value });
  };

  fetchWeather = async (e) => {
    e.preventDefault();
    const { location } = this.state;
    const { addWeatherData, setErrorMessage } = this.props;
    const apiKey = "717a42a8850482b98bb0f482ea578d0b";
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        addWeatherData(data);
        this.setState({ location: "" });
      } else {
        setErrorMessage(
          "Error fetching weather data. Please enter a valid city name."
        );
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
    }
  };

  render() {
    const { location } = this.state;

    return (
      <form className="weather-form" onSubmit={this.fetchWeather}>
        <input
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={this.handleChange}
          required
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    );
  }
}

export default WeatherForm;
