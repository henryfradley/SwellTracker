import React from 'react';
import { RiSunCloudyFill, RiSunLine } from "react-icons/ri";
import { loRainySharp } from "react-icons/io";

let Main = function(props) {

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
    <div style={styles.background}>
      <div style={styles.window}>
        <h1 style={styles.head}>SURF REPORT</h1>
        <div style={styles.info}>HONOLULU, HI</div>
        <div style={styles.details}>Friday, December 18</div>
        <div style={styles.info}>{weatherIcons(props.data.cloudCover)}</div>
        <div style={styles.info}>
        <div style={styles.details}>{props.data.airTemp}° {forecast(props.data.cloudCover)}</div>
        <div style={styles.details}>Wind: {props.data.windSpeed}mph {props.data.windDirection}</div>
        <div style={styles.details}>Primary Swell: {props.data.swellHeight}ft {props.data.swellPeriod}s {props.data.swellDirection}</div>
        <div style={styles.details}>Secondary Swell: {props.data.scndSwellHt}ft {props.data.scndPeriod}s {props.data.scndDirection}</div>
        <form style={styles.form} onSubmit={props.handleSubmit}>
          <input onChange={props.handleChange} value={props.name} style={styles.input} required type="text" placeholder=""></input>
          <input style={styles.search}type="submit" value="Change Location!"></input>
        </form>
        </div>
      </div>
    </div>


  )

}
const styles = {
  window: {
    backgroundColor: 'white',
    marginTop: '4%',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '2px solid black',
    width: '400px',
    height: '600px',
    'border-radius': '20px'
  },
  head: {
    color: 'black',
    'text-align': 'center',
    'font-family': 'sans-serif',
    padding: '0px'

  },
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
  },
  form: {
    display: 'inline-block'

  },
  input: {
    width: '80%',
    height: '25px',
    outline: 'none',
    border: '.5px solid black',
    borderRadius: '5px',
    textAlign: 'center'
  },
  search: {
    marginTop: '20px',
    width: '70%'
  }

}

export default Main;


{/* <form onSubmit={console.log('submitted!')}>
        <input required type="text" name="local"></input>
        <input type="submit" value="search"></input>
       </form> */}
