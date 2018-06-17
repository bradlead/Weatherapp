import React from 'react';
import WeatherIcon from 'react-icons-weather';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastSummary = props => (
  <div className="Forecast-Summary">
    <div className="forecast-summary__date">
    <span>{moment(props.date).format('ddd Do MMM')}</span>
    </div>
    <div className="forecast-summary__temperature"><span>{props.temperature}</span></div>
    <div className="forecast-summary__description"><span>{props.description}</span></div>
    <div className="forecast-summary__icon">
    <WeatherIcon name="owm" iconId={props.icon} />
    <button onClick={() => props.onSelect(props.date)}>More details</button>
    </div>
    </div>
)
    
/*ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};*/



export default ForecastSummary;
