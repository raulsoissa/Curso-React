import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    }
    const strToComponents = cities => (
        cities.map( (city, index) => 
        (
            <WeatherLocation 
                key={index} 
                city={city}>
                onWeatherLocationClick={() => handleWeatherLocationClick(city)}
            </WeatherLocation>))
    );
    
    return (
        <div>
            {strToComponents(cities)}
        </div>
    );
};

LocationList.prototypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;