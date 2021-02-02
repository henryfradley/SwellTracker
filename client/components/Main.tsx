import React, { lazy } from 'react';
import SpotInfo from './SpotInfo.tsx';
import WaveChart from './WaveChart.tsx';
// const Loader = require('react-loader-spinner');
import { FaArrowUp } from "react-icons/fa";
import main from '../src/main.module.scss'






let Main = function(props: any) {



const today = new Date();
let todayString = today.toString();
let todayArray = todayString.split(' ');
let properFormat = `${todayArray[0]}, ${todayArray[1]} ${todayArray[2]}, ${todayArray[3]}`;






  return (

      <div className={main.window}>
        <div>
          <img className={main.logo} width="350px" src={props.logo} alt="swelltracker"></img>
        </div>

        <div className={main.details}>{properFormat}</div>


        {props.dataLoaded.spotData ? <SpotInfo location={props.location} data={props.data} tides={props.tides} /> : null}




        {props.dataLoaded.spotData ? <WaveChart waveData={props.waveData} /> : null}




        <div className={main.info}>
          <form className={main.form} onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} className={main.input} type="text" placeholder="new location..." id="search"></input>
            <input className={main.search} type="submit" value="Go" id="submit"></input>
          </form>
        </div>


      </div>



  )

}


export default Main;


