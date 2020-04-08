import React from 'react';
import WeatherIcon from 'react-icons-weather';
import PropTypes from 'prop-types';
import {
    CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY,
} from './../../../constants/weathers';

const icons = {
    [CLOUD] : "801",
    [CLOUDY] : "803",
    [SUN] : "800",
    [RAIN] : "500",
    [SNOW] : "600",
    [WINDY] : "200"
};
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcon name="owm" iconId={icon}/>
    else 
        return <WeatherIcon name="owm" iconId={"200"}/>
};
const WeatherTemperature = ({ temperature, weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)} 
        <span>{`${temperature} C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;