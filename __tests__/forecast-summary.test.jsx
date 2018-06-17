import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../src/components/forecast-summary';
import ForecastSummaries from '../src/components/forecast-summaries';
import WeatherIcon from 'react-icons-weather';

it('renders the date', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="Sun 11 Mar"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));

  expect(wrapper.find('.forecast-summary__date').text()).toEqual('Sun 11th Mar');
});

it('renders the temperature', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));

  expect(wrapper.find('.forecast-summary__temperature').text()).toEqual('mockTemperature');
});

it('renders the description', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));

  expect(wrapper.find('.forecast-summary__description').text()).toEqual('mockDescription');
});

it('renders the icon', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="800"
    />
  ));

  expect(wrapper.find(WeatherIcon)).toHaveLength(1);
});

