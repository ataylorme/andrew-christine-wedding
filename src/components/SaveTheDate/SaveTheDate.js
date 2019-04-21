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
            Please join us for our wedding celebration on
          </p>
        </ReactFitText>
        <ReactFitText maxFontSize={62}>
          <h2 className="text-center">May 4th, 2019</h2>
        </ReactFitText>
        <p class="text-center arrival">
          Guests should arrive between 3:15 and 3:45 pm.<br />The ceremony will start at 4 pm and the reception will end at 9:30 pm.
        </p>
      </Container>
    );
  }
}
