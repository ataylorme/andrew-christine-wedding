import React, { Component } from 'react';
import './EngagementPhoto.css';
import { Col, Row } from 'reactstrap';
import EngagementPhoto2200 from './andrew-christine-engagement-12-09-2017-2200.jpg';
import EngagementPhoto1100 from './andrew-christine-engagement-12-09-2017-1100.jpg';
import EngagementPhoto640 from './andrew-christine-engagement-12-09-2017-640.jpg';
import EngagementPhoto400 from './andrew-christine-engagement-12-09-2017-400.jpg';

export default class EngagementPhoto extends Component {
  render() {
    return (
        <Row id="engagement-photo" className="text-center">
            <Col>
            {/*
            ​<picture>
                <source
                    srcSet={`${EngagementPhoto400} 400w, ${EngagementPhoto640} 640w, ${EngagementPhoto1100} 1100w, ${EngagementPhoto2200} 2200w" alt="Andrew Taylor and Christine Russell Engagment`} 
                    />
                <img src={EngagementPhoto400} className="img-fluid" />
            ​</picture>
            */}
            <img src={EngagementPhoto400} 
                width="100%"
                srcSet={`${EngagementPhoto400} 400w, ${EngagementPhoto640} 640w, ${EngagementPhoto1100} 1100w, ${EngagementPhoto2200} 2200w" alt="Andrew Taylor and Christine Russell Engagment`} />
            </Col>
        </Row>
    );
  }
}
