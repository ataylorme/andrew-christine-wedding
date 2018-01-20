import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading.js'
import EmbedBox from '../EmbedBox/EmbedBox.js'
import { rhythm } from '../../utils/typography'

require('./GoogleMap.scss')

export default props => {

    const embed = (<iframe src="https://www.google.com/maps/d/embed?mid=1SgKOQy7lb9BjrMdz3Mybezo-o2j1WqOu" width="100%" height="100%"></iframe>)

  return (
    <div id="gmap">
        <div className="inner">
            <SectionHeading title='Getting Around' />
            <EmbedBox embed={embed} />
        </div>
    </div>
  )
}
