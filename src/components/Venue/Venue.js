import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading.js'
import EmbedBox from '../EmbedBox/EmbedBox.js'
import { rhythm } from '../../utils/typography'

require('./Venue.scss')

export default props => {

    const embed = (<iframe src="https://player.vimeo.com/video/189338326?title=0&byline=0&portrait=0" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>)

  return (
    <div id="venue">
        <div className="inner">
            <SectionHeading title='Venue' />
            <div className="flex-wrap">
                <div className="content">
                    <h4>
                        <a href="https://wonserwoods.com/">Wonser Woods Estate</a>
                    </h4>
                    <p>
                        24250 S. Raney Ln.
                        <br />Estacada, Oregon 97023
                    </p>
                </div>
                <EmbedBox embed={embed} />
            </div>
        </div>
    </div>
  )
}
