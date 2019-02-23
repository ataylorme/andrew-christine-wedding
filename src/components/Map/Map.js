import React, { Component } from "react";
import "./Map.css";

export default class Map extends Component {
  render() {
    return (
      <div id="map">
        <div className="embed-responsive embed-responsive-1by1">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1SgKOQy7lb9BjrMdz3Mybezo-o2j1WqOu&z=11"
            width="100%"
            height="100%"
            title="Taylor/Russell Wedding Map"
          />
        </div>
      </div>
    );
  }
}
