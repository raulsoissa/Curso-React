import React, { Component } from 'react';
import WeatherData from './WeatherData/index';
import Location from './Location';
import './styles.css';
import {
    CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY,
} from './../../constants/weathers';

const data = {
    temperature: 25,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 15,
    weatherState: WINDY,
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
        console.log("actualizado");
        this.setState({
            city: 'San Vicente',
            data: data2,
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