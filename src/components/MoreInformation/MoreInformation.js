import React, { Component } from 'react';
import Map from '../Map/Map.js';
import classnames from 'classnames';
import ReactFitText from 'react-fittext';
import './MoreInformation.css';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    Container,
} from 'reactstrap';

export default class MoreInformation extends Component {

    render() {
        return (
            <div id="more-information">
                <Container id="rsvp" className="text-center">
                    <Row className="heading">
                        <Col>
                            <ReactFitText maxFontSize={62}>
                                    <h2>
                                        More Information
                                    </h2>
                            </ReactFitText>
                        </Col>
                    </Row>
                </Container>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.props.activeInfoTab === '1' })}
                        onClick={() => { this.props.toggleInfoTabs('1'); }}
                        >
                            Travel
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.props.activeInfoTab === '2' })}
                        onClick={() => { this.props.toggleInfoTabs('2'); }}
                        >
                            Accomodations
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.props.activeInfoTab === '3' })}
                        onClick={() => { this.props.toggleInfoTabs('3'); }}
                        >
                            Food and Drinks
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.props.activeInfoTab === '4' })}
                        onClick={() => { this.props.toggleInfoTabs('4'); }}
                        >
                            Things To Do
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.props.activeInfoTab === '5' })}
                        onClick={() => { this.props.toggleInfoTabs('5'); }}
                        >
                            Outdoor Activities
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.props.activeInfoTab === '6' })}
                        onClick={() => { this.props.toggleInfoTabs('6'); }}
                        >
                            Map
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.props.activeInfoTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <p>
                                    <ul>
                                        <li>Portland only has one airport, PDX, and we recommend booking flights early while the selection is higher and the costs are lower.</li>
                                        <li> You will also probably need to rent a car. Our wedding venue is out in the country without public transportation available. You can get from the airport downtown on the MAX train, otherwise you need a car to explore Oregon.</li>
                                        <li>Also consider staying longer than just a few days. The Pacific Northwest has an abundance of natural beauty to see. The ocean, mountain, and forests are all within a days drive from Portland.</li>
                                    </ul>
                                </p>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <p>
                                    An AirBnB, or similar private rental, is your best option for a longer stay.
                                </p>
                                <p>
                                    If you prefer a hotel, the Comfort Suites in Clackamas (<a href="https://goo.gl/maps/3sfwMSvV5SP2">map</a>) and Courtyard by Marriott in Milwaukie (<a href="https://goo.gl/maps/m4dVujroKjG2">map</a>). Both near our house with easy access to downtown Portland via <a href="https://trimet.org/max/">the MAX lightrail train</a>.
                                </p>
                                <p>
                                    There is also a Best Western in the quaint, little town of Sandy (<a href="https://goo.gl/maps/xMjRgnjWorr">map</a>). It is a little farther out of town - closer to the outdoors and the wedding venue.
                                </p>
                                <p>
                                    Finally, for a unique experience consider McMenamins Edgefield (<a href="https://goo.gl/maps/naizd1PZV5t">map</a>). Edgefield was a poor farm in the 1900s that has been restored and converted into a large complex with a hotel, concert venue, spa, restauarants, brewery, and more. Even if you don't stay here it is well worth visiting.
                                </p>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <p>
                                    Food and Drinks
                                </p>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            <Col sm="12">
                                <p>
                                    Things To Do
                                </p>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="5">
                        <Row>
                            <Col sm="12">
                                <p>
                                    Outdoor Activities
                                </p>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="6">
                        <Row>
                            <Col sm="12">
                                <Map />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}