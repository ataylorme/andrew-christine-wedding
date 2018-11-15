import React, { Component, Fragment } from 'react';
import './Venue.css';
// import icons from '../../utils/icons.js'
import { Container, Col, Row } from 'reactstrap';
import ReactFitText from 'react-fittext';
import Video from '../Video/Video.js';

export default class Venue extends Component {
  render() {
    return (
        <div id="venue" className="text-center">
            <Container>
                <Row className="heading">
                    <Col>
                        <ReactFitText maxFontSize={62}>
                                <h2>Venue</h2>
                        </ReactFitText>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                    <Col sm="12" lg="6">
                        <ReactFitText maxFontSize={42}>
                            <Fragment>
                                <h3>Wonser Woods Estate</h3>
                                <p>
                                    <a href="https://www.google.com/maps/dir//Wonser+Woods+Estate,+24250+S+Raney+Ln,+Estacada,+OR+97023/@45.2664861,-122.371495,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x54957f697e8d4ec5:0xe026ba4ece283abf!2m2!1d-122.3693063!2d45.2664823!3e0">
                                        24250 S. Raney Ln.
                                        <br />
                                        Estacada, Oregon 97023
                                    </a>
                                </p>
                            </Fragment>
                        </ReactFitText>
                    </Col>
                    <Col sm="12" lg="4">
                        <Video />
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}
