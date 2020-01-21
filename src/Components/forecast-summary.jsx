import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment';

const ForecastSummary = props => {
  return (
    <div className="forecast-summary">
      <span>{Moment(props.date).format('ddd Do MMM')}</span>
      <br />
      <br />
      <span>
        <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90" />
      </span>
      <br />
      <br />
      <span>
        {props.temperature}
        &deg;c
      </span>
      <br />
      <span>{props.description}</span>
      <br />
      <button value={props.date} onClick={props.onSelect}>
        More info
      </button>
    </div>
  );
};

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }),
  onForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
