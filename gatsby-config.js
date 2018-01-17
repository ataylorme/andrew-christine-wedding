module.exports = {
  siteMetadata: {
    title: `Andrew and Christine • May 4th, 2019`,
    description: `Wedding for Andrew Taylor and Christine Russell  to be held May 4th, 2019`,
  },
  plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`,
				name: 'images',
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 8,
			}
		},
	],
}
