import React from 'react';
import styled from 'styled-components';
import { flexUnit } from '../Utils/utils';

import IntroHuman from '../../images/introHuman.svg';
import IntroEducation from '../../images/introEducation.svg';
import IntroCode from '../../images/introCode.svg';
import IntroLanguage from '../../images/introLanguages.svg';
import IntroExperience from '../../images/introExperience.svg';
import IntroCuriosity from '../../images/introCuriosity.svg';
import IntroHats from '../../images/introHats.svg';
import IntroProficiency from '../../images/introProficiency.svg';
import IntroShoes from '../../images/introShoes.svg';
import IntroDesign from '../../images/introDesign.svg';
import IntroCats from '../../images/introCats.svg';
import IntroFootnotes from '../../images/introFootnotes.svg';

const Icon = props => {
  const iconList = {
    IntroHuman,
    IntroLanguage,
    IntroExperience,
    IntroCode,
    IntroEducation,
    IntroDesign,
    IntroCats,
    IntroShoes,
    IntroProficiency,
    IntroCuriosity,
    IntroHats,
    IntroFootnotes,
  };
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backfaceVisibility: 'hidden',
      }}
    >
      <use xlinkHref={`#${iconList[props.iconName].id}`} />
    </svg>
  );
};

const IntroBox = props => {
  const { iconName, width, back, color, order, mobileOrder, label } = props;
  const IntroBoxDiv = styled.div`
    cursor: pointer;
    &::before {
      content: '';
      display: block;
      padding-top: ${width === '1' ? '100%' : '50%'};
    }
    flex-basis: ${width === '1' ? '25%' : '50%'};
    position: relative;
    order: ${order};
    perspective: 2000px;
    &:hover .flipper {
      transform: ${width === '1' ? 'rotateY(180deg)' : 'rotateX(180deg)'};
    }
    .flipper {
      transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform-origin: center;
      transform-style: preserve-3d;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    span {
      position: absolute;
      font-weight: 700;
      font-size: 1.3rem;
      ${flexUnit(1.3, 13, 26, 'vw', 'font-size')}

      line-height: 100%;
      padding: 1.2em 0 0 1.2em;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: ${color || '#ffffff'};
      display: block;
    }
    .front,
    .back {
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .back {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: ${back};
      padding: 1rem;
      transform: ${width === '1' ? 'rotateY(180deg)' : 'rotateX(180deg)'};
      .logo-collage {
        ${flexUnit(1.3, 10, 24, 'vw', 'font-size')}
        max-width: 17em;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        svg {
          box-sizing: border-box;
          margin: 0.5em 0;
          height: 2em;
          flex: 0;
          &.react {
            width: 6em;
            flex-basis: 6em;
          }
          &.gatsby {
            width: 8em;
            flex-basis: 8em;
          }
          &.js {
            width: 2.5em;
            height: 2.5em;
            flex-basis: 2.5em;
            margin-left: 0.5em;
            margin-right: 0.5em;
          }
          &.html {
            width: 2.5em;
            height: 2.5em;
            flex-basis: 2.5em;
            margin-left: 0.5em;
            margin-right: 0.5em;
          }
          &.sass {
            width: 3em;
            height: 2.5em;
            flex-basis: 3em;
            margin-left: 0.5em;
            margin-right: 0.5em;
          }
          &.git {
            width: 4.5em;
            flex-basis: 4.5em;
          }
          &.vscode {
            width: 2.6em;
            flex-basis: 2.6em;
          }
          &.iterm {
            width: 2.5em;
            height: 2.5em;
            flex-basis: 2.5em;
          }
          &.digital {
            width: 2.5em;
            height: 2.5em;
            flex-basis: 2.5em;
            margin-left: 0.5em;
            margin-right: 0.5em;
          }
          &.analog {
            width: 14em;
            height: 1.5em;
            flex-basis: 14em;
            transform: rotate(10deg) translateX(2em) translateY(1em);
            &.pencil {
              backface-visibility: hidden;
              height: 1.3em;
              transform: rotate(-5deg) translateX(-1em) translateY(0.5em);
            }
          }
        }
      }
      .about-back-block {
        ${flexUnit(1.3, 10, 24, 'vw', 'font-size')}
        // border: 1px solid rgba(255,255,255,.3);
        color: #fff;
        margin: 0.65em 0;
        &.small-icon {
          margin: 0.3em 0;
        }
        display: flex;
        align-items: center;
        box-sizing: border-box;
        max-width: ${width === '1' ? '15em' : '20em'};
        &.pref {
          max-width: 24em;
        }
        .pref-container {
          // border: 1px solid red;
          margin: 0;
          font-family: Georgia, serif;
          span {
            font-family: Raleway, Helvetica, Arial, sans-serif;
            display: block;
            position: inherit;
            font-size: 0.8em;
            padding: 0;
            margin: 0;
            margin-top: 0.5em;
            font-weight: 400;
          }
          .bit {
            display: inline-block;
            margin: 0.275em 0;
            span:first-of-type {
              border-radius: 1em 0 0 1em;
            }
            span:last-of-type {
              margin-right: 0.75em;
              border-radius: 0 1em 1em 0;
              border-left: none;
              padding-left: 0.75em;
            }
          }
          span {
            display: inline-block;
            border: 1px solid #dcdcd8;
            padding: 0.5em 1em;
            margin: 0;
            &.yay {
              background: #dcdcd8;
              color: #34332b;
              &::before {
                opacity: 0.4;
                content: '\\2713';
                margin-right: 0.5em;
              }
            }
            &.nay {
              color: #dcdcd8;
              &::before {
                opacity: 0.4;
                content: '\\00D7';
                margin-right: 0.5em;
              }
            }
          }
        }
        p {
          margin: 0;
          font-family: Georgia, serif;
          span {
            font-family: Raleway, Helvetica, Arial, sans-serif;
            display: block;
            position: inherit;
            font-size: 0.8em;
            padding: 0;
            margin: 0;
            margin-top: 0.5em;
            font-weight: 400;
          }
        }
        svg {
          width: 2.5em;
          height: 2.5em;
          flex: 0 0 2.5em;
          margin-right: 0.75rem;
          &.small-icon {
            width: 1.5em;
            height: 1.5em;
            flex: 0 0 1.5em;
            margin-right: 0.5rem;
          }
        }
      }
    }
    @media screen and (max-width: 600px) {
      flex-basis: ${width === '1' ? '50%' : '100%'};
      order: ${mobileOrder || order};
    }
  `;

  return (
    <IntroBoxDiv>
      <div className="flipper">
        <div className="front">
          <Icon iconName={iconName} />
          <span>{label}</span>
        </div>
        <div className="back">
          {/* <span
            style={{
              padding: '.5rem',
              fontSize: '1rem',
              background: 'rgba(0,0,0,.3)',
              bottom: 'auto',
              right: 'auto',
            }}
          >
            {label}
          </span> */}
          {props.children}
        </div>
      </div>
    </IntroBoxDiv>
  );
};

export default IntroBox;
