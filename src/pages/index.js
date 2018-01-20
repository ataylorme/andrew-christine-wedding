import React from 'react'
import Link from 'gatsby-link'
import Announcement from '../components/Announcement/Announcement.js'
import Venue from '../components/Venue/Venue.js'
import GoogleMap from '../components/GoogleMap/GoogleMap.js'
import { rhythm } from '../utils/typography'

const IndexPage = ({data}) => (
  <div id="main">
    <Announcement image={data.heroImage} />
    <div id="content">
        <Venue image={data.venueImage} />
        <GoogleMap  image={data.venueImage} />
    </div>
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
}
`