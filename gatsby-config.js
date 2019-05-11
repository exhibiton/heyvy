/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: 'Digital prodouct design & art direction',
    description: 'Digital prodouct design & art direction',
    author: '@heyvy',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'asyko',
        short_name: 'asyko',
        start_url: '/',
        background_color: '#6e27c5',
        theme_color: '#6e27c5',
        icon: 'src/images/icon.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
