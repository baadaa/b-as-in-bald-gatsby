import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import './HomeHeroSection.scss';

const HomeHeroSection = ({ className }) => (
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
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          style={{
            height: 'calc(100vh - 45px)',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <section className="logo">
            <div className="logo-container">
              <div className="logo-column">
                <div className="logo-row">
                  <div className="c-br"></div>
                </div>
                <div className="logo-row">
                  <div className="c-sq"></div>
                  <div className="c-bl"></div>
                </div>
                <div className="logo-row">
                  <div className="c-tr"></div>
                  <div className="c-tl"></div>
                </div>
              </div>
            </div>
            <div className="logo-phrase-container">
              <div className="logo-phrase unselectable">
                <span>B</span> as in <span>BALD</span>
              </div>
            </div>
          </section>
        </BackgroundImage>
      );
    }}
  />
);

export default HomeHeroSection;
