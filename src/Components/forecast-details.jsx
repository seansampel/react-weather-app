import React from 'react';
import moment from 'moment';
import WeatherIcon from 'react-icons-weather';

import '../styles/app.css';

const ForecastDetails = props => {
  const { date, wind, humidity, temperature } = props.forecast;

  return (
    <div className={'forescast-details'}>
      <span>
        Date:
        {moment(date).format('DD-MMM-YY ')}
      </span>
      <br />
      <span>
        <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90" />
      </span>
      <br />
      <span>
        Max Temp: {temperature.max}°C
        <br />
        Min Temp: {temperature.min}°C
      </span>
      <br />
      <span>
        Humidity:
        {humidity}%
      </span>
      <br />
      <span>
        Wind speed:
        {wind.speed}mph
      </span>
    </div>
  );
};

export default ForecastDetails;
