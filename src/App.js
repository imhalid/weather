import "./App.css";
// import WeatherMap from "./components/WeatherMap";
import Tailwind from "./Tailwind";
import axios from "axios";
import { useState, useEffect } from "react";
import { usePosition } from "use-position";

const App = () => {
  /*
  const [weather, setData] = useState({
    dt: "1649625461",
    main: {
      temp: "14.18",
      humidity: "44",
    },
    wind: {
      speed: "7.72",
    },
    weather: [
      {
        icon: "10n",
        description: "Clouds",
        main: "Clear",
      },
    ],
    name: "New York",
    visibility: "10000",
  });
  const [location, setLocation] = useState("");
  const key = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
*/

  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    //const lang = navigator.language.split("-")[0]; &lang=${lang}
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
      );
      setWeather(data);
    } catch {
      alert("Api Error");
    }
  };

  useEffect(() => {
    if (latitude && longitude) {
      getWeatherData(latitude, longitude);
    }
  }, [latitude, longitude]);

  console.log(weather);

  return (
    <div className="App">
      {/* <WeatherMap weather={weather} /> */}

      <Tailwind weather={weather} />
    </div>
  );
};

export default App;
