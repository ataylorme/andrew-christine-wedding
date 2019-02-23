import React, { Fragment, Component } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Menu from "./components/Menu/Menu.js";
import EngagementPhoto from "./components/EngagementPhoto/EngagementPhoto.js";
import SaveTheDate from "./components/SaveTheDate/SaveTheDate.js";
import Venue from "./components/Venue/Venue.js";
import RSVP from "./components/RSVP/RSVP.js";
import Timeline from "./components/Timeline/Timeline.js";
import MoreInformation from "./components/MoreInformation/MoreInformation.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleInfoTabs = this.toggleInfoTabs.bind(this);
    this.state = {
      activeInfoTab: "0"
    };
  }

  toggleInfoTabs(tab) {
    if (this.state.activeInfoTab !== tab) {
      this.setState({
        activeInfoTab: tab
      });
    } else {
      this.setState({
        activeInfoTab: "0"
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Menu toggleInfoTabs={this.toggleInfoTabs} />
        <EngagementPhoto />
        <SaveTheDate />
        <Timeline />
        <Venue />
        <RSVP />
        <MoreInformation
          toggleInfoTabs={this.toggleInfoTabs}
          activeInfoTab={this.state.activeInfoTab}
        />
      </Fragment>
    );
  }
}

export default App;
