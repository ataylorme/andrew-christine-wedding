import React, { Component } from 'react';
import './EngagementPhoto.css';
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';

// Wedding Ceremony
import WeddingPhotoCeremony2200 from './andrew-christine-wedding-ceremony-2200.jpg';
import WeddingPhotoCeremony1100 from './andrew-christine-wedding-ceremony-1100.jpg';
import WeddingPhotoCeremony640 from './andrew-christine-wedding-ceremony-640.jpg';
import WeddingPhotoCeremony400 from './andrew-christine-wedding-ceremony-400.jpg';

// Wedding Kiss On Cheek
/*
import WeddingPhotoKissOnCheek2200 from './andrew-christine-wedding-kiss-on-cheek-2200.jpg';
import WeddingPhotoKissOnCheek1100 from './andrew-christine-wedding-kiss-on-cheek-1100.jpg';
import WeddingPhotoKissOnCheek640 from './andrew-christine-wedding-kiss-on-cheek-640.jpg';
import WeddingPhotoKissOnCheek400 from './andrew-christine-wedding-kiss-on-cheek-400.jpg';
*/

// Wedding Kiss Mountain
import WeddingPhotoKissMountain2200 from './andrew-christine-wedding-kissing-mountain-2200.jpg';
import WeddingPhotoKissMountain1100 from './andrew-christine-wedding-kissing-mountain-1100.jpg';
import WeddingPhotoKissMountain640 from './andrew-christine-wedding-kissing-mountain-640.jpg';
import WeddingPhotoKissMountain400 from './andrew-christine-wedding-kissing-mountain-400.jpg';

// Wedding Kiss Sunny Field
import WeddingPhotoKissSunshine2200 from './andrew-christine-wedding-kissing-sunshine-2200.jpg';
import WeddingPhotoKissSunshine1100 from './andrew-christine-wedding-kissing-sunshine-1100.jpg';
import WeddingPhotoKissSunshine640 from './andrew-christine-wedding-kissing-sunshine-640.jpg';
import WeddingPhotoKissSunshine400 from './andrew-christine-wedding-kissing-sunshine-400.jpg';

// Piggy Back
import EngagementPhotoPiggyBack2200 from './andrew-christine-engagement-10-2018-2200.jpg';
import EngagementPhotoPiggyBack1100 from './andrew-christine-engagement-10-2018-1100.jpg';
import EngagementPhotoPiggyBack640 from './andrew-christine-engagement-10-2018-640.jpg';
import EngagementPhotoPiggyBack400 from './andrew-christine-engagement-10-2018-400.jpg';

// Piggy Back Kiss
import EngagementPhotoPiggyBackKiss2200 from './andrew-christine-engagement-piggy-back-kiss-10-2018-2200.jpg';
import EngagementPhotoPiggyBackKiss1100 from './andrew-christine-engagement-piggy-back-kiss-10-2018-1100.jpg';
import EngagementPhotoPiggyBackKiss640 from './andrew-christine-engagement-piggy-back-kiss-10-2018-640.jpg';
import EngagementPhotoPiggyBackKiss400 from './andrew-christine-engagement-piggy-back-kiss-10-2018-400.jpg';

// Holding Hands
import EngagementPhotoHoldingHands2200 from './andrew-christine-engagement-holding-hands-10-2018-2200.jpg';
import EngagementPhotoHoldingHands1100 from './andrew-christine-engagement-holding-hands-10-2018-1100.jpg';
import EngagementPhotoHoldingHands640 from './andrew-christine-engagement-holding-hands-10-2018-640.jpg';
import EngagementPhotoHoldingHands400 from './andrew-christine-engagement-holding-hands-10-2018-400.jpg';

// Close Embrace
import EngagementPhotoCloseEmbrace2200 from './andrew-christine-engagement-close-embrace-10-2018-2200.jpg';
import EngagementPhotoCloseEmbrace1100 from './andrew-christine-engagement-close-embrace-10-2018-1100.jpg';
import EngagementPhotoCloseEmbrace640 from './andrew-christine-engagement-close-embrace-10-2018-640.jpg';
import EngagementPhotoCloseEmbrace400 from './andrew-christine-engagement-close-embrace-10-2018-400.jpg';

// Legs In Air
import EngagementPhotoLegsInAir2200 from './andrew-christine-engagement-legs-in-air-10-2018-2200.jpg';
import EngagementPhotoLegsInAir1100 from './andrew-christine-engagement-legs-in-air-10-2018-1100.jpg';
import EngagementPhotoLegsInAir640 from './andrew-christine-engagement-legs-in-air-10-2018-640.jpg';
import EngagementPhotoLegsInAir400 from './andrew-christine-engagement-legs-in-air-10-2018-400.jpg';

// Sitting In Field
import EngagementPhotoSittingInField2200 from './andrew-christine-engagement-sitting-in-field-10-2018-2200.jpg';
import EngagementPhotoSittingInField1100 from './andrew-christine-engagement-sitting-in-field-10-2018-1100.jpg';
import EngagementPhotoSittingInField640 from './andrew-christine-engagement-sitting-in-field-10-2018-640.jpg';
import EngagementPhotoSittingInField400 from './andrew-christine-engagement-sitting-in-field-10-2018-400.jpg';

