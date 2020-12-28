import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import Main from '../components/Main.jsx';
// import styled from 'styled-components';
import TideChart from '../components/TideChart.jsx';
// import Tides from '../components/Tides.jsx';
import converters from '../../helpers/converters.js';
const key = require('../../dev_config.js')


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      newLocation: '',
      location: {
        name: '',
        lat: 0,
        long: 0
      }
    }
    this.newLocation = this.newLocation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    event.preventDefault();
    let location = event.target.value;
    this.setState({
      newLocation: location
    })
  }

  newLocation(event) {
    event.preventDefault();
    let location = this.state.newLocation;
    this.setState({
      location: {
        name: location
      }
    })
    const params = {
      access_key: key.positionStack,
      query: location
    }
    axios.get('http://api.positionstack.com/v1/forward', {params})
        // let location = this.state.location.name;

      .then(response => {
        // const data = response.data
        console.log('location!', response.data.data[0])
        let info = response.data.data[0];
        console.log('info', info)

        let locationInfo = {
          name: info.name,
          lat: info.latitude,
          long: info.longitude
        };
        this.setState({
          location: locationInfo
        })
        console.log('newData??', this.state.location)


      })
      .catch(error => {
        console.log(error);
      })

  }






  // handleSubmit() {
  //   let location = this.state.location.name;
  //   // let location = this.state.location.name;
  //   const params = {
  //     access_key: key.positionStack,
  //     query: location
  //   }

  //   axios.get('http://api.positionstack.com/v1/forward', {params})
  //     .then(response => {
  //       // const data = response.data
  //       console.log('location!', response.data.data[0])
  //       let info = response.data.data[0];
  //       console.log('info', info)

  //       let locationInfo = {
  //         locationName: info.name,
  //         lat: info.latitude,
  //         long: info.longitude
  //       };
  //       this.setState({
  //         location: locationInfo
  //       })
  //       .then(console.log('state?', this.state.location))




  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })



  //   let lat = this.state.location.lat;
  //   let lng = this.state.location.long;
  //   console.log('lat', lat);
  //   console.log('long', lng);
  //   let param = 'windSpeed,windDirection,airTemperature,swellDirection,swellHeight,swellPeriod,secondarySwellPeriod,secondarySwellDirection,secondarySwellHeight,cloudCover';

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
  //     let speed = converters.mpsConverter(currentData.windSpeed.noaa);
  //     let currentWindDirection = converters.directionToEnglish(currentData.windDirection.noaa);
  //     let temp = converters.celciusConverter(currentData.airTemperature.noaa)
  //     let swellDir = converters.directionToEnglish(currentData.swellDirection.noaa);
  //     let swellHt = converters.meterConverter(currentData.swellHeight.noaa);
  //     let period = currentData.swellPeriod.noaa
  //     let secondSwellDir = converters.directionToEnglish(currentData.secondarySwellDirection.noaa);
  //     let secondSwellHt = converters.meterConverter(currentData.secondarySwellHeight.noaa);
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
  // }


  render() {
    return (
      <div >
      <Main name={this.state.location.name} location={this.state.location} data={this.state.data} handleChange={this.handleChange} handleSubmit={this.newLocation} />
      {/* <Tides name={this.state.location.name} /> */}
      </div>
    );
  }
}





ReactDOM.render(<App />, document.getElementById('app'));
