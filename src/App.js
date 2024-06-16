import React, { Component } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherList from "./components/WeatherList";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: [],
      errorMessage: "",
      isDarkMode: false,
    };
  }

  addWeatherData = (data) => {
    this.setState((prevState) => ({
      weatherData: [...prevState.weatherData, data],
      errorMessage: "",
    }));
  };

  setErrorMessage = (message) => {
    this.setState({ errorMessage: message });
  };

  toggleMode = () => {
    this.setState((prevState) => {
      document.body.classList.toggle("dark-mode", !prevState.isDarkMode);
      return { isDarkMode: !prevState.isDarkMode };
    });
  };

  render() {
    const { weatherData, errorMessage, isDarkMode } = this.state;
    // const currentDateTime = new Date().toLocaleString();

    return (
      <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <nav className="navbar">
          <h1>Weather App</h1>
          <DarkModeToggle
            toggleMode={this.toggleMode}
            isDarkMode={isDarkMode}
          />
        </nav>
        <WeatherForm
          addWeatherData={this.addWeatherData}
          setErrorMessage={this.setErrorMessage}
        />
        {/* <div className="date-time">{currentDateTime}</div> */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <WeatherList weatherData={weatherData} />
      </div>
    );
  }
}

export default App;
