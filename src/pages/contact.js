// TODO:
// 1. Add flipping content
// 2. Add resume link

import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundImageSection from '../components/BackgroundImageSection/BackgroundImageSection';
import LogoAnimation from '../components/LogoAnimation/LogoAnimation';
import { flexUnit } from '../components/Utils/utils';
import { PageHeading } from '../components/UIElements';

import LinkedInIcon from '../images/linkedin.svg';
import GitHubIcon from '../images/github.svg';

const ContactContent = styled(BackgroundImageSection)`
  height: calc(100vh - 45px);
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Card = styled.div`
  width: 32rem;
  height: 32rem;
  margin: 5vh auto 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  position: relative;
  .contact-info {
    a {
      color: inherit;
      transition: color 0.2s;
      text-decoration: none;
      &:hover {
        color: var(--cyan);
        span {
          color: #22c4fb;
        }
      }
    }
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 1.3rem;
    line-height: 1.5;
    padding: 0 3rem 2rem;
    display: flex;
    span {
      transition: color 0.2s;
    }
    justify-content: space-around;
    align-items: center;
    .email {
      // display: flex;
      // width: 100%;
      justify-content: stretch;
      align-items: center;
    }
    .at {
      font-size: 1.2rem;
      padding-left: 0.25rem;
      color: #999;
    }
    .as,
    .in {
      color: #999;
    }
    .as {
      padding-right: 0.15rem;
    }
    .baldie {
      font-size: 1.1rem;
      color: #888;
      text-transform: uppercase;
      padding: 0 0.2rem;
      font-weight: 400;
    }
    .com {
      color: #999;
    }
    .call {
      color: #999;
    }
    .social {
      display: flex;
      align-items: center;
      svg {
        width: 2rem;
        height: 2rem;
        margin-left: 0.5rem;
        opacity: 0.8;
        transition: opacity 0.2s, transform 0.2s;
        &:hover {
          opacity: 1;
          transform: scale(1.1);
        }
      }
    }
  }
`;

const ContactPage = () => (
  <Layout>
    <SEO
      title="B | Contact"
      description="Always open to new ideas. Let us connect."
    />
    <ContactContent>
      <PageHeading>Contact</PageHeading>
      <Card>
        <LogoAnimation size="3rem" noMargin horizontal noScale />
        {/* <hr style={{ width: '2rem', margin: '3rem 0' }} /> */}
        <div className="contact-info">
          <div>
            <a href="mailto:b@basinbald.com">
              <div className="email">
                B<span className="at">@</span>
                <span className="baldie">b</span>
                <span className="as">as</span>
                <span className="in">in</span>
                <span className="baldie">bald</span>
                <span className="com">.com</span>
              </div>
            </a>
            <span className="call">(347) 361-8412</span>
          </div>
          <div className="social">
            <a
              href="https://linkedin.com/in/bumhan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg>
                <use xlinkHref={`#${LinkedInIcon.id}`} />
              </svg>
            </a>
            <a
              href="https://github.com/baadaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg>
                <use xlinkHref={`#${GitHubIcon.id}`} />
              </svg>
            </a>
          </div>
        </div>
      </Card>
    </ContactContent>
  </Layout>
);

export default ContactPage;
