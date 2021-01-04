import React from 'react';
import SpotInfo from './SpotInfo.jsx';
import WaveChart from './WaveChart.jsx';
import Loader from 'react-loader-spinner';
import { FaArrowUp } from "react-icons/fa";






let Main = function(props) {



let today = new Date();
today = today.toString();
today = today.split(' ');
let properFormat = `${today[0]}, ${today[1]} ${today[2]}, ${today[3]}`;






  return (

      <div style={styles.window}>
        <div>
          <img style={styles.logo} width="350px" src={props.logo}></img>
        </div>

        <div style={styles.details}>{properFormat}</div>
        {props.dataLoaded.spotData ? <SpotInfo location={props.location} data={props.data} tides={props.tides} /> : <div style={styles.loader}><Loader type="ThreeDots" color="#80aaff" height={50} width={50}/></div> }


        {props.dataLoaded.spotData ? <WaveChart waveData={props.waveData} /> : null}

        <div style={styles.info}>
          <form style={styles.form} onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} style={styles.input} type="text" placeholder="new location..."></input>
            <input style={styles.search}type="submit" value="Go"></input>
          </form>
        </div>



      </div>



  )

}
const styles = {
  window: {
    boxShadow: '0 0 10px 4px #DCDCDC',
    backgroundColor: 'white',
    marginTop: '4%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '400px',
    paddingTop: '4px',
    paddingBottom: '4px'
  },

  logo: {
    marginLeft: "25px",
    marginRight: "25px",
    marginTop: "18px",
    marginBottom: "10px"

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
    marginBottom: '0px',
    display: 'flex',
    width: '60%',
    marginLeft: '20%',
    marginRight: '20%'

  },
  input: {
    width: '80%',
    height: '25px',
    outline: 'none',
    border: 'none',
    boxShadow: '0 0 5px 1px #DCDCDC',
    textAlign: 'center',
    marginTop: '20px'
  },
  search: {
    marginLeft: '1px',
    marginTop: '20px',
    width: '20%',
    'border-radius': '0px',
    border: 'none',
    boxShadow: '0 0 5px 1px #DCDCDC',
    outline: 'none',
    'background-color': '#80aaff',
    cursor: 'pointer',
    color: "white"
  },
  loader: {
    marginLeft: '175px',
    marginRight: '175px'
  }

}

export default Main;


