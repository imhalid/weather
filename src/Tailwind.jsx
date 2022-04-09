import "./Tailwind.css";

const Tailwind = (props) => {
  const { weather } = props;

  if (!weather) {
    return <div>Lokasyon izin vermeniz gerekir...</div>;
  }

  return (
    <div className="container">
      <div className="card">
        <div className="weatherData">
          {new Date(weather.dt * 1000).toLocaleDateString()}
        </div>
        <Datas
          temp={weather.main.temp}
          icon={weather.weather[0].icon}
          name={weather.name}
        />
        <Status
          humidity={weather.main.humidity}
          wind={weather.wind.speed}
          visibility={weather.visibility * 0.001}
        />
      </div>
    </div>
  );
};

export default Tailwind;

const Datas = (props) => {
  return (
    <div className="datas">
      <div className="dataIcon"></div>
      <img
        alt="denemem"
        src={`http://openweathermap.org/img/wn/${props.icon + "@2x"}.png`}
      />
      <div>
        <div className="dataDate">Today</div>
        <div className="dataTemp">
          <span className="tempValue">{props.temp}</span>
          <span className="tempProp">℃</span>
        </div>
        <div className="dataName">{props.name}</div>
      </div>
    </div>
  );
};

const Status = (props) => {
  return (
    <div className="status">
      <div className="valueStatus">
        <div className="valueIcon">
          <FluentWeatherDuststorm20Filled />
        </div>
        <div className="valueValue">{props.wind} km/h</div>
        <div className="valueName">Wind</div>
      </div>
      <div className="valueStatus">
        <div className="valueIcon">
          <CarbonHumidity />
        </div>
        <div className="valueValue">{props.humidity}%</div>
        <div className="valueName">Humidity</div>
      </div>
      <div className="valueStatus">
        <div className="valueIcon">
          <IcBaselineRemoveRedEye />
        </div>
        <div className="valueValue">{props.visibility} Km</div>
        <div className="valueName">Visibility</div>
      </div>
    </div>
  );
};

export function FluentWeatherDuststorm20Filled(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        d="M6.75 14.5a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5Zm0 1.5a.25.25 0 1 0 0 .5a.25.25 0 0 0 0-.5Zm8.748-8a2.5 2.5 0 1 1 0 5l-.052-.002l-.114.009l-.742-.001c.112.271.174.568.174.88a2.35 2.35 0 0 1-2.375 2.378c-1.003 0-1.74-.444-2.13-1.176a.75.75 0 0 1 1.271-.79l.1.163c.136.194.36.303.76.303a.85.85 0 0 0 .874-.878c0-.44-.362-.815-.844-.866l-.215-.013H2.75a.75.75 0 0 1-.102-1.493l.102-.007h12.582l.048.002l.059-.007l.176-.009a1 1 0 1 0-1.009-1.449l-.09.207a.75.75 0 0 1-1.368-.607A2.502 2.502 0 0 1 15.498 8Zm-6-5.005a3.5 3.5 0 0 1 .435 6.974l-.1.02l-.103.006H2.75a.75.75 0 0 1-.102-1.493l.102-.007h6.749a2 2 0 1 0-2-2a.75.75 0 0 1-1.5 0a3.5 3.5 0 0 1 3.5-3.5ZM3.75 3a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5Zm12.5-1a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5ZM3.75 4.5a.25.25 0 1 0 0 .5a.25.25 0 0 0 0-.5Zm12.5-1a.25.25 0 1 0 0 .5a.25.25 0 0 0 0-.5Z"
      ></path>
    </svg>
  );
}

export function CarbonHumidity(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        d="M23.476 13.993L16.847 3.437a1.04 1.04 0 0 0-1.694 0L8.494 14.043A9.986 9.986 0 0 0 7 19a9 9 0 0 0 18 0a10.063 10.063 0 0 0-1.524-5.007ZM16 26a7.009 7.009 0 0 1-7-7a7.978 7.978 0 0 1 1.218-3.943l.935-1.49l10.074 10.074A6.977 6.977 0 0 1 16 26.001Z"
      ></path>
    </svg>
  );
}

export function IcBaselineRemoveRedEye(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
      ></path>
    </svg>
  );
}

export function MdiWeatherPartlyLightning(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19 15a3 3 0 0 0-1 .17V15c0-1.81-.81-3.44-2.08-4.54c.43-2.43-.82-4.96-3.17-5.99c-2.78-1.23-6.03.03-7.25 2.78c-.9 1.99-.5 4.2.77 5.75H6a4 4 0 0 0-4 4a4 4 0 0 0 4 4h1s1 0 1-1s-1-1-1-1H6a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2a4 4 0 0 1 4-4a4 4 0 0 1 4 4v2h3a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-2s-1 0-1 1s1 1 1 1h2a3 3 0 0 0 3-3a3 3 0 0 0-3-3m-7-6c-1.84 0-3.5.83-4.59 2.13c-.48-.91-.56-2.04-.1-3.06a3.487 3.487 0 0 1 4.62-1.77c1.25.56 2.01 1.76 2.07 3.04c-.62-.22-1.3-.34-2-.34m1.55-6.37c-.55-.23-1.1-.4-1.67-.51l2.49-1.3l.9 2.89c-.51-.42-1.08-.78-1.72-1.08m-7.46.81c-.49.35-.92.75-1.29 1.19l.11-2.81l2.96.68c-.62.21-1.22.53-1.78.94M18 8.71c-.09-.59-.22-1.16-.41-1.71l2.38 1.5l-2.05 2.23c.11-.65.13-1.33.08-2.02M3.04 10.3c.07.6.21 1.17.39 1.7l-2.37-1.5L3.1 8.28c-.1.65-.13 1.33-.06 2.02M11.8 15h2.45l-1.64 3.27h1.64L11.18 24l.62-4.09H9.75"
      ></path>
    </svg>
  );
}
