// TODO:
// 1. Add flipping content
// 2. Add resume link

import React, { useState } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundImageSection from '../components/BackgroundImageSection/BackgroundImageSection';
import LogoAnimation from '../components/LogoAnimation/LogoAnimation';
import IntroBox from '../components/IntroBox/IntroBox';
import CurtainBg from '../components/CurtainBg/CurtainBg';

import { flexUnit } from '../components/Utils/flexUnit';
import IconScrollDown from '../images/scrollDown.svg';

const IntroCopy = styled.div`
  ${flexUnit(3, 30, 60, 'vw', 'font-size')}

  position: relative;
  padding: 2.5em 2rem;
  box-sizing: border-box;
  background: #333;
  text-align: center;
  color: #fff;
  h3,
  h5,
  h1 {
    max-width: 500px;
    margin: 0 auto;
  }
  h3 {
    ${flexUnit(3, 30, 60, 'vw', 'font-size')}
    font-weight: 200;
    margin-bottom: 0.2em;
  }
  h5 {
    ${flexUnit(2, 20, 40, 'vw', 'font-size')}
    font-weight: 400;
    margin-bottom: 0.7em;
  }
  h1 {
    ${flexUnit(1.8, 18, 36, 'vw', 'font-size')}
    font-family: Georgia, serif;
    line-height: 1.5;
    font-weight: 200;
    color: #888;
    max-width: 13em;
    margin-bottom: 1em;
  }
  a.resume {
    background: #fff;
    ${flexUnit(1.3, 13, 26, 'vw', 'font-size')}

    padding: 1em 2em;
    color: #202020;
    text-decoration: none;
    border-radius: 3em;
    box-sizing: border-box;
    transition: background 0.2s;
    &:hover {
      background: var(--yellow);
    }
  }
  .jumpToCopy {
    position: absolute;
    top: -2em;
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
const HeroArea = styled(BackgroundImageSection)`
  height: calc(100vh - 45px);
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Curtain = styled.div`
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  transform: translateY(-105vh);
  transition: transform 0.5s, opacity 0.5s;
  opacity: 0;
  &.isDown {
    transform: translateY(0);
    opacity: 1;
  }
  .closeCurtain {
    position: absolute;
    z-index: 99;
    top: 2rem;
    right: 2rem;
    color: #fff;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 4rem;
    width: 4rem;
    height: 4rem;
    font-size: 3rem;
    display: flex;
    line-height: 1;
    padding: 0;
    align-items: center;
    justify-content: center;
  }
`;
const IndexPage = () => {
  const [curtainIsDown, setCurtainIsDown] = useState(false);

  const curtainDown = () => {
    setCurtainIsDown(!curtainIsDown);
  };

  return (
    <Layout>
      <SEO
        title="B | About"
        description="Bumhan Yu, aka B as in Bald, is a designer and developer based in New York City."
      />
      <HeroArea>
        <LogoAnimation size="8rem" click={curtainDown} />
      </HeroArea>
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
      <Curtain className={curtainIsDown ? 'isDown' : ''}>
        <CurtainBg>
          <button type="button" className="closeCurtain" onClick={curtainDown}>
            &times;
          </button>
          Content
        </CurtainBg>
      </Curtain>
    </Layout>
  );
};

export default IndexPage;
