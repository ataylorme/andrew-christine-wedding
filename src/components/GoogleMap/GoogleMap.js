import React from 'react'
import Img from 'gatsby-image'
import SectionHeading from '../SectionHeading/SectionHeading.js'

require('./GoogleMap.scss')

export default props => {

    let { image } = props

    if (image === null || image === undefined) {
        return null
    }

    // Strip the max width sizes as it was making the images grainy
    delete image.childImageSharp.sizes.sizes;

  return (
    <div>
        <SectionHeading title='Getting Around' />
        <div id="gmap">
            <div className="overlay white"></div>
            <Img sizes={image.childImageSharp.sizes} />
            <div className="frame-center">
                <div className="frame-wrap">
                    <iframe src="https://www.google.com/maps/d/embed?mid=1SgKOQy7lb9BjrMdz3Mybezo-o2j1WqOu" width="100%" height="100%"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}
