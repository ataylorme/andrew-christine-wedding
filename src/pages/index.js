import React from 'react'
import Link from 'gatsby-link'
import Announcement from '../components/Announcement/Announcement.js'
import Venue from '../components/Venue/Venue.js'
import GoogleMap from '../components/GoogleMap/GoogleMap.js'
require('../global/css/_global.scss')

const IndexPage = ({data}) => (
  <div>
	  <Announcement image={data.heroImage} />
	  <Venue image={data.venueImage} />
	  <GoogleMap />
  </div>
)

export default IndexPage

export const FrontPageQuery = graphql`
query FrontPageQuery {
  site {
	siteMetadata {
	  title
	}
  }
  heroImage: file(
	relativePath: { eq: "andrew-christine-engagement-12-09-2017.jpg" }
  ) {
	childImageSharp {
	  sizes(maxWidth: 2560) {
		...GatsbyImageSharpSizes_withWebp_tracedSVG
	  }
	}
  }
  venueImage: file(
	relativePath: { eq: "wonser-woods-estate-front-door.png" }
  ) {
	childImageSharp {
	  sizes(maxWidth: 2560) {
		...GatsbyImageSharpSizes_withWebp_tracedSVG
	  }
	}
  }
}
`