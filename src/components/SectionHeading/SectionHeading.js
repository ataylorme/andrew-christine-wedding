import React from 'react'

require('./SectionHeading.scss')

export default props => {
  let { title } = props

  if ( title === null || title === undefined || title === '' ) {
    return null
  }

  return (
    <div className="section-heading">
		<h2>{title}</h2>
    </div>
  )
}
