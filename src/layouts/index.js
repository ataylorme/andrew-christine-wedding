import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

require('typeface-playfair-display')
import './index.scss'

export default ({ children, data }) => (
  <div>
    <Helmet
      title={ data.site.siteMetadata.title }
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
      ]}
    />
	{children()}
  </div>
)

export const HomePageQuery = graphql`
query HomePageQuery {
  site {
	siteMetadata {
	  title
	}
  }
}
`