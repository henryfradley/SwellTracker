import React from 'react';
import SpotInfo from './SpotInfo.jsx'






let Main = function(props) {







// let data = props.data;


  return (
    <div>
      <div style={styles.window}>
        <h1 style={styles.head}>SURF REPORT</h1>
        <div style={styles.details}>Friday, December 18</div>
        {props.data ? <SpotInfo location={props.location} data={props.data} /> : null}
        <div style={styles.info}>
          <form style={styles.form} onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} style={styles.input} type="text" placeholder=""></input>
            <input style={styles.search}type="submit" value="Change Location!"></input>
          </form>
        </div>

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
    padding: '1%'
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
