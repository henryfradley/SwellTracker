import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import Main from '../components/Main.jsx';
import './index.css'
import converters from '../../helpers/converters.js';
const key = require('../../dev_config.js')
import Logo from '../public/SwellTracker.png'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      waveData: {},
      dataLoaded: {
        spotData: false
      },
      newLocation: '',
      location: {
        name: ''
      },
      tides: {
        ft: '',
        type: '',
        time: ''
      }
    }
    this.newLocation = this.newLocation.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    event.preventDefault();
    let location = event.target.value;
    this.setState({
      newLocation: location
    })
  }

  async newLocation(event) {
    event.preventDefault();

    this.setState({
      data: {},
      waveData: {},
      dataLoaded: {
        spotData: false
      },
      location: {},
      tides: {}
    })

    let location = this.state.newLocation;
    const params = {
      access_key: key.positionStack,
      query: location
    }
    const firstResponse = await axios.get('http://api.positionstack.com/v1/forward', {params});
    let info = firstResponse.data.data[0];
    let locationInfo = {
      name: info.name,
      lat: info.latitude,
      long: info.longitude
    };

    const [secondResponse, thirdResponse] = await Promise.all([
      axios.get(`https://api.stormglass.io/v2/weather/point?lat=${locationInfo.lat}&lng=${locationInfo.long}&params=windSpeed,windDirection,airTemperature,swellDirection,swellHeight,swellPeriod,secondarySwellPeriod,secondarySwellDirection,secondarySwellHeight,cloudCover`, {
        headers: {
          Authorization: key.stormglass
        }
      }),
      axios.get(`https://api.stormglass.io/v2/tide/extremes/point?lat=${locationInfo.lat}&lng=${locationInfo.long}`, {
        headers: {
          Authorization: key.stormglass
        }
      })
    ])


    let swellDataForDay = [];
    for (let i = 0; i <= 25; i++) {
      swellDataForDay.push(secondResponse.data.hours[i])
    }
    let waveHeights = [];
    let secondaryWaveHeights = [];

    for (let j = 0; j <= 25; j++) {
      let height = parseFloat(swellDataForDay[j].swellHeight.noaa);
      height = converters.meterConverter(height);
      height = height * 25;
      let chartPosition = 300 - height;
      let secondaryHeight = parseFloat(swellDataForDay[j].secondarySwellHeight.noaa);
      secondaryHeight = converters.meterConverter(secondaryHeight);
      secondaryHeight = secondaryHeight * 25;
      let secondChartPosition = 300 - secondaryHeight;

      waveHeights.push(chartPosition);
      secondaryWaveHeights.push(secondChartPosition);
    }

    let todaysWaveData = {
      primary: waveHeights,
      secondary: secondaryWaveHeights
    }


    let currentData = secondResponse.data.hours[0];
    let speed = converters.mpsConverter(currentData.windSpeed.noaa);
    let currentWindDirection = converters.directionToEnglish(currentData.windDirection.noaa);
    let temp = converters.celciusConverter(currentData.airTemperature.noaa)
    let swellDir = converters.directionToEnglish(currentData.swellDirection.noaa);
    let swellHt = converters.meterConverter(currentData.swellHeight.noaa);
    let period = Math.round(currentData.swellPeriod.noaa)
    let secondSwellDir = converters.directionToEnglish(currentData.secondarySwellDirection.noaa);
    let secondSwellHt = converters.meterConverter(currentData.secondarySwellHeight.noaa);
    let secondPeriod = Math.round(currentData.secondarySwellPeriod.noaa);
    let clouds = currentData.cloudCover.noaa;
    let updatedData = {
      windSpeed: speed,
      windDirection: currentWindDirection,
      airTemp: temp,
      swellDirection: swellDir,
      swellHeight: swellHt,
      swellPeriod: period,
      scndDirection: secondSwellDir,
      scndSwellHt: secondSwellHt,
      scndPeriod: secondPeriod,
      cloudCover: clouds
    }

    //tidedata
    let tideData = thirdResponse.data;
    let todaysTides = [];
    for (let i = 0; i < 4; i++) {
      todaysTides.push(tideData.data[i]);
    }
    let now = new Date();

    let closestTide = converters.closestTime(now, todaysTides)

    let nextTide = todaysTides[closestTide];
    let ht = converters.meterConverter(nextTide.height);
    let nextTime = converters.timeConverter(nextTide.time);
    let hiOrLow = nextTide.type;
    let tideInfo = {
      ft: ht,
      time: nextTime,
      type: hiOrLow
    }

    this.setState({
      location: {name: locationInfo.name},
      data: updatedData,
      dataLoaded: {spotData: true},
      waveData: todaysWaveData,
      tides: tideInfo,
      newLocation: ''
    })

    todaysWaveData = {};



  }








  render() {

    return (
      <div>
      <Main logo={Logo} name={this.state.location.name} location={this.state.location} data={this.state.data} waveData={this.state.waveData} handleChange={this.handleChange} handleSubmit={this.newLocation} tides={this.state.tides} dataLoaded={this.state.dataLoaded} />
      </div>
    );
  }
}





ReactDOM.render(<App />, document.getElementById('app'));
