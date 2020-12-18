import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/Main.jsx';
// import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      companies: [1]
    }

  }



  render() {
    return (
      <div >
      <Main />
      </div>

    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
