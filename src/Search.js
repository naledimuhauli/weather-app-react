import React from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = React.useState("");
  const [loaded, setLoaded] = React.useState(false);
  const [temeprature, setTemperature] = React.useState(null);

  function showWeather(response) {
    setLoaded(true);
    setTemperature({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handelClick(event) {
    event.preventDefault();
    let apiKey = "a5acb752426cd8188485c35694980e3a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
      <form className="SearchEngine">
        <input
          type="search"
          placeholder="Type a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" onClick={handelClick} />
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(temeprature.temperature)}°C</li>
          <li>Humidity: {temeprature.humidity}%</li>
          <li>Wind: {Math.round(temeprature.wind)} km/h</li>
          <li>
            <img src={temeprature.icon} alt={temeprature.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
  //axios.get(url).then(showWeather);
}
