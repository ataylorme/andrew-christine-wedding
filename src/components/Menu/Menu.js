import React, { Component } from 'react';
import './Menu.css';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import ReactFitText from 'react-fittext';

export default class Menu extends Component {
  render() {
    return (
        <Container id="menu" className="text-center">
            <Nav horizontal="true">
                <ReactFitText minFontSize={24} maxFontSize={48}>
                    <NavItem  className="col-4">
                        <NavLink href="#venue">
                            Venue
                        </NavLink>
                    </NavItem>
                </ReactFitText>
                <ReactFitText minFontSize={24} maxFontSize={48}>
                    <NavItem  className="col-4">
                        <NavLink href="#timeline">
                            Our Story
                        </NavLink>
                    </NavItem>
                </ReactFitText>
                <ReactFitText minFontSize={24} maxFontSize={48}>
                    <NavItem  className="col-4">
                        <NavLink href="#rsvp">
                            RSVP
                        </NavLink>
                    </NavItem>
                </ReactFitText>
            </Nav>
        </Container>
    );
  }
}