import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index'
import './styles.css';

const days = [
    'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal'
}

class ForecastExtended extends Component {

    renderForecastItemsDays() {
        return days.map( day  => (<ForecastItem weekDay={day} hour={'10:00'} data={data}></ForecastItem>));
    }

    render() {
        const {city} = this.props;
        return (
            <div>
                <h2 className="forecast-title">Pronóstico Extendido para <br/> {city}</h2>
                {this.renderForecastItemsDays()}
            </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;