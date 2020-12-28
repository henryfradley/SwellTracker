import React from 'react';
import { RiSunCloudyFill, RiSunLine } from "react-icons/ri";
import { loRainySharp } from "react-icons/io";

let SpotInfo = (props) => {

  let weatherIcons = function(cloudCover) {
    if (cloudCover >= 0 && cloudCover <= 25) {return <RiSunLine size="50px"/>}
    if (cloudCover > 25 && cloudCover <= 75) {return <RiSunCloudyFill size="50px"/>}
    if (cloudCover > 75) {return <loRainySharp size="50px"/>}
  }
  let forecast = function(cloudCover) {
    if (cloudCover >= 0 && cloudCover <= 25) {return 'Sunny'}
    if (cloudCover > 25 && cloudCover <= 75) {return 'Partly Cloudy'}
    if (cloudCover > 75) {return 'Rainy'}
  }

  return (

    <div>
        <div style={styles.info}>{props.location.name}</div>
        <div style={styles.info}>{weatherIcons(props.data.cloudCover)}</div>
        <div style={styles.details}>{props.data.airTemp}° {forecast(props.data.cloudCover)}</div>
        <div style={styles.details}>Wind: {props.data.windSpeed}mph {props.data.windDirection}</div>
        <div style={styles.details}>Primary Swell: {props.data.swellHeight}ft {props.data.swellPeriod}s {props.data.swellDirection}</div>
        <div style={styles.details}>Secondary Swell: {props.data.scndSwellHt}ft {props.data.scndPeriod}s {props.data.scndDirection}</div>
    </div>

  )
}
const styles = {
  info: {
    'padding-bottom': '20px',
    color: 'black',
    'text-align': 'center',
    'font-family': 'sans-serif',
    'font-size': '20px'
  },
  details: {
    'padding-bottom': '20px',
    color: 'black',
    'text-align': 'center',
    'font-family': 'sans-serif',
    'font-size': '16px'
  }
}

export default SpotInfo;