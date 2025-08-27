import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState(""); //user input
  const [weather, setWeather] = useState(null); //api response
  const [error, setError] = useState(""); // error message

  const fetchWeather = async () => {
    if (!city) return; //empty
    try {
      setError(""); //resetting error to null
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b7d84ba7a006ca522d66c4bc4fa5d0af&units=metric`
      );
      const data = await res.json();
      if (data.cod === "404") {
        setError("city not found");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError("Something went wrong");
      setWeather(null);
    }
  };

  return (
    <div className="container">
      <h1>Weather</h1>
      <h4>Enter Your city for Weather Info</h4>
      <div className="input">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          id="city"
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="data">
          <h2>City: {city}</h2>
          <p>Temp: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Condition: {weather.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="weather icon"
          />
        </div>
      )}
    </div>
  );
}

export default App;
