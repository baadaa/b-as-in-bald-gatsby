import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeHeroSection from '../components/HomeHero/HomeHeroSection';
import IntroBox from '../components/IntroBox/IntroBox';

const IntroCopy = styled.div`
  padding: 6rem 2rem;
  background: #333;
  font-family: Raleway, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
  h3,
  h5,
  h1 {
    max-width: 500px;
    margin: 0 auto;
  }
  h3 {
    font-weight: 200;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  h5 {
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  h1 {
    font-family: Georgia, serif;
    font-size: 1.8rem;
    line-height: 1.5;
    font-weight: 400;
    color: #888;
    max-width: 250px;
  }
`;
const IntroBoxContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeroSection />
    <IntroCopy>
      <h3>
        Hello, I am <strong>B</strong>.
      </h3>
      <h5>Nice to meet you.</h5>
      <h1>
        I am a designer/developer based in New York City—making things
        <em> and </em>
        making things make sense.
      </h1>
    </IntroCopy>
    <IntroBoxContainer>
      <IntroBox
        iconName="IntroHuman"
        width="2"
        order="0"
        mobileOrder="5"
        label="Human-centered"
      ></IntroBox>
      <IntroBox
        iconName="IntroLanguage"
        width="1"
        color="#6E6E6E"
        order="1"
        label="Languages"
      ></IntroBox>
      <IntroBox
        iconName="IntroExperience"
        width="1"
        order="3"
        label="Industry Experience"
      ></IntroBox>
      <IntroBox
        iconName="IntroCuriosity"
        width="1"
        order="7"
        label="Curiosity-driven"
      ></IntroBox>
      <IntroBox
        iconName="IntroHats"
        width="1"
        order="9"
        label="Many hats"
      ></IntroBox>
      <IntroBox
        iconName="IntroFootnotes"
        width="2"
        order="11"
        label="Foot notes"
      ></IntroBox>
    </IntroBoxContainer>
  </Layout>
);

export default IndexPage;
