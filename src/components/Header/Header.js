import React, { Fragment, Component } from 'react';
import './Header.css';
import { Col, Row } from 'reactstrap';
import ReactFitText from 'react-fittext';

export default class Header extends Component {
  render() {
    return (
        <Row id="header">
            <Col>
                <ReactFitText>
                        <h1 className="display-3 text-center">
                            Andrew Taylor
                            <span className="and">and</span>
                            Christine Russell
                        </h1>
                </ReactFitText>
                <ReactFitText maxFontSize="75px">
                    <h2 className="display-3 text-center">
                        May 4th, 2019
                    </h2>
                </ReactFitText>
            </Col>
        </Row>
    );
  }
}