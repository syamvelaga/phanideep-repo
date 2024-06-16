import React, { Component } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherList from "./components/WeatherList";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: false,
      weatherData: [],
      errorMessage: "",
    };
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  addWeatherData = (data) => {
    this.setState({ weatherData: [data], errorMessage: "" });
  };

  setErrorMessage = (message) => {
    this.setState({ errorMessage: message, weatherData: [] });
  };

  render() {
    const { darkMode, weatherData, errorMessage } = this.state;

    return (
      <div className={darkMode ? "app dark-mode" : "app"}>
        <header className="app-header">
          <h1>Weather App</h1>
          <DarkModeToggle
            toggleDarkMode={this.toggleDarkMode}
            darkMode={darkMode}
          />
        </header>
        <WeatherForm
          addWeatherData={this.addWeatherData}
          setErrorMessage={this.setErrorMessage}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <WeatherList weatherData={weatherData} />
      </div>
    );
  }
}

export default App;
