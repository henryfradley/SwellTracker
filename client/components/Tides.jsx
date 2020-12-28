import TideBars from './TideBars.jsx'
import React from 'react';
import ReactDOM from 'react-dom';

class Tides extends React.Component() {
//   constructor(props) {
//     // super(props)
//     this.state = {
//       tides: [2.2, 2.3, 1.9, 1.7, 1.5, 1.4, .8, .3, .1, -.2, 0, .4, .8, 1.2, 1.6, 1.9, 2, 1.8, 1.3, 1, .8, .4, .2, -.2]
//     };
//   }
constructor(props) {
  super(props)
  this.state = {
    // tides: [2.2, 2.3, 1.9, 1.7, 1.5, 1.4, .8, .3, .1, -.2, 0, .4, .8, 1.2, 1.6, 1.9, 2, 1.8, 1.3, 1, .8, .4, .2, -.2]
    name: props.name

  }
  // this.newLocation = this.newLocation.bind(this);
  // this.handleChange = this.handleChange.bind(this);

}


  render() {
    return (
      <div>
        <TideBars props={this.state.tides} />

      </div>

    );
  }

}

export default Tides;

