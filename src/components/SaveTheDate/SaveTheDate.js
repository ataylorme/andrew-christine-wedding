import React, { Component } from "react";
import "./SaveTheDate.css";
import { Container } from "reactstrap";
import ReactFitText from "react-fittext";

export default class SaveTheDate extends Component {
  render() {
    const weddingDateTime = new Date( 'May 4, 2019 04:00:00 GMT-7:00' );
    const currentDateTime = new Date( Date.now() );

    if( weddingDateTime > currentDateTime ) {
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
          <p className="text-center arrival">
            Guests should arrive between 3:15 and 3:45 pm.<br />The ceremony will start at 4 pm and the reception will end at 9:30 pm.
          </p>
        </Container>
      );
    } else {
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
            After we enjoy our honeymoon we will be gather photos to share.
          </p>
        </Container>
      );
    }
  }
}
