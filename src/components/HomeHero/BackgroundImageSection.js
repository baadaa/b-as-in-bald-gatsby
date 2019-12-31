import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const BackgroundImageSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "baldie.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData}>
          {children}
        </BackgroundImage>
      );
    }}
  />
);

export default BackgroundImageSection;
