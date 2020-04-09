import React, {Component} from 'react';
import LocationList from './components/LocationList';
import './App.css';
const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Santiago,cl',
  'Madrid,es',
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}>
          onSelectedLocation={this.handleSelectedLocation}
        </LocationList>
      </div>
    );
  }
}

export default App;
