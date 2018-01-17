import React from 'react'
import Img from 'gatsby-image'
import SectionHeading from '../SectionHeading/SectionHeading.js'

require('./Venue.scss')

export default props => {

    let { image } = props

    if (image === null || image === undefined) {
        return null
    }

    // Strip the max width sizes as it was making the images grainy
    delete image.childImageSharp.sizes.sizes;

  return (
    <div>
        <SectionHeading title='Wonser Woods' />
        <div id="venue">
            <Img sizes={image.childImageSharp.sizes} />
            <div className="content">
                <p>Our wedding will be held at <a href="https://wonserwoods.com/">Wonser Woods</a> in Estacada, Oregon. </p>
                <div className="video-box">
                    <div className="video">
                        <iframe src="https://player.vimeo.com/video/189338326?title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
