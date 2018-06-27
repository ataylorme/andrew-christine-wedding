import React, { Component } from 'react';
import './Header.css';
// import icons from '../../utils/icons.js'
import { Container, Col, Row, Button } from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
        <header id="header">
            <Container>
                <Row>
                    <Col>
                        <h1 className="display-3 text-center">
                            Andrew Taylor
                            <span className="and">and</span>
                            Christine Russell
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       
                    </Col>
                </Row>
                <Row>
                    <Col>
                       
                    </Col>
                </Row>
            </Container>
        </header>
    );
  }
}