import React, { Component } from 'react';
import './Header.css';
import { Container, Col, Row } from 'reactstrap';
import ReactFitText from 'react-fittext';
import EngagementPhoto2560 from './andrew-christine-engagement-12-09-2017-2560.jpg';
import EngagementPhoto1280 from './andrew-christine-engagement-12-09-2017-1280.jpg';
import EngagementPhoto640 from './andrew-christine-engagement-12-09-2017-640.jpg';
import EngagementPhoto400 from './andrew-christine-engagement-12-09-2017-400.jpg';

export default class Header extends Component {
  render() {
    return (
        <Container>
            <header id="header">
                <Row>
                    <Col>
                        <ReactFitText>
                            <h1 className="display-3 text-center">
                                Andrew Taylor
                                <span className="and">and</span>
                                Christine Russell
                            </h1>
                        </ReactFitText>
                    </Col>
                </Row>
            </header>
            <div id="engagement-photo" className="text-center">
                <Row>
                    <Col>
                    ​<picture>
                        <source
                            srcSet={`${EngagementPhoto400} 400w, ${EngagementPhoto640} 640w, ${EngagementPhoto1280} 1280w, ${EngagementPhoto2560} 2560w" alt="Andrew Taylor and Christine Russell Engagment`} 
                            />
                        <img src={EngagementPhoto400} className="img-fluid" />
                    ​</picture>
                    {/*
                    <img src={EngagementPhoto400} 
                        width="100%"
                        srcSet={`${EngagementPhoto400} 400w, ${EngagementPhoto640} 640w, ${EngagementPhoto1280} 1280w, ${EngagementPhoto2560} 2560w" alt="Andrew Taylor and Christine Russell Engagment`} 
                        className="rounded"
                        />
                    */}
                    </Col>
                </Row>
            </div>
        </Container>
    );
  }
}