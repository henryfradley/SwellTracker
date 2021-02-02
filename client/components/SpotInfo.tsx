import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiDayCloudy } from "react-icons/wi";
import spot from '../src/spot.module.scss'



let SpotInfo = (props: any) => {
  console.log('spotInfo', props)

  let weatherIcons = function(cloudCover: number) {
    if (cloudCover >= 0 && cloudCover <= 25) {return <WiDaySunny color="#ffcc00" size="100px"/>}
    if (cloudCover > 25 && cloudCover <= 50) {return <WiDayCloudy color="#6699ff" size="100px"/>}
    if (cloudCover > 50 && cloudCover <= 75) {return <WiCloudy color="#6699ff" size="100px"/>}
    if (cloudCover > 75) {return <WiRain color="#6699ff" size="100px"/>}
  }
  let forecast = function(cloudCover: number) {
    if (cloudCover >= 0 && cloudCover <= 25) {return 'Sunny'}
    if (cloudCover > 25 && cloudCover <= 50) {return 'Partly Cloudy'}
    if (cloudCover > 50 && cloudCover <= 75) {return 'Mostly Cloudy'}
    if (cloudCover > 75) {return 'Rainy'}
  }

  return (


    <div className={spot.spotInfo}>
        <div className={spot.info}>{props.location.name}</div>
        <div className={spot.info}>{weatherIcons(props.data.cloudCover)}</div>
        <div className={spot.tempInfo}>{props.data.airTemp}° {forecast(props.data.cloudCover)}</div>
        <div className={spot.details}>Wind: <span className={spot.liveData}>{props.data.windSpeed}mph {props.data.windDirection}</span></div>
        <div className={spot.details}>Primary Swell: <span className={spot.liveData}>{props.data.swellHeight}ft {props.data.swellPeriod}s {props.data.swellDirection}</span></div>
        <div className={spot.details}>Secondary Swell: <span className={spot.liveData}>{props.data.scndSwellHt}ft {props.data.scndPeriod}s {props.data.scndDirection}</span></div>
        <div className={spot.details}>Next tide: <span className={spot.liveData}>{props.tides.type} {props.tides.ft}ft {props.tides.time}</span></div>

    </div>

  )
}


export default SpotInfo;