import React from 'react';
import SpotInfo from './SpotInfo.jsx';
import WaveChart from './WaveChart.jsx';
import Loader from 'react-loader-spinner';
// import Error from './Error.jsx';
import { FaArrowUp } from "react-icons/fa";
import main from '../src/main.module.css'






let Main = function(props) {



let today = new Date();
today = today.toString();
today = today.split(' ');
let properFormat = `${today[0]}, ${today[1]} ${today[2]}, ${today[3]}`;






  return (

      <div className={main.window}>
        <div>
          <img className={main.logo} width="350px" src={props.logo}></img>
        </div>

        <div className={main.details}>{properFormat}</div>


        {props.dataLoaded.spotData ? <SpotInfo location={props.location} data={props.data} tides={props.tides} /> : <div className={main.loader}><Loader type="ThreeDots" color="#80aaff" height={50} width={50}/></div> }

        {props.dataLoaded.spotData ? <WaveChart waveData={props.waveData} /> : null}




        <div className={main.info}>
          <form className={main.form} onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} className={main.input} type="text" placeholder="new location..."></input>
            <input className={main.search} type="submit" value="Go"></input>
          </form>
        </div>


      </div>



  )

}


export default Main;


