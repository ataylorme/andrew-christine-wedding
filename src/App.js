import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import EngagementPhoto from './components/EngagementPhoto/EngagementPhoto.js';
import SaveTheDate from './components/SaveTheDate/SaveTheDate.js';
import Directions from './components/Directions/Directions.js';
import Venue from './components/Venue/Venue.js';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container id="main">
        <Header />
        <EngagementPhoto />
        <SaveTheDate />
        <Venue />
        <Directions />
      </Container>
    );
  }
}

export default App;
