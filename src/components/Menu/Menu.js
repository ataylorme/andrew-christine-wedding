import React, { Component } from 'react';
import './Menu.css';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

export default class Menu extends Component {
  render() {
    return (
        <Container id="menu" className="text-center">
            <Nav>
                <NavItem className="col-6 col-md-3">
                    <NavLink href="#venue" className="no-border">
                        Venue
                    </NavLink>
                </NavItem>
                <NavItem className="col-6 col-md-3">
                    <NavLink href="#timeline" className="no-border">
                        Our Story
                    </NavLink>
                </NavItem>
                <NavItem className="col-6 col-md-3">
                    <NavLink href="#rsvp">
                        RSVP
                    </NavLink>
                </NavItem>
                <NavItem className="col-6 col-md-3">
                    <NavLink href="https://www.zola.com/registry/taylorrussellwedding/">
                        Registry
                    </NavLink>
                </NavItem>
            </Nav>
        </Container>
    );
  }
}