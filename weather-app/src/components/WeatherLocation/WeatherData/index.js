import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY,
} from './../../../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={SUN}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={"10 ms/S"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;