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
                                        <NavLink href="#more-information" onClick={() => { this.props.toggleInfoTabs('1'); }}>
                                            Travel
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="#more-information" onClick={() => { this.props.toggleInfoTabs('2'); }}>
                                            Accomodations
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="#more-information" onClick={() => { this.props.toggleInfoTabs('3'); }}>
                                            Food and Drinks
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="#more-information" onClick={() => { this.props.toggleInfoTabs('4'); }}>
                                            Things To Do
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="#more-information" onClick={() => { this.props.toggleInfoTabs('5'); }}>
                                            Outdoor Activities
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="#more-information" onClick={() => { this.props.toggleInfoTabs('6'); }}>
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