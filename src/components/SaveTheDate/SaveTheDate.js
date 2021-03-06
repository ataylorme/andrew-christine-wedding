import React, { Component } from "react";
import "./SaveTheDate.css";
import { Container } from "reactstrap";
import ReactFitText from "react-fittext";

export default class SaveTheDate extends Component {
  render() {
    return (
      <Container id="save-the-date" className="fancy-font">
        <ReactFitText maxFontSize={36}>
          <p className="text-center">
            We had so much fun at our wedding on
          </p>
        </ReactFitText>
        <ReactFitText maxFontSize={62}>
          <h2 className="text-center">May 4th, 2019</h2>
        </ReactFitText>
        <p className="text-center arrival">
          Thank you to everyone who shared our special day with us.
        </p>
      </Container>
    );
  }
}
