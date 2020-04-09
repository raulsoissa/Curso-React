import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from './../../services/transformWeather';
import WeatherData from './WeatherData/index';
import Location from './Location';
import './styles.css';



class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
        console.log("constructor");    
    }

    componentDidMount() {
        console.log("componentDidMount");    
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");       
    } 

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            console.log("handleUpdateClick");         
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });
        });
    }

    render() {
        const { onWeatherLocationClick } = this.props;
        console.log("render");
        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city}></Location> {/* el {city} debe ser {this.state.city} pero en la linea 29 se igualo aa this.state por lo que se puede poner solo el city o el data */}
                {data ? 
                    <WeatherData data={data}></WeatherData> : 
                    <CircularProgress size={50}></CircularProgress>
                }
            </div> 
        );
    }  
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;