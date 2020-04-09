import React from 'react';
import WeatherIcon from 'react-icons-weather';
import PropTypes from 'prop-types';
import {
    CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY,
} from './../../../constants/weathers';
import './styles.css';

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

    const sizeIcon = "4x" 

    if (icon)
        return <WeatherIcon className="wicon" name="owm" iconId={icon} size={sizeIcon}/>
    else 
        return <WeatherIcon className="wicon" name="owm" iconId={"200"} size={sizeIcon}/>
};
const WeatherTemperature = ({ temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)} 
        <span className="temperature">{`${temperature}`}</span> 
        <span className="temperatureType">{` C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;