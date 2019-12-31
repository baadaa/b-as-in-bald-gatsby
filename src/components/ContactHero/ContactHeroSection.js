import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import LinkedInIcon from '../../images/linkedin.svg';
import GitHubIcon from '../../images/github.svg';

const Cont = styled.span`
  background: red;
`;
const ContactBit = props => <Cont>{props.children}</Cont>;
const ContactHeroSection = ({ className }) => (
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
          <div
            style={{
              width: '32rem',
              height: '32rem',
              margin: '18vh auto 0',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 1px 10px rgba(0,0,0,.2)',
              borderRadius: '2rem',
            }}
          >
            <section className="logo contact-page">
              <div className="logo-container" style={{ marginTop: '0' }}>
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
                <div
                  className="logo-phrase unselectable"
                  style={{
                    marginTop: 0,
                    marginLeft: '2rem',
                  }}
                >
                  <span>B</span> as in <span>BALD</span>
                </div>
              </div>
              <div
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '0 6rem',
                  marginTop: '2rem',
                  display: 'flex',
                }}
              >
                <span style={{ flex: '1', lineHeight: '2rem' }}>
                  <svg width="20" height="20">
                    <use xlinkHref={`#${LinkedInIcon.id}`} />
                  </svg>
                  /in/bumhan
                </span>
                <span style={{ flex: '1', lineHeight: '2rem' }}>
                  <svg width="20" height="20">
                    <use xlinkHref={`#${GitHubIcon.id}`} />
                  </svg>
                  /baadaa
                </span>
                <ContactBit>test</ContactBit>
              </div>
            </section>
          </div>
        </BackgroundImage>
      );
    }}
  />
);

export default ContactHeroSection;
