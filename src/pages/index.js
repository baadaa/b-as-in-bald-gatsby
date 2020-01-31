// TODO:
// 2. Add resume link

import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundImageSection from '../components/BackgroundImageSection/BackgroundImageSection';
import LogoAnimation from '../components/LogoAnimation/LogoAnimation';
import IntroBox from '../components/IntroBox/IntroBox';
import IconAdvertising from '../images/iconAdvertising.svg';
import IconBranding from '../images/iconBranding.svg';
import IconProduct from '../images/iconProduct.svg';
import IconTranslation from '../images/iconTranslation.svg';
import IconLingo from '../images/iconLingo.svg';
import IconPsychology from '../images/iconPsychology.svg';
import IconDesignThinking from '../images/iconDesignThinking.svg';
import IconMotion from '../images/iconMotion.svg';
import IconDev from '../images/iconDev.svg';
import IconUx from '../images/iconUx.svg';
import IconTypography from '../images/iconTypography.svg';
import IconStrategy from '../images/iconStrategy.svg';
import IconGatsby from '../images/logo-gatsby-white.svg';
import IconJS from '../images/logo-js.svg';
import IconReact from '../images/logo-react-w-words.svg';
import IconGit from '../images/logo-git-white.svg';
import IconVscode from '../images/logo-vscode.svg';
import IconIterm from '../images/logo-iterm.svg';
import IconHtml from '../images/logo-html.svg';
import IconCss from '../images/logo-css.svg';
import IconSass from '../images/logo-sass.svg';
import IconPhotoshop from '../images/iconPhotoshop.svg';
import IconIllustrator from '../images/iconIllustrator.svg';
import IconIndesign from '../images/iconIndesign.svg';
import IconLightroom from '../images/iconLightroom.svg';
import IconAfterEffects from '../images/iconAfterEffects.svg';
import IconFigma from '../images/iconFigma.svg';
import IconSketch from '../images/iconSketch.svg';
import IconPrinciple from '../images/iconPrinciple.svg';
import ItemPencil from '../images/pencil.svg';
import ItemCutter from '../images/cutter.svg';

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
              <use xlinkHref={`#${IconAdvertising.id}`} />
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
              <use xlinkHref={`#${IconBranding.id}`} />
            </svg>
            <p>
              Digital Solutionist
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
              <use xlinkHref={`#${IconProduct.id}`} />
            </svg>
            <p>
              Brand Designer
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
              <use xlinkHref={`#${IconTranslation.id}`} />
            </svg>
            <p>
              Translator/Interpreter
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
              <use xlinkHref={`#${IconDesignThinking.id}`} />
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
              <use xlinkHref={`#${IconTypography.id}`} />
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
              <use xlinkHref={`#${IconMotion.id}`} />
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
              <use xlinkHref={`#${IconUx.id}`} />
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
              <use xlinkHref={`#${IconDev.id}`} />
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
            <svg className="html">
              <use xlinkHref={`#${IconHtml.id}`} />
            </svg>
            <svg className="html">
              <use xlinkHref={`#${IconCss.id}`} />
            </svg>
            <svg className="sass">
              <use xlinkHref={`#${IconSass.id}`} />
            </svg>
            <svg className="git">
              <use xlinkHref={`#${IconGit.id}`} />
            </svg>
            <svg className="vscode">
              <use xlinkHref={`#${IconVscode.id}`} />
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
          back="#00373A"
          label="Design"
        >
          <div className="logo-collage">
            <svg className="digital">
              <use xlinkHref={`#${IconFigma.id}`} />
            </svg>
            <svg className="digital">
              <use xlinkHref={`#${IconSketch.id}`} />
            </svg>
            <svg className="digital">
              <use xlinkHref={`#${IconPrinciple.id}`} />
            </svg>
            <svg className="digital">
              <use xlinkHref={`#${IconPhotoshop.id}`} />
            </svg>
            <svg className="digital">
              <use xlinkHref={`#${IconIllustrator.id}`} />
            </svg>
            <svg className="digital">
              <use xlinkHref={`#${IconIndesign.id}`} />
            </svg>
            <svg className="digital">
              <use xlinkHref={`#${IconAfterEffects.id}`} />
            </svg>
            <svg className="digital">
              <use xlinkHref={`#${IconLightroom.id}`} />
            </svg>
            <svg className="analog pencil">
              <use xlinkHref={`#${ItemPencil.id}`} />
            </svg>
            <svg className="analog">
              <use xlinkHref={`#${ItemCutter.id}`} />
            </svg>
          </div>
        </IntroBox>
        <IntroBox
          iconName="IntroCats"
          width="2"
          order="11"
          back="#54534B"
          label="Preferences"
        >
          <div
            className="about-back-block pref"
            style={{
              width: '100%',
            }}
          >
            <div className="pref-container">
              <div className="bit">
                <span className="yay">space</span>
                <span className="nay">tab</span>
              </div>
              <div className="bit">
                <span className="nay">squash</span>
                <span className="yay">merge</span>
              </div>
              <div className="bit">
                <span className="yay">Star Wars</span>
                <span className="nay">Star Trek</span>
              </div>
              <div className="bit">
                <span className="nay">atheist</span>
                <span className="yay">agnostic</span>
              </div>
              <div className="bit">
                <span className="nay">classicism</span>
                <span className="yay">modernism</span>
              </div>
              <div className="bit">
                <span className="nay">dog</span>
                <span className="yay">cat</span>
              </div>
              <div className="bit">
                <span className="nay">Helvetica</span>
                <span className="yay">Univers</span>
              </div>
              <div className="bit">
                <span className="nay">work</span>
                <span className="yay">family</span>
              </div>
              <div className="bit">
                <span className="yay">Rogers</span>
                <span className="nay">Skinner</span>
              </div>
              <div className="bit">
                <span className="yay">Moleskine</span>
                <span className="nay">iPad</span>
              </div>
            </div>
          </div>
        </IntroBox>
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
