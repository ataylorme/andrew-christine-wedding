import React, { Component } from 'react';
import './Menu.css';
import { Container, Nav, NavLink } from 'reactstrap';
import ReactFitText from 'react-fittext';

export default class Menu extends Component {
  render() {
    return (
        <Container id="menu" className="text-center">
            <Nav horizontal="true">
                <ReactFitText minFontSize={24} maxFontSize={48}>
                    <NavLink href="#venue" className="col-4">
                        Venue
                    </NavLink>
                </ReactFitText>
                <ReactFitText minFontSize={24} maxFontSize={48}>
                    <NavLink href="#timeline" className="col-4">
                        Our Story
                    </NavLink>
                </ReactFitText>
                <ReactFitText minFontSize={24} maxFontSize={48}>
                    <NavLink href="#rsvp" className="col-4">
                        RSVP
                    </NavLink>
                </ReactFitText>
            </Nav>
        </Container>
    );
  }
}