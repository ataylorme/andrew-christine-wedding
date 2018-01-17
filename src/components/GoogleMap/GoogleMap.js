import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading.js'

require('./GoogleMap.scss')

export default props => {

  return (
    <div>
        <SectionHeading title='Getting Around' />
        <div id="gmap">
            <div className="frame-wrap">
                <iframe src="https://www.google.com/maps/d/embed?mid=1SgKOQy7lb9BjrMdz3Mybezo-o2j1WqOu" width="100%" height="100%"></iframe>
            </div>
        </div>
    </div>
  )
}
