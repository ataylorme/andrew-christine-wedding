import React from 'react'

require('./EmbedBox.scss')

export default props => {

    let { embed } = props

    if (embed === null || embed === undefined) {
      return null
    }  

  return (
    <div className="embed-box">
        <div className="embed">
            {embed}
        </div>
    </div>
  )
}
