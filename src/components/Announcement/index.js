import React, { Component } from 'react';
import icons from '../../utils/icons.js'
import './index.css';
import smoothScroll from '../../utils/smoothScroll.js';

class Annoucement extends Component {
  render() {
    return (
      <div id="announcement">
        <div className="container-fluid" style={{height: '100%', padding: '0px'}}>
                <div className="image app-background-image animated fadeIn"></div>
                <div className="text-wrap row flex-items-xs-middle" style={{height: '100%', margin: '0px', padding: '0px'}}>
                    <div className="col-xs-12 text-xs-center no-select" style={{padding: '0px'}}>
                        <h1 className="delay-quarter-second animated fadeInDown">
                            Andrew Taylor &amp;&nbsp;<span className=".d-sm-none .d-md-block"><br /></span>Christine Russell
                        </h1>
                        <h2 className="delay-quarter-second animated fadeInUp">
                            May 4th, 2019
                        </h2>
                    </div>
                    <div className="icon delay-one-and-half-seconds animated fadeInUp" 
                        title="Scroll down"
                        onClick={ () => smoothScroll.scrollTo('venue') }>
                        {icons.chevronBottom}
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Annoucement;