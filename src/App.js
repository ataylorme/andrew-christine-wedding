import React, { Fragment, Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Menu from './components/Menu/Menu.js';
import EngagementPhoto from './components/EngagementPhoto/EngagementPhoto.js';
import SaveTheDate from './components/SaveTheDate/SaveTheDate.js';
import Venue from './components/Venue/Venue.js';
import Map from './components/Map/Map.js';
import RSVP from './components/RSVP/RSVP.js';
import Timeline from './components/Timeline/Timeline.js';

class App extends Component {
  render() {
    return (
        <Fragment>
                <Header />
                <Menu />
                <EngagementPhoto />
                <SaveTheDate />
                <Timeline />
                <Venue />
                <Map />
                <RSVP />
        </Fragment>
    );
  }
}

export default App;
