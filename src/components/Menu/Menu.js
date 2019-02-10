import React, { Component } from 'react';
import './Menu.css';
import {
    Container,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarToggler,
    Collapse,
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Container id="menu" className="text-center">
                <Navbar light expand="md">
                    <div className="menu-label navbar-brand">
                        Menu
                    </div>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="col-md-auto" navbar>
                            <NavItem>
                                <NavLink href="#venue" className="no-border">
                                    Venue
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#timeline" className="no-border">
                                    Our Story
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#rsvp">
                                    RSVP
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://www.zola.com/registry/taylorrussellwedding/" target="_blank">
                                    Registry
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    More Information
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink href="#travel" onClick={() => { this.props.toggleInfoTabs('travel'); }}>
                                            Travel
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="#accomodations" onClick={() => { this.props.toggleInfoTabs('accomodations'); }}>
                                            Accomodations
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="#outdoor-activities" onClick={() => { this.props.toggleInfoTabs('outdoor-activities'); }}>
                                            Outdoor Activities
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="#food-and-drinks" onClick={() => { this.props.toggleInfoTabs('food-and-drinks'); }}>
                                            Food and Drinks
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="#indoor-activities" onClick={() => { this.props.toggleInfoTabs('indoor-activities'); }}>
                                            Indoor Activities
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="#map" onClick={() => { this.props.toggleInfoTabs('map'); }}>
                                            Map
                                        </NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        );
    }
}