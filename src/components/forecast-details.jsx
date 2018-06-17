import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import WeatherIcon from 'react-icons-weather';

const ForecastDetails = props => (
    <div className="forecast-details">
        <div className="forecast-details__date">
            <span>{Moment(props.forecast.date).format('ddd Do MMM')}</span>
        </div>
        <div className="forecast-details__maxtemp">
            <span>{props.forecast.temperature.max}</span>
        </div>
        <div className="forecast-details__mintemp">
            <span>{props.forecast.temperature.min}</span>
        </div>
        <div className="forecast-details__humidity">
            <span>{props.forecast.humidity}</span>
        </div>
        <div className="forecast-details__speed">
            <span>{props.forecast.wind.speed}</span>
        </div>
        <div className="forecast-details__direction">
            <span>{props.forecast.wind.direction}</span>
        </div>
    </div>
)

/*ForecastDetails.propTypes = {
    forecast: PropTypes.shape({
        date: PropTypes.number.isRequired,
        temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
        }).isRequired,
        wind: PropTypes.shape({
            speed: PropTypes.number,
            direction: PropTypes.string,
        }).isRequired,
        humidity: PropTypes.number.isRequired,
    }).isRequired, 
};*/

export default ForecastDetails;