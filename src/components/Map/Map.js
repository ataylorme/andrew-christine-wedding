import React, { Component } from 'react';
import './Map.css';
import { Container, Col, Row } from 'reactstrap';

export default class Map extends Component {
  render() {
    return (
        <div id="map">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col sm="10">
                        <div className="embed-responsive embed-responsive-1by1">
                            <iframe src="https://www.google.com/maps/d/embed?mid=1SgKOQy7lb9BjrMdz3Mybezo-o2j1WqOu" width="100%" height="100%" title="Taylor/Russell Wedding Map"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}