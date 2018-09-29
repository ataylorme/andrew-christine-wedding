import React, { Fragment, Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import EngagementPhoto from './components/EngagementPhoto/EngagementPhoto.js';
import SaveTheDate from './components/SaveTheDate/SaveTheDate.js';
import Venue from './components/Venue/Venue.js';
import Video from './components/Video/Video.js';
import RSVP from './components/RSVP/RSVP.js';
import Timeline from './components/Timeline/Timeline.js';

class App extends Component {
  render() {
    return (
        <Fragment>
                <Header />
                <EngagementPhoto />
                <SaveTheDate />
                <Venue />
                <Video />
                <Timeline />
                {/*<RSVP />*/}
        </Fragment>
    );
  }
}

export default App;
