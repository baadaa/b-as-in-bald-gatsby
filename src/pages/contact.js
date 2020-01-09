// TODO:
// 1. Add flipping content
// 2. Add resume link

import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundImageSection from '../components/BackgroundImageSection/BackgroundImageSection';
import LogoAnimation from '../components/LogoAnimation/LogoAnimation';
import { flexUnit } from '../components/Utils/flexUnit';
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
        <div>
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
        </div>
      </Card>
    </ContactContent>
  </Layout>
);

export default ContactPage;
