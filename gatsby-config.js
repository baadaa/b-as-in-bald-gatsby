module.exports = {
  siteMetadata: {
    title: `B as in Bald`,
    description: `B here`,
    author: `@baadaa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-svg-sprite',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00A2D9`,
        theme_color: `#00A2D9`,
        display: `minimal-ui`,
        icon: `src/images/circle.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
