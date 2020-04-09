import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import { api_weather} from './../../constants/api_url';
import WeatherData from './WeatherData/index';
import Location from './Location';
import './styles.css';
import {
    SUN
} from './../../constants/weathers';

const data = {
    temperature: 25,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Santiago',
            data: data,
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            
            const newWeather = transformWeather(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather
            });
        });
    }
    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location> {/* el {city} debe ser {this.state.city} pero en la linea 29 se igualo aa this.state por lo que se puede poner solo el city o el data */}
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div> 
        );
    }  
};


export default WeatherLocation;