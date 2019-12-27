import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeHeroSection from '../components/HomeHero/HomeHeroSection';
import IntroBox from '../components/IntroBox/IntroBox';
import IconScrollDown from '../images/scrollDown.svg';

const IntroCopy = styled.div`
  position: relative;
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
    margin-bottom: 2.5rem;
  }
  a.resume {
    background: #fff;
    padding: 1rem 2rem;
    color: #202020;
    text-decoration: none;
    font-size: 1.3rem;
    border-radius: 3rem;
    box-sizing: border-box;
    transition: background 0.2s;
    &:hover {
      background: var(--yellow);
    }
  }
  .jumpToCopy {
    position: absolute;
    top: -6rem;
    left: calc(50% - 1.5rem);
    opacity: 0.85;
    animation: pulse 3s infinite;
    &:hover {
      animation-play-state: initial;
    }
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      30% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

const ScrollDown = styled.svg`
  width: 3rem;
  height: 3rem;
`;

const IntroBoxContainer = styled.section`
  background: #282828;
  display: flex;
  flex-wrap: wrap;
`;
const IndexPage = () => (
  <Layout>
    <SEO
      title="B as in BALD | About"
      description="Bumhan Yu, aka B as in Bald, is a designer and developer based in New York City."
    />
    <HomeHeroSection />
    <IntroCopy id="introCopyBlock">
      <a className="jumpToCopy" href="#introCopyBlock">
        <ScrollDown>
          <use xlinkHref={`#${IconScrollDown.id}`} />
        </ScrollDown>
      </a>
      <h3>
        Hello, I am <strong>B</strong>.
      </h3>
      <h5>Nice to meet you.</h5>
      <h1>
        I am a designer/developer based in New York City—making things
        <em> and </em>
        making things make sense.
      </h1>
      <a className="resume" href="https://google.com">
        View Resume
      </a>
    </IntroCopy>
    <IntroBoxContainer>
      <IntroBox
        iconName="IntroHuman"
        width="2"
        order="0"
        back="#657D96"
        mobileOrder="5"
        label="Human-centered"
      >
        testtest
        <br /> test
      </IntroBox>
      <IntroBox
        iconName="IntroLanguage"
        width="1"
        color="#706530"
        order="1"
        back="#897"
        label="Languages"
      ></IntroBox>
      <IntroBox
        iconName="IntroExperience"
        width="1"
        order="3"
        back="#374863"
        label="Industry Experience"
      ></IntroBox>
      <IntroBox
        iconName="IntroCuriosity"
        width="1"
        order="7"
        back="#234551"
        label="Curiosity-driven"
      ></IntroBox>
      <IntroBox
        iconName="IntroHats"
        width="1"
        order="9"
        back="#308286"
        label="Many hats"
      ></IntroBox>
      <IntroBox
        iconName="IntroFootnotes"
        width="2"
        order="11"
        back="#7C7C7C"
        label="Foot notes"
      ></IntroBox>
    </IntroBoxContainer>
  </Layout>
);

export default IndexPage;
