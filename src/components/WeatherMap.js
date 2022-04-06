//import { useParams } from "react-router-dom";

const WeatherMap = (props) => {
  const { weather } = props;

  if (!weather) {
    return <div>Lokasyon izin vermeniz gerekir...</div>;
  }
  return (
    <div>
      <h1>Name: {weather.name}</h1>
      <h3>
        Description:{" "}
        {weather.weather.map((data) => data.description).join(", ")}
      </h3>
      <p>Temp: {weather.main.temp} santigrad</p>
      <p>Humidity: {weather.main.humidity} %</p>
      <p>Date: {new Date(weather.dt * 1000).toLocaleDateString()}</p>
    </div>
  );
};

export default WeatherMap;
