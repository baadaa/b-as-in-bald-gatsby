import React from 'react';
import styled from 'styled-components';

import IntroHuman from '../../images/introHuman.svg';
import IntroLanguage from '../../images/introLanguages.svg';
import IntroExperience from '../../images/introExperience.svg';
import IntroCuriosity from '../../images/introCuriosity.svg';
import IntroHats from '../../images/introHats.svg';
import IntroFootnotes from '../../images/introFootnotes.svg';

const Icon = props => {
  const iconList = {
    IntroHuman,
    IntroLanguage,
    IntroExperience,
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
      transition: transform 0.6s;
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
      line-height: 100%;
      padding: 1.6rem 0 0 1.6rem;
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
      background: ${back};
      transform: ${width === '1' ? 'rotateY(180deg)' : 'rotateX(180deg)'};
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
        <div className="back">{props.children}</div>
      </div>
    </IntroBoxDiv>
  );
};

export default IntroBox;
