import React, { Component } from 'react';
import './Directions.css';
// import icons from '../../utils/icons.js'
import { Col, Row, Button } from 'reactstrap';

class Directions extends Component {
  render() {
    return (
        <div id="directions">
                <Row>
                    <Col>
                        <h2 className="display-3 text-center">
                            Directions
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            <a href="https://www.google.com/maps/dir//Wonser+Woods+Estate,+24250+S+Raney+Ln,+Estacada,+OR+97023/@45.2664861,-122.371495,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x54957f697e8d4ec5:0xe026ba4ece283abf!2m2!1d-122.3693063!2d45.2664823!3e0">
                                <Button color="info" size="lg" block>
                                    Direction in Google Maps
                                </Button>
                            </a>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="embed-responsive embed-responsive-4by3">
                        <iframe src="https://www.google.com/maps/d/embed?mid=1SgKOQy7lb9BjrMdz3Mybezo-o2j1WqOu" width="100%" height="100%" title="Taylor/Russell Wedding Map"></iframe>
                        </div> 
                    </Col>
                </Row>
        </div>
    );
  }
}

export default Directions;
