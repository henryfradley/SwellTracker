import React from 'react';
import TideChart from './TideChart.jsx';
import { RiSunCloudyFill } from "react-icons/ri";

let Main = function(props) {



  return (
    <div style={styles.window}>
      <h1 style={styles.head}>SURF REPORT</h1>
      <div style={styles.info}>HONOLULU, HI</div>
      <div style={styles.details}>Friday, December 18</div>
      <div style={styles.info}><RiSunCloudyFill size="50px" /></div>
      <div style={styles.info}>
      <div style={styles.details}>70° Partly Cloudy</div>
      <div style={styles.details}>Wind: 15-30mph ENE</div>
      <div style={styles.details}>Swells: 3ft 18s SSW, 1.2ft 17s SSE</div>
      <div></div>
      <TideChart />

       </div>



    </div>

  )

}
const styles = {
  window: {
    border: '2px solid black',
    width: '30%',
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
  }

}

export default Main;


{/* <form onSubmit={console.log('submitted!')}>
        <input required type="text" name="local"></input>
        <input type="submit" value="search"></input>
       </form> */}
