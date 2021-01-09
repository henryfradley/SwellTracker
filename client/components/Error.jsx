import React from 'react';
import main from '../src/main.module.css';


const Error = (props) => {
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
    <div className={main.error}>SORRY AN ERROR OCCURED! EITHER THE MAX REQUESTS FOR DAY HAVE BEEN REACHED OR LOCATION IS INVALID</div>
    <div className={main.info}>
      <form className={main.form} onSubmit={props.handleSubmit}>
        <input onChange={props.handleChange} className={main.input} type="text" placeholder="new location..."></input>
        <input className={main.search} type="submit" value="Go"></input>
      </form>
    </div>


  </div>



  )
}

export default Error;