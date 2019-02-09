import React, { Component } from 'react';
import Map from '../Map/Map.js';
import MoreInformationTab from '../MoreInformationTab/MoreInformationTab.js';
import ReactFitText from 'react-fittext';
import './MoreInformation.css';
import {
    Row,
    Col,
    Container,
} from 'reactstrap';

export default class MoreInformation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="more-information">
                <Container className="text-center">
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
                <MoreInformationTab title={'Travel'} toggleInfoTabs={this.props.toggleInfoTabs} activeInfoTab={this.props.activeInfoTab}>
                    <p>
                        <ul>
                            <li>Portland only has one airport, PDX, and we recommend booking flights early while the selection is higher and the costs are lower.</li>
                            <li> You will also probably need to rent a car. Our wedding venue is out in the country without public transportation available. You can get from the airport downtown on the MAX train, otherwise you need a car to explore Oregon.</li>
                            <li>Also consider staying longer than just a few days. The Pacific Northwest has an abundance of natural beauty to see. The ocean, mountain, and forests are all within a days drive from Portland.</li>
                        </ul>
                    </p>
                </MoreInformationTab>
                <MoreInformationTab title={'Accomodations'} toggleInfoTabs={this.props.toggleInfoTabs} activeInfoTab={this.props.activeInfoTab}>
                    <p>
                        An AirBnB, or similar private rental, is your best option for a longer stay.
                    </p>
                    <p>
                        If you prefer a hotel, the Comfort Suites (<a href="https://goo.gl/maps/3sfwMSvV5SP2">map</a>) and Courtyard by Marriott (<a href="https://goo.gl/maps/m4dVujroKjG2">map</a>). Both are in Clackamas, near our house, with easy access to downtown Portland via <a href="https://trimet.org/max/">the MAX lightrail train</a>.
                    </p>
                    <p>
                        There is also a Best Western in the quaint, little town of Sandy (<a href="https://goo.gl/maps/xMjRgnjWorr">map</a>). It is a little farther out of town - closer to the outdoors and the wedding venue.
                    </p>
                    <p>
                        Finally, for a unique experience, consider McMenamins Edgefield (<a href="https://goo.gl/maps/naizd1PZV5t">map</a>). Edgefield was a poor farm in the 1900s that has been restored and converted into a large complex with a hotel, concert venue, spa, restauarants, brewery, and more. Even if you don't stay here it is well worth visiting.
                    </p>
                </MoreInformationTab>
                <MoreInformationTab title={'Food and Drinks'} toggleInfoTabs={this.props.toggleInfoTabs} activeInfoTab={this.props.activeInfoTab}>
                    
                </MoreInformationTab>
                <MoreInformationTab title={'Things To Do'} toggleInfoTabs={this.props.toggleInfoTabs} activeInfoTab={this.props.activeInfoTab}>
                    
                </MoreInformationTab>
                <MoreInformationTab title={'Outdoor Activities'} toggleInfoTabs={this.props.toggleInfoTabs} activeInfoTab={this.props.activeInfoTab}>
                    
                </MoreInformationTab>
                <MoreInformationTab title={'Map'} toggleInfoTabs={this.props.toggleInfoTabs} activeInfoTab={this.props.activeInfoTab}>
                    <Map />
                </MoreInformationTab>
            </div>
        );
    }
}