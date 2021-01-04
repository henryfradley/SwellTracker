import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiDayCloudy } from "react-icons/wi";

let SpotInfo = (props) => {

  let weatherIcons = function(cloudCover) {
    if (cloudCover >= 0 && cloudCover <= 25) {return <WiDaySunny color="#ffcc00" size="100px"/>}
    if (cloudCover > 25 && cloudCover <= 50) {return <WiDayCloudy color="#6699ff" size="100px"/>}
    if (cloudCover > 50 && cloudCover <= 75) {return <WiCloudy color="#6699ff" size="100px"/>}
    if (cloudCover > 75) {return <WiRain color="#6699ff" size="100px"/>}
  }
  let forecast = function(cloudCover) {
    if (cloudCover >= 0 && cloudCover <= 25) {return 'Sunny'}
    if (cloudCover > 25 && cloudCover <= 50) {return 'Partly Cloudy'}
    if (cloudCover > 50 && cloudCover <= 75) {return 'Mostly Cloudy'}
    if (cloudCover > 75) {return 'Rainy'}
  }

  return (


    <div style={styles.spotInfo}>
        <div style={styles.info}>{props.location.name}</div>
        <div style={styles.info}>{weatherIcons(props.data.cloudCover)}</div>
        <div style={styles.tempInfo}>{props.data.airTemp}° {forecast(props.data.cloudCover)}</div>
        <div style={styles.details}>Wind: <span style={styles.liveData}>{props.data.windSpeed}mph {props.data.windDirection}</span></div>
        <div style={styles.primaryDetails}>Primary Swell: <span style={styles.liveData}>{props.data.swellHeight}ft {props.data.swellPeriod}s {props.data.swellDirection}</span></div>
        <div style={styles.secondaryDetails}>Secondary Swell: <span style={styles.liveData}>{props.data.scndSwellHt}ft {props.data.scndPeriod}s {props.data.scndDirection}</span></div>
        <div style={styles.details}>Next tide: <span style={styles.liveData}>{props.tides.type} {props.tides.ft}ft {props.tides.time}</span></div>

    </div>

  )
}
const styles = {
  info: {
    color: 'black',
    'text-align': 'center',
    'font-family': 'sans-serif',
    'font-size': '18px'
  },
  tempInfo: {
    color: 'black',
    'text-align': 'center',
    'font-family': 'sans-serif',
    'font-size': '16px',
    marginBottom: '20px'
  },
  details: {
    'padding-bottom': '10px',
    color: '#80aaff',
    'text-align': 'center',
    'font-family': 'sans-serif',
    'font-size': '11px'
  },
  secondaryDetails: {
    'padding-bottom': '10px',
    color: '#ff9900',
    'text-align': 'center',
    'font-family': 'sans-serif',
    'font-size': '11px'
  },
  primaryDetails: {
    'padding-bottom': '10px',
    color: '#004de6',
    'text-align': 'center',
    'font-family': 'sans-serif',
    'font-size': '11px'
  },
  liveData: {
    color: 'black',
    'font-size': '11px'
  },
  spotInfo: {
    marginBottom: "10px"
  }
}

export default SpotInfo;