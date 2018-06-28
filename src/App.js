import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import EngagementPhoto from './components/EngagementPhoto/EngagementPhoto.js'
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container id="main">
        <Header />
        <EngagementPhoto />
      </Container>
    );
  }
}

export default App;
