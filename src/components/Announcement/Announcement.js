import React from 'react'
import Img from 'gatsby-image'
import { rhythm } from '../../utils/typography'

require('./Announcement.scss')

export default props => {
  let { image } = props

  if (image === null || image === undefined) {
    return null
  }

  // Strip the max width sizes as it was making the images grainy
  delete image.childImageSharp.sizes.sizes;

  return (
    <div id="announcement">
		<div className="text-wrap">
		    <div className="text">
                <h1>Andrew &amp; Christine</h1>
                <h2>May 4th, 2019</h2>
		    </div>
		</div>
        <Img sizes={image.childImageSharp.sizes} />
    </div>
  )
}
