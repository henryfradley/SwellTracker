import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import Main from '../components/Main.jsx';
// import styled from 'styled-components';
import TideChart from '../components/TideChart.jsx';
const key = require('../../dev_config.js')


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      location: {
        name: 'Honolulu',
        lat: 21.30694,
        long: -157.85833
      }
    }
    this.newLocation = this.newLocation.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  celciusConverter(temp) {
    let fahrenheit = (temp * 9/5) + 32;
    return Math.round(fahrenheit);
  }

  meterConverter(height) {
    let feet = height / 0.3048;
    return Math.round(feet);
  }
  mpsConverter(speed) {
    let mph = speed * 2.237;
    return Math.round(mph);
  }

  directionToEnglish(dir) {
    if (dir <= 11.25 || dir >= 348.75) {return 'N'}
    if (dir > 11.25 && dir <= 33.75) {return 'NNE'}
    if (dir > 33.75 && dir <= 56.25) {return 'NE'}
    if (dir > 56.25 && dir <= 78.75) {return 'ENE'}
    if (dir > 78.75 && dir <= 101.25) {return 'E'}
    if (dir > 101.25 && dir <= 123.75) {return 'ESE'}
    if (dir > 123.75 && dir <= 146.25) {return 'SSE'}
    if (dir > 146.25 && dir <= 168.75) {return 'SE'}
    if (dir > 168.75 && dir <= 191.25) {return 'S'}
    if (dir > 191.25 && dir <= 213.75) {return 'SSW'}
    if (dir > 213.75 && dir <= 236.25) {return 'SW'}
    if (dir > 236.25 && dir <= 258.75) {return 'WSW'}
    if (dir > 258.75 && dir <= 281.25) {return 'W'}
    if (dir > 281.25 && dir <= 303.75) {return 'WNW'}
    if (dir > 303.75 && dir <= 326.25) {return 'NW'}
    if (dir > 326.25 && dir <= 348.75) {return 'NNW'}
  }

  handleChange(event) {
    this.setState({
      location: event.target.value
    })
    console.log(this.state.location.name)
  }

  newLocation(event) {
    console.log(event.target.value)

   this.setState({
     location: {
       name: event.target.value
     }
   });
   console.log('newName', this.state.location.name)
  }

  componentDidMount() {
    let location = 'honolulu'
    // let location = this.state.location.name;
    const params = {
      access_key: key.positionStack,
      query: location
    }

    axios.get('http://api.positionstack.com/v1/forward', {params})
      .then(response => {
        // const data = response.data
        console.log('location!', response.data.data[0])
        let info = response.data.data[0];
        console.log('info', info)

        let locationInfo = {
          locationName: info.name,
          lat: info.latitude,
          long: info.longitude
        };
        this.setState({
          location: locationInfo
        })
        .then(console.log('state?', this.state.location))




      })
      .catch(error => {
        console.log(error);
      })



    let lat = this.state.location.lat;
    let lng = this.state.location.long;
    console.log('lat', lat);
    console.log('long', lng);
    let param = 'windSpeed,windDirection,airTemperature,swellDirection,swellHeight,swellPeriod,secondarySwellPeriod,secondarySwellDirection,secondarySwellHeight,cloudCover';

  //   fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${param}`, {
  //     headers: {
  //       Authorization: key.stormglass
  //     }
  //   })
  //   .then(async response => {
  //     const data = await response.json();
  //     console.log('data', data);
  //     console.log('hours', data.hours[0]);
  //     const currentData = data.hours[0];
  //     let speed = this.mpsConverter(currentData.windSpeed.noaa);
  //     let currentWindDirection = this.directionToEnglish(currentData.windDirection.noaa);
  //     let temp = this.celciusConverter(currentData.airTemperature.noaa)
  //     let swellDir = this.directionToEnglish(currentData.swellDirection.noaa);
  //     let swellHt = this.meterConverter(currentData.swellHeight.noaa);
  //     let period = currentData.swellPeriod.noaa
  //     let secondSwellDir = this.directionToEnglish(currentData.secondarySwellDirection.noaa);
  //     let secondSwellHt = this.meterConverter(currentData.secondarySwellHeight.noaa);
  //     let secondPeriod = currentData.secondarySwellPeriod.noaa;
  //     let clouds = currentData.cloudCover.noaa;
  //     let updatedData = {
  //       windSpeed: speed,
  //       windDirection: currentWindDirection,
  //       airTemp: temp,
  //       swellDirection: swellDir,
  //       swellHeight: swellHt,
  //       swellPeriod: period,
  //       scndDirection: secondSwellDir,
  //       scndSwellHt: secondSwellHt,
  //       scndPeriod: secondPeriod,
  //       cloudCover: clouds
  //     }
  //     this.setState({
  //       data: updatedData
  //     })
  // })
  }






  render() {
    return (
      <div >
      <Main name={this.state.location.name} data={this.state.data} handleChange={this.handleChange} handleSubmit={this.newLocation} />
      </div>
    );
  }
}





ReactDOM.render(<App />, document.getElementById('app'));
