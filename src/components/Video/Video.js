import React, { Component } from 'react';
import './Video.css';
// import icons from '../../utils/icons.js'
import { Container, Col, Row } from 'reactstrap';

export default class Video extends Component {
  render() {
    return (
        <div id="video">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col sm="10">
                        <div className="embed-responsive embed-responsive-4by3 video">
                            <iframe src="https://player.vimeo.com/video/189338326?title=0&byline=0&portrait=0" width="100%" height="100%" frameBorder="0" allowFullScreen title="Wonser Woods Intro Video"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}
