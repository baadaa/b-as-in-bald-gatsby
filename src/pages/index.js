// TODO:
// 1. Add flipping content
// 2. Add resume link

import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundImageSection from '../components/BackgroundImageSection/BackgroundImageSection';
import LogoAnimation from '../components/LogoAnimation/LogoAnimation';
import IntroBox from '../components/IntroBox/IntroBox';
import IconLingo from '../images/iconLingo.svg';
import IconPsychology from '../images/iconPsychology.svg';
import IconStrategy from '../images/iconStrategy.svg';
import IconGatsby from '../images/logo-gatsby-white.svg';
import IconJS from '../images/logo-js.svg';
import IconReact from '../images/logo-react-w-words.svg';
import IconGit from '../images/logo-git-white.svg';
import IconIterm from '../images/logo-iterm.svg';

import { flexUnit } from '../components/Utils/utils';
import IconScrollDown from '../images/scrollDown.svg';
import CloseIcon from '../images/close.svg';

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
  padding: 2rem;
  animation: pulsing 20s linear infinite;
  transform: translateY(-105vh);
  transition: transform 0.5s, opacity 0.5s;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &.isDown {
    transform: translateY(0);
    opacity: 1;
  }
  .curtain-container {
    color: #fff;
    font-size: 3rem;
    max-width: 55rem;
    line-height: 1.4;
  }
  .closeCurtain {
    cursor: pointer;
    svg {
      width: 4rem;
      height: 4rem;
    }
    position: absolute;
    z-index: 99;
    top: 2rem;
    right: 2rem;
    color: #fff;
    border: none;
    background: transparent;
    width: 4rem;
    height: 4rem;
    font-size: 3rem;
    display: flex;
    line-height: 1;
    padding: 0;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }
  @keyframes pulsing {
    0% {
      background: var(--cyan);
    }
    33% {
      background: var(--green);
    }
    66% {
      background: var(--yellow);
    }
    100% {
      background: var(--cyan);
    }
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
      <Helmet>
        <style type="text/css">{`
        html,body {
          scroll-behavior: smooth;
        }
      `}</style>
      </Helmet>
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
          iconName="IntroShoes"
          width="2"
          order="0"
          back="#475F7D"
          mobileOrder="5"
          label="Industry Experience"
        >
          <div
            className="about-back-block"
            style={{
              width: '100%',
            }}
          >
            <svg>
              <use xlinkHref={`#${IconLingo.id}`} />
            </svg>
            <p>
              Lead Designer/Developer
              <span>
                Young & Rubicam Group &nbsp;&bull;&nbsp; <em>Advertising</em>
              </span>
            </p>
          </div>
          <div
            className="about-back-block"
            style={{
              width: '100%',
            }}
          >
            <svg>
              <use xlinkHref={`#${IconPsychology.id}`} />
            </svg>
            <p>
              Communications Designer
              <span>
                The Moderns &nbsp;&bull;&nbsp; <em>Branding</em>
              </span>
            </p>
          </div>
          <div
            className="about-back-block"
            style={{
              width: '100%',
            }}
          >
            <svg>
              <use xlinkHref={`#${IconStrategy.id}`} />
            </svg>
            <p>
              Brand/Product Designer
              <span>
                Updater Inc. &nbsp;&bull;&nbsp; <em>Software Development</em>
              </span>
            </p>
          </div>
          <div
            className="about-back-block"
            style={{
              width: '100%',
            }}
          >
            <svg>
              <use xlinkHref={`#${IconStrategy.id}`} />
            </svg>
            <p>
              Translater/Interpreter
              <span>
                Freelance &nbsp;&bull;&nbsp; <em>Communications</em>
              </span>
            </p>
          </div>
        </IntroBox>
        <IntroBox
          iconName="IntroEducation"
          width="1"
          order="1"
          back="#334d5c"
          label="Education"
        >
          <div
            className="about-back-block"
            style={{
              width: '100%',
            }}
          >
            <svg>
              <use xlinkHref={`#${IconLingo.id}`} />
            </svg>
            <p>
              Linguistics &bull; Psychology
              <span>B.A.</span>
            </p>
          </div>
          <div
            className="about-back-block"
            style={{
              width: '100%',
            }}
          >
            <svg>
              <use xlinkHref={`#${IconPsychology.id}`} />
            </svg>
            <p>
              Clinical Psychology
              <span>M.A. drop-out</span>
            </p>
          </div>
          <div
            className="about-back-block"
            style={{
              width: '100%',
            }}
          >
            <svg>
              <use xlinkHref={`#${IconStrategy.id}`} />
            </svg>
            <p>
              Communications Design
              <span>M.S.</span>
            </p>
          </div>
        </IntroBox>
        <IntroBox
          iconName="IntroProficiency"
          width="1"
          order="3"
          back="#20575A"
          label="Proficiency"
        >
          <div
            className="about-back-block small-icon"
            style={{
              width: '100%',
            }}
          >
            <svg className="small-icon">
              <use xlinkHref={`#${IconLingo.id}`} />
            </svg>
            <p>Design Concept/Strategy</p>
          </div>
          <div
            className="about-back-block small-icon"
            style={{
              width: '100%',
            }}
          >
            <svg className="small-icon">
              <use xlinkHref={`#${IconLingo.id}`} />
            </svg>
            <p>Typography</p>
          </div>
          <div
            className="about-back-block small-icon"
            style={{
              width: '100%',
            }}
          >
            <svg className="small-icon">
              <use xlinkHref={`#${IconLingo.id}`} />
            </svg>
            <p>Motion Design</p>
          </div>
          <div
            className="about-back-block small-icon"
            style={{
              width: '100%',
            }}
          >
            <svg className="small-icon">
              <use xlinkHref={`#${IconPsychology.id}`} />
            </svg>
            <p>UX/UI & Prototyping</p>
          </div>
          <div
            className="about-back-block small-icon"
            style={{
              width: '100%',
            }}
          >
            <svg className="small-icon">
              <use xlinkHref={`#${IconStrategy.id}`} />
            </svg>
            <p>Frontend Development</p>
          </div>
        </IntroBox>
        <IntroBox
          iconName="IntroCode"
          width="1"
          order="7"
          color="#11342d"
          back="#001122"
          label="Dev"
        >
          <div className="logo-collage">
            <svg className="react">
              <use xlinkHref={`#${IconReact.id}`} />
            </svg>
            <svg className="gatsby">
              <use xlinkHref={`#${IconGatsby.id}`} />
            </svg>
            <svg className="js">
              <use xlinkHref={`#${IconJS.id}`} />
            </svg>
            <svg className="git">
              <use xlinkHref={`#${IconGit.id}`} />
            </svg>
            <svg className="iterm">
              <use xlinkHref={`#${IconIterm.id}`} />
            </svg>
          </div>
        </IntroBox>
        <IntroBox
          iconName="IntroDesign"
          width="1"
          order="9"
          back="#20575A"
          label="Design"
        ></IntroBox>
        <IntroBox
          iconName="IntroCats"
          width="2"
          order="11"
          back="#54534B"
          label="Preferences"
        ></IntroBox>
      </IntroBoxContainer>
      <Curtain className={curtainIsDown ? 'isDown' : ''}>
        <div className="curtain-container">
          <button type="button" className="closeCurtain" onClick={curtainDown}>
            <svg>
              <use xlinkHref={`#${CloseIcon.id}`} />
            </svg>
          </button>
          I am a designer who writes code at work, and a husband and dad who
          loves silly jokes at home. I do introduce myself as
          <em style={{ display: 'inline-block' }}>"B as in Bald"</em> in person,
          and indeed have no hair on top.
        </div>
      </Curtain>
    </Layout>
  );
};

export default IndexPage;
