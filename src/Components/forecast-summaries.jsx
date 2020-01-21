import React from 'react';
import WeatherIcon from 'react-icons-weather';
import ForecastSummary from './forecast-summary';
import '../styles/forecast-summaries.css';

const ForecastSummaries = props => {
  return (
    <div className="forecast-summaries">
      {props.forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={<WeatherIcon name="owm" iconId={forecast.icon} flip="horizontal" rotate="90" />}
          temperature={forecast.temperature.max}
          onSelect={props.onForecastSelect}
        />
      ))}
    </div>
  );
};

export default ForecastSummaries;
