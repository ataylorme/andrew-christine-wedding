import React, { Component } from 'react';
import './EngagementPhoto.css';
import { Container } from 'reactstrap';
import EngagementPhoto2200 from './andrew-christine-engagement-10-2018-2200.jpg';
import EngagementPhoto1100 from './andrew-christine-engagement-10-2018-1100.jpg';
import EngagementPhoto640 from './andrew-christine-engagement-10-2018-640.jpg';
import EngagementPhoto400 from './andrew-christine-engagement-10-2018-400.jpg';

export default class EngagementPhoto extends Component {
  render() {
    return (
        <Container id="engagement-photo" className="text-center">
            <img src={EngagementPhoto400} 
                srcSet={`${EngagementPhoto400} 400w, ${EngagementPhoto640} 640w, ${EngagementPhoto1100} 1100w, ${EngagementPhoto2200} 2200w`}
                alt="Andrew Taylor and Christine Russell Engagment" />
        </Container>
    );
  }
}
