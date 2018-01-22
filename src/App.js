import React, { Component } from 'react';
import './App.css';
import Annoucement from './components/Announcement/index.js'
import Venue from './components/Venue/index.js'
import Directions from './components/Directions/index.js'

class App extends Component {
  render() {
    return (
      <div id="main">
        <Annoucement />
        <Venue />
        <Directions />
      </div>
    );
  }
}

export default App;
