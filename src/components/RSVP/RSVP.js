import React, { Component, Fragment } from 'react';
import './RSVP.css';
import { Container, Col, Row } from 'reactstrap';
import ReactFitText from 'react-fittext';
import ScriptTag from 'react-script-tag';

export default class Venue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rsvpNumber: '',
            showForm: false
        };
    
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }
    
      handleFormChange(event) {
        this.setState({rsvpNumber: event.target.value});
      }
    
      handleFormSubmit(event) {
        const phoneNumber = this.state.rsvpNumber.replace(/\D/g,'');
        if( phoneNumber === '2149018122' || phoneNumber === '3096352215' ){
            this.setState({showForm: true});
        } else {
            this.setState({showForm: false});
        }
        event.preventDefault();
      }

    render() {
        return (
            <div id="rsvp">
                <Container className="text-center">
                    <Row className="heading">
                        <Col>
                            <ReactFitText maxFontSize={62}>
                                    <h2>
                                        RSVP
                                    </h2>
                            </ReactFitText>
                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                        <Col>
                                <div id="rsvp-form">
                                    { this.state.showForm ? 
                                        <Fragment>
                                            <iframe id="RSVPifyIFrame" style={{width: "100%", border: "none", overflow: "scroll", minHeight: "300px"}} allowtransparency="true" src="https://taylorrussellwedding.app.rsvpify.com/?embed=1&amp;js=1" frameBorder="0" scrolling="no" title="Taylor/Russell RSVP Form"></iframe>
                                            <ScriptTag type="text/javascript" dangerouslySetInnerHTML={{ __html:
                                                `iFrameResize({autoResize: false,checkOrigin: false,heightCalculationMethod: 'max', enablePublicMethods: true}, "#RSVPifyIFrame");`}}></ScriptTag>
                                        </Fragment>
                                    : 
                                        <form onSubmit={this.handleFormSubmit}>
                                            <p>
                                                In order to RSVP please enter the phone number of the bride or the groom
                                            </p>
                                            <div className="form-group row justify-content-center">
                                                <label className="col-sm-5 col-md-3 col-form-label">Phone Number:</label>
                                                <div className="col-6 col-sm-4 col-md-6">
                                                    <input type="text" className="form-control" value={this.state.rsvpNumber} onChange={this.handleFormChange} />
                                                </div>
                                                <div className="col-6 col-sm-3 col-md-3">
                                                    <input type="submit" className="btn btn-block" value="Verify"></input>
                                                </div>
                                            </div>
                                        </form> 
                                    }
                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
