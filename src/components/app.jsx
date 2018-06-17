import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import Axios from 'axios';
import SearchForm from './searchform';
import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: 0,
      forecasts:[],
        location: {
          city: '',
          country: '',
        }
      };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.cityForecast = this.cityForecast.bind(this);
  }
  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }
  componentDidMount() {
  Axios.get('https://mcr-codes-weather.herokuapp.com/forecast?city=London') 
  .then(response => this.setState({
    forecasts: response.data.forecasts,
    location: {
      city: response.data.location.city,
      country: response.data.location.country,
    },
  }))
    .catch(error => console.log(error));
  }
  cityForecast(city) {
    Axios.get('https://mcr-codes-weather.herokuapp.com/forecast?city=${city}')
    .then(response => this.setState({
      forecasts: response.data.forecasts,
      location: {
        city: response.data.location.city,
        country: response.data.location.country,
  },
}))
    .catch((error) => {
      console.log(error);
      alert('City not found. Please try again.');
      });
  console.log(`city is: ${city}`);
}
  
  render(){
    const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    
    return (
      <div className="forecast">
      <LocationDetails 
        city={this.state.location.city}
        country={this.state.location.country}
      />
      <SearchForm
        cityForecast={this.cityForecast}
      />
      <ForecastSummaries  
        forecasts={this.state.forecasts}
        handleForecastSelect={this.handleForecastSelect} 
      />
      { selectedForecast && <ForecastDetails forecast={selectedForecast} />
    }
      </div>
    );
  }
}
  

/*App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  //forecasts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
    humidity: PropTypes.number,
}).isRequired,
};*/

export default App;
