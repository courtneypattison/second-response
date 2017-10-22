import React, { Component } from 'react';
import './App.css';
import {getNeeds, getNeedTypes} from './data';

class App extends Component {

  componentDidMount() {
    Promise.all([
      getNeedTypes(),
      getNeeds(),
    ])
  }

  render() {
    return (
      <div className="App">
        <img id="headerlogo" src="longlogo.png"/>
      </div>
    );
  }
}

export default App;
