// import Search from "./components/Search/Search";
// import "./App.css";
// import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
// import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/api";
// import { useState } from "react";

// const App = () => {
//   const [currentWeathers, setCurrentWeathers] = useState(null);
//   const [forecast, setForecast] = useState(null);
//   const handleOnSearchChange = (SearchData) => {
//     const [lat, lon] = SearchData.value.split(" ");
//     const currentWeatherFetch = fetch(
//       `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
//     );
//     const forecastFetch = fetch(
//       `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
//     );
//   };
//   Promise.all([currentWeatherFetch, forecastFetch])
//     .then(async (response) => {
//       const weatherResponse = await response[0].json();
//       const forecastResponse = await response[1].json();
//       setCurrentWeathers({ city: searchData.label, ...weatherResponse });
//       setForecast({ city: searchData.label, ...forecastResponse });
//     })
//     .catch((err) => console.log(err));
//   console.log(currentWeather);
//   console.log(forecast);
//   return (
//     <div className="container">
//       <Search onSearchChange={handleOnSearchChange} />
//       {currentWeather && <CurrentWeather data={currentWeather} />}
//     </div>
//   );
// };

import Search from "./components/Search/Search";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/api";
import { useState } from "react";
import Forecast from "./components/Forecast/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
