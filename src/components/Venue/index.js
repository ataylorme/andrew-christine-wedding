import React, { Component } from 'react';
import './index.css';
// import icons from '../../utils/icons.js'
import { Jumbotron, Button , Container, Col, Row } from 'reactstrap';

class Venue extends Component {
  render() {
    return (
        <div id="venue">
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="display-3 text-center">
                                Wonser Woods Estate
                            </h2>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="text-center">
                                24250 S. Raney Ln.&nbsp;
                                <span className="d-lg-none"><br /></span>
                                Estacada, Oregon 97023.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="embed-responsive embed-responsive-4by3">
                                <iframe src="https://player.vimeo.com/video/189338326?title=0&byline=0&portrait=0" width="100%" height="100%" frameBorder="0" allowFullScreen title="Wonser Woods Intro Video"></iframe>
                            </div>  
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="learn-more">
                                <a href="https://wonserwoods.com/">
                                    <Button color="secondary" size="lg" block>
                                        Learn More
                                    </Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
  }
}

export default Venue;