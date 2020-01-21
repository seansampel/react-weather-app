import React from 'react';
import axios from 'axios';
import LocationDetails from './location-details';
import SearchForm from './search-form';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import '../styles/app.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.handleInputSearchClick = this.handleInputSearchClick.bind(this);
  }

  handleForecastSelect(event) {
    this.setState({
      selectedDate: parseInt(event.target.value, 10),
    });
  }

  componentDidMount() {
    axios.get('https://mcr-codes-weather.herokuapp.com/forecast').then(response => {
      this.setState({
        forecasts: response.data.forecasts,
        location: response.data.location,
        selectedDate: response.data.forecasts[0].data,
      });
    });
  }
  handleInputSearchClick(city) {
    axios
      .get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
      .then(response => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
          selectedCity: response.data.forecasts[0].date,
        });
      })
      .catch(() => {
        alert('UK cities only');
      });
  }

  render() {
    const selectedForecast = this.state.forecasts.find(
      forecast => forecast.date === this.state.selectedDate,
    );

    return (
      <div className="forecast">
        <LocationDetails city={this.state.location.city} country={this.state.location.country} />
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        <br />
        <SearchForm handleInputSearchClick={this.handleInputSearchClick} />
      </div>
    );
  }
}

export default App;
