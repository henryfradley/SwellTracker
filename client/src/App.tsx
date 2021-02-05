import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import Main from '../components/Main.tsx';
// import Error from '../components/Error.jsx';
const converters = require('../../helpers/converters.ts');
const key = require('../../dev_config.js')
// import * as Logo from '../public/SwellTracker.png'
import Nav from '../components/Nav.tsx';

interface State {
  data: object,
  error: boolean,
  waveData: object,
  dataLoaded: object,
  newLocation: string,
  location: object,
  tides: object
}


class App extends React.Component <State> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: {},
      error: false,
      waveData: {},
      dataLoaded: {
        spotData: false
      },
      newLocation: 'Waimea bay',
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

  handleChange(event: any) {
    event.preventDefault();
    let location = event.target.value;
    this.setState({
      newLocation: location
    })
  }

  async newLocation(event: any) {
    if (event) {
      event.preventDefault();
    }

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
    console.log('info', info)
    if (info === undefined) {
      this.setState({
        error: true
      })
    } else {


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
    .catch((error) => {
      this.setState({
        error: true
      })
    })




    let swellDataForDay = [];
    for (let i = 0; i <= 27; i++) {
      swellDataForDay.push(secondResponse.data.hours[i])
    }
    let waveHeights = [];
    let secondaryWaveHeights = [];

    for (let j = 0; j <= 27; j+=3) {
      let height = parseFloat(swellDataForDay[j].swellHeight.noaa);
      height = converters.meterConverter(height);

      let secondaryHeight = parseFloat(swellDataForDay[j].secondarySwellHeight.noaa);
      secondaryHeight = converters.meterConverter(secondaryHeight);

      waveHeights.push(height);
      secondaryWaveHeights.push(secondaryHeight);
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


    let tideData = thirdResponse.data;
    let todaysTides = [];
    for (let i = 0; i < 4; i++) {
      todaysTides.push(tideData.data[i]);
    }
    let now = new Date();

    // let closestTide = converters.closestTime(now, todaysTides)

    let nextTide = todaysTides[3];
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

    todaysWaveData = {
      primary: [],
      secondary: []
    };


    }
  }

  // componentDidMount() {
  //   this.newLocation();
  // }








  render() {

    return (
      <div>
        {/* {!this.state.error ? <Main logo={Logo} name={this.state.location.name} location={this.state.location} data={this.state.data} waveData={this.state.waveData} handleChange={this.handleChange} handleSubmit={this.newLocation} tides={this.state.tides} dataLoaded={this.state.dataLoaded} /> : <Error logo={Logo} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>} */}
        <Nav />

      </div>
    );
  }
}





ReactDOM.render(<App />, document.getElementById('app'));