const EngagementPhotos = [
  {
    fileName: 'andrew-christine-wedding-ceremony',
    src2200: WeddingPhotoCeremony2200,
    src1100: WeddingPhotoCeremony1100,
    src640: WeddingPhotoCeremony640,
    src400: WeddingPhotoCeremony400,
    altText: 'Andrew Taylor and Christine Russell Wedding Ceremony',
  },
  {
    fileName: 'andrew-christine-wedding-kissing-mountain',
    src2200: WeddingPhotoKissMountain2200,
    src1100: WeddingPhotoKissMountain1100,
    src640: WeddingPhotoKissMountain640,
    src400: WeddingPhotoKissMountain400,
    altText: 'Andrew Taylor and Christine Russell kissing with Mt. Hood in the background',
  },
  {
    fileName: 'andrew-christine-wedding-kissing-sunshine',
    src2200: WeddingPhotoKissSunshine2200,
    src1100: WeddingPhotoKissSunshine1100,
    src640: WeddingPhotoKissSunshine640,
    src400: WeddingPhotoKissSunshine400,
    altText: 'Andrew Taylor and Christine Russell kissing in a sunny field',
  },
  /*
  {
    fileName: 'andrew-christine-wedding-kiss-on-cheek',
    src2200: WeddingPhotoKissOnCheek2200,
    src1100: WeddingPhotoKissOnCheek1100,
    src640: WeddingPhotoKissOnCheek640,
    src400: WeddingPhotoKissOnCheek400,
    altText: 'Andrew Taylor and Christine Russell as newlyweds',
  },
  */
  {
    fileName: 'andrew-christine-engagement-10-2018',
    src2200: EngagementPhotoPiggyBack2200,
    src1100: EngagementPhotoPiggyBack1100,
    src640: EngagementPhotoPiggyBack640,
    src400: EngagementPhotoPiggyBack400,
    altText: 'Andrew Taylor and Christine Russell',
  },
  {
    fileName: 'andrew-christine-engagement-piggy-back-kiss-10-2018',
    src2200: EngagementPhotoPiggyBackKiss2200,
    src1100: EngagementPhotoPiggyBackKiss1100,
    src640: EngagementPhotoPiggyBackKiss640,
    src400: EngagementPhotoPiggyBackKiss400,
    altText: 'Andrew Taylor and Christine Russell',
  },
  {
    fileName: 'andrew-christine-engagement-holding-hands-10-2018',
    src2200: EngagementPhotoHoldingHands2200,
    src1100: EngagementPhotoHoldingHands1100,
    src640: EngagementPhotoHoldingHands640,
    src400: EngagementPhotoHoldingHands400,
    altText: 'Andrew Taylor and Christine Russell',
  },
  {
    fileName: 'andrew-christine-engagement-close-embrace-10-2018',
    src2200: EngagementPhotoCloseEmbrace2200,
    src1100: EngagementPhotoCloseEmbrace1100,
    src640: EngagementPhotoCloseEmbrace640,
    src400: EngagementPhotoCloseEmbrace400,
    altText: 'Andrew Taylor and Christine Russell',
  },
  {
    fileName: 'andrew-christine-engagement-legs-in-air-10-2018',
    src2200: EngagementPhotoLegsInAir2200,
    src1100: EngagementPhotoLegsInAir1100,
    src640: EngagementPhotoLegsInAir640,
    src400: EngagementPhotoLegsInAir400,
    altText: 'Andrew Taylor and Christine Russell',
  },
  {
    fileName: 'andrew-christine-engagement-sitting-in-field-10-2018',
    src2200: EngagementPhotoSittingInField2200,
    src1100: EngagementPhotoSittingInField1100,
    src640: EngagementPhotoSittingInField640,
    src400: EngagementPhotoSittingInField400,
    altText: 'Andrew Taylor and Christine Russell',
  }
];

export class EngagementPhoto extends Component {
  render() {
    return (
        <Container id="engagement-photo" className="text-center">
          <img src={EngagementPhotoPiggyBack400} 
            srcSet={`${EngagementPhotoPiggyBack400} 400w, ${EngagementPhotoPiggyBack640} 640w, ${EngagementPhotoPiggyBack1100} 1100w, ${EngagementPhotoPiggyBack2200} 2200w`}
            alt="Andrew Taylor and Christine Russell Engagment" />
        </Container>
    );
  }
}

export default class EngagementPhotoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === EngagementPhotos.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? EngagementPhotos.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = EngagementPhotos.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.fileName}
        >
          <img src={item.src400} 
            srcSet={`${item.src400} 400w, ${item.src640} 640w, ${item.src1100} 1100w, ${item.src2200} 2200w`}
            alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <Container id="engagement-photos" className="text-center">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </Container>
    );
  }
}
