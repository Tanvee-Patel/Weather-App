import React, { useState } from 'react';
import SearchBar from './Components/SearchBar'
import WeatherCard from './Components/WeatherCard'
import Forecast from './Components/Forecast'

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9287220128dc4226a29172327240408&q=${city}&days=5`);
      const data = await response.json();
      setWeatherData(data);
      setForecastData(data.forecast.forecastday);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <header className="bg-blue-600 p-4 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Weather Forecast</h1>
          <SearchBar onSearch={fetchWeather} />
        </div>
      </header>
      {weatherData && (
        <div className="mt-4">
          <WeatherCard data={weatherData} />
          <Forecast data={forecastData} />
        </div>
      )}
      {!weatherData && (
        <p className="text-center mt-4">Enter a city to get Current the weather
        </p>
      )}
    </div>
  );
};

export default App;
