import React, { Component } from 'react';
import './Menu.css';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

export default class Menu extends Component {
  render() {
    return (
        <Container id="menu" className="text-center">
            <Nav horizontal="true">
                <NavItem  className="col-4">
                    <NavLink href="#venue">
                        Venue
                    </NavLink>
                </NavItem>
                <NavItem  className="col-4">
                    <NavLink href="#timeline">
                        Our Story
                    </NavLink>
                </NavItem>
                <NavItem  className="col-4">
                    <NavLink href="#rsvp">
                        RSVP
                    </NavLink>
                </NavItem>
            </Nav>
        </Container>
    );
  }
}