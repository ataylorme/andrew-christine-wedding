import React, { Fragment, Component } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import EngagementPhoto from "./components/EngagementPhoto/EngagementPhoto.js";
import SaveTheDate from "./components/SaveTheDate/SaveTheDate.js";
import Timeline from "./components/Timeline/Timeline.js";

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <EngagementPhoto />
        <SaveTheDate />
        <Timeline />
      </Fragment>
    );
  }
}

export default App;
