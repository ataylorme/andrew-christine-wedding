import React, { Component } from "react";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import ReactFitText from "react-fittext";
import classnames from "classnames";

// Photos!
import fcDallasPhoto from "./images/fc-dallas-game.jpg";
import Pre5KPhoto from "./images/andrew-christine-5k.jpg";
import AndrewAndChristineCraterLakePhoto from "./images/andrew-christine-crater-lake.jpg";
import AndrewAndChristineChicagoPhoto from "./images/andrew-christine-chicago.jpg";
import ChristineAndZivaPhoto from "./images/ziva-chistine-dog-park-after-adoption.jpg";
import CrockettDriveHousePhoto from "./images/crockett-drive-house.jpg";
import zivaOnTheBedPhoto from "./images/ziva-on-the-bed-in-andrews-face.jpg";
import rueAndZivaCratePhoto from "./images/rue-and-ziva-sharing-the-crate.jpg";
import rueAndZivaFrontDoorPhoto from "./images/rue-ziva-looking-out-front-door-plano-house.jpg";
import christineGreysonPhoto from "./images/christine-greyson-hawaii.jpg";
import hikingInHawaiiPhoto from "./images/andrew-christine-hiking-hawaii.jpg";
import rueAndZivaRoadTripPhoto from "./images/rue-ziva-road-trip-to-oregon.jpg";
import engagementTimberlineHeidiPhoto from "./images/andrew-christine-engagement-timberline-heidi.jpg";
import filbertCreekHousePhoto from "./images/14079-Filbert-Creek-Dr-front-of-house.jpg";
import weddingChairPhoto from "./images/wedding-chairs-on-grass.jpg";
import coconutBaySuitePhoto from "./images/serenity-at-coconut-bay-suite.jpg";
import bowlingRussellFamilyPhoto from "./images/russell-family-bowling.jpg";
import { Container, Col, Row } from "reactstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimeline: null
    };

    this.toggleTimeline = this.toggleTimeline.bind(this);
  }

  toggleTimeline() {
    if (this.state.showTimeline === null) {
      this.setState({
        showTimeline: true
      });
    } else {
      this.setState({
        showTimeline: !this.state.showTimeline
      });
    }
  }

  render() {
    return (
      <div
        id="timeline"
        className={classnames({ active: this.state.showTimeline === true })}
      >
        <div
          className="toggle-button fancy-font"
          onClick={() => {
            this.toggleTimeline();
          }}
        >
          <ReactFitText maxFontSize={48}>
            {this.state.showTimeline === true ? (
              <h2>Hide Our Story</h2>
            ) : (
              <h2>See Our Story</h2>
            )}
          </ReactFitText>
        </div>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="odd"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    First Date
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    February 20th, 2015
                  </h4>
                  <img
                    src={fcDallasPhoto}
                    alt="Andrew Taylor and Christine Russell on their first date at an FC Dallas game."
                  />
                  <p>
                    Our first date was at an FC Dallas game in Frisco, Texas
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="even"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Things Get Serious
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Spring 2015
                  </h4>
                  <img
                    src={Pre5KPhoto}
                    alt="Andrew Taylor and Christine Russell before a 5k run."
                  />
                  <p>
                    After our first date we knew there would be a second and we
                    started spending lots of time together.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="odd"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">+1 Dog</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    March 2015
                  </h4>
                  <img
                    src={ChristineAndZivaPhoto}
                    alt="Christine Russell and Ziva the dog."
                  />
                  <p>
                    After "just going to look" at dogs, Christine convinced
                    Andrew to adopt Ziva from the Collin County Animal shelter
                    by saying "just shut up and get the dog".
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="even"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Rue &amp; Ziva Bond
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Summer 2015
                  </h4>
                  <img
                    src={rueAndZivaCratePhoto}
                    alt="Rue and Ziva. the dogs. sharing a kennel."
                  />
                  <p>Rue and Ziva quickly became best friends too.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="odd"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Moved In Together
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Summer 2015
                  </h4>
                  <img
                    src={CrockettDriveHousePhoto}
                    alt="The front of a house."
                  />
                  <p>
                    We moved from our separate apartments into a house together.
                    We weren't alone though, we had Andrew's friend Chad and his
                    dog Jade for roommates.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="even"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    The Furniture Battle
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Summer 2015
                  </h4>
                  <img
                    src={zivaOnTheBedPhoto}
                    alt="Ziva the dog getting in Andrew Taylor's face."
                  />
                  <p>
                    Andrew did not want to allow dogs on the furniture but he
                    quickly lost that fight as it was three against one.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="odd"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    First Vacation Together
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Fall 2015
                  </h4>
                  <img
                    src={AndrewAndChristineCraterLakePhoto}
                    alt="Andrew Taylor and Christine Russell on their first date at an FC Dallas game."
                  />
                  <p>
                    We took our first vacation together to visit Oregon. We
                    enjoyed the mountains, the coast and lots of hiking. Crater
                    Lake was our favorite.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="even"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Meeting the Family
                  </h3>
                  <img
                    src={christineGreysonPhoto}
                    alt="Christine Russell and Greyson Taylor."
                  />
                  <p />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="odd"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    On Both Sides
                  </h3>
                  <img
                    src={bowlingRussellFamilyPhoto}
                    alt="Andrew Taylor and the Russell family bowling."
                  />
                  <p />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="even"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Visited Chicago
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Labor Day Weekend 2016
                  </h4>
                  <img
                    src={AndrewAndChristineChicagoPhoto}
                    alt="Andrew Taylor and Christine Russell in Chicago."
                  />
                  <p>
                    We visited the <i>Windy City</i>. We explored Christine's
                    favorite city and met up with her friends.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="odd"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Vacation in Hawaii
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Spring 2017
                  </h4>
                  <img
                    src={hikingInHawaiiPhoto}
                    alt="Andrew Taylor and Christine Russell hiking in Hawaii."
                  />
                  <p>
                    We spent a whole week in Hawaii with Andrew's family. We did
                    some hiking, but lots of relaxing at the pool as well!
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="even"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Moved to Plano
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Summer 2017
                  </h4>
                  <img
                    src={rueAndZivaFrontDoorPhoto}
                    alt="Two dogs, Rue and Ziva, looking out the front door of a house."
                  />
                  <p>
                    We rented a house in Plano, Texas together. This time
                    without the extra roommates.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="odd"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Moved to Oregon
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Fall 2017
                  </h4>
                  <img
                    src={rueAndZivaRoadTripPhoto}
                    alt="The dogs Rue and Ziva in the car for a road trip."
                  />
                  <p>
                    We took the scenic route from Texas to Oregon. The stretch
                    up the Pacific Coast made the 4 days of driving totally
                    worth it!
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="even"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Got Engaged
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    December 2017
                  </h4>
                  <img
                    src={engagementTimberlineHeidiPhoto}
                    alt="Andrew Taylor proposong to Christine Russell at Timberline Lodge."
                  />
                  <p>
                    We got engaged at the historic Timberline Lodge on Mt. Hood
                    with the help of Heidi, the resident mountain dog.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="odd"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Bought a House
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Summer 2018
                  </h4>
                  <img
                    src={filbertCreekHousePhoto}
                    alt="The front of a house."
                  />
                  <p>
                    After exploring Oregon for a year we decided to put down
                    roots in Happy Valley, purchasing the first home either of
                    us have owned together.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="even"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Getting Married
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    May 4th, 2019
                  </h4>
                  <img src={weddingChairPhoto} alt="Wedding chairs on grass." />
                  <p>
                    We are so excited for our wedding and hope you can join us.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="odd"
                  iconStyle={{ background: "#2f577a", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">Honeymoon</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    May 2019
                  </h4>
                  <img
                    src={coconutBaySuitePhoto}
                    alt="Hotel room at Coconut Bay Resort."
                  />
                  <p>
                    Our honeymoon will be a week spent in the Carribean at the
                    Coconut Bay Resort in St. Lucia.
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
