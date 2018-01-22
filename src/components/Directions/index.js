import React, { Component } from 'react';
import './index.css';
// import icons from '../../utils/icons.js'
import { Container, Col, Row } from 'reactstrap';

class Directions extends Component {
  render() {
    return (
        <div id="directions">
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-3 text-center">
                            Directions
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="embed-responsive embed-responsive-4by3">
                        <iframe src="https://www.google.com/maps/d/embed?mid=1SgKOQy7lb9BjrMdz3Mybezo-o2j1WqOu" width="100%" height="100%" title="Taylor/Russell Wedding Map"></iframe>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Directions;