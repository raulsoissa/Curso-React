import React from 'react';
import WeatherData from './WeatherData/index';
import Location from './Location';

const WeatherLocation = () => (
    <div>
        <Location city={"Santiago"}></Location>
        <WeatherData></WeatherData>
    </div>
    
);


export default WeatherLocation;