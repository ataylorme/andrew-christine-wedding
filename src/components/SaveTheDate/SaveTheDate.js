import React, { Component } from 'react';
import './SaveTheDate.css';
import { Col, Row } from 'reactstrap';
import ReactFitText from 'react-fittext';

export default class SaveTheDate extends Component {
  render() {
    return (
        <Row id="save-the-date">
            <Col>
                <ReactFitText maxFontSize="36px">
                    <p className="display-3 text-center">Please join us for our wedding celebration on</p>
                </ReactFitText>
                <ReactFitText maxFontSize="62px">
                        <h2 className="display-3 text-center">
                            May 4th, 2019
                        </h2>
                </ReactFitText>
            </Col>
        </Row>
    );
  }
}