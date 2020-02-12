import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundImageSection from '../components/BackgroundImageSection/BackgroundImageSection';
import LogoAnimation from '../components/LogoAnimation/LogoAnimation';
import Icons from '../components/Icons';
import IntroBox from '../components/IntroBox/IntroBox';

import { flexUnit } from '../components/Utils/utils';

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
    font-size: 2.5rem;
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
            <use xlinkHref={`#${Icons.ScrollDown.id}`} />
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
        <a className="resume" href="/resume_bumhan_yu.pdf">
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
              <use xlinkHref={`#${Icons.Advertising.id}`} />
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
              <use xlinkHref={`#${Icons.Branding.id}`} />
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
              <use xlinkHref={`#${Icons.Product.id}`} />
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
              <use xlinkHref={`#${Icons.Translation.id}`} />
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
              <use xlinkHref={`#${Icons.Lingo.id}`} />
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
              <use xlinkHref={`#${Icons.Psychology.id}`} />
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
              <use xlinkHref={`#${Icons.Strategy.id}`} />
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
              <use xlinkHref={`#${Icons.DesignThinking.id}`} />
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
              <use xlinkHref={`#${Icons.Typography.id}`} />
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
              <use xlinkHref={`#${Icons.Motion.id}`} />
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
              <use xlinkHref={`#${Icons.Ux.id}`} />
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
              <use xlinkHref={`#${Icons.Dev.id}`} />
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
              <use xlinkHref={`#${Icons.React.id}`} />
            </svg>
            <svg className="gatsby">
              <use xlinkHref={`#${Icons.Gatsby.id}`} />
            </svg>
            <svg className="js">
              <use xlinkHref={`#${Icons.JS.id}`} />
            </svg>
            <svg className="html">
              <use xlinkHref={`#${Icons.Html.id}`} />
            </svg>
            <svg className="html">
              <use xlinkHref={`#${Icons.Css.id}`} />
            </svg>
            <svg className="sass">
              <use xlinkHref={`#${Icons.Sass.id}`} />
            </svg>
            <svg className="git">
              <use xlinkHref={`#${Icons.Git.id}`} />
            </svg>
            <svg className="vscode">
              <use xlinkHref={`#${Icons.Vscode.id}`} />
            </svg>
            <svg className="iterm">
              <use xlinkHref={`#${Icons.Iterm.id}`} />
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
              <use xlinkHref={`#${Icons.Figma.id}`} />
            </svg>
            <svg className="digital">
              <use xlinkHref={`#${Icons.Sketch.id}`} />
            </svg>
            <svg className="digital">
              <use xlinkHref={`#${Icons.Principle.id}`} />
            </svg>
            <svg className="digital">
              <use xlinkHref={`#${Icons.Photoshop.id}`} />
            </svg>
            <svg className="digital">
              <use xlinkHref={`#${Icons.Illustrator.id}`} />
            </svg>
            <svg className="digital">
              <use xlinkHref={`#${Icons.Indesign.id}`} />
            </svg>
            <svg className="digital">
              <use xlinkHref={`#${Icons.AfterEffects.id}`} />
            </svg>
            <svg className="digital">
              <use xlinkHref={`#${Icons.Lightroom.id}`} />
            </svg>
            <svg className="analog pencil">
              <use xlinkHref={`#${Icons.Pencil.id}`} />
            </svg>
            <svg className="analog">
              <use xlinkHref={`#${Icons.Cutter.id}`} />
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
                <span className="nay">rebase</span>
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
              <use xlinkHref={`#${Icons.Close.id}`} />
            </svg>
          </button>
          <span
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '1em',
            }}
          >
            <img
              src="data:image/jpeg;base64,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"
              alt="Bumhan Yu"
              style={{ marginRight: '.5em', borderRadius: '50px' }}
            />
            <span>BUMHAN YU</span>
          </span>
          I am a designer who writes code at work, and a husband and dad who
          tells silly jokes at home &mdash; known as <strong>B</strong> (as in{' '}
          <span
            style={{
              textTransform: 'uppercase',
              fontSize: '.8em',
              fontWeight: '700',
            }}
          >
            bald
          </span>
          ) as I don't have much hair on top.
        </div>
      </Curtain>
    </Layout>
  );
};

export default IndexPage;
