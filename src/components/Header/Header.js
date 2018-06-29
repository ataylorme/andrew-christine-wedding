import React, { Component } from 'react';
import './Header.css';
import { Container } from 'reactstrap';
import ReactFitText from 'react-fittext';

export default class Header extends Component {
  render() {
    return (
        <Container id="header">
            <ReactFitText>
                <h1 className="text-center delay-quarter-second animated fadeInDown">
                    Andrew Taylor
                    <span className="and">and</span>
                    Christine Russell
                </h1>
            </ReactFitText>
        </Container>
    );
  }
}