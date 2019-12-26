import React from 'react';
import styles from './IntroBox.module.scss';
import IntroHuman from '../../images/introBox.svg';

const Icon = () => (
  <svg>
    <use xlinkHref={`#${IntroHuman.id}`} />
  </svg>
);
const IntroBox = props => (
  <div
    style={{
      backgroundColor: props.background,
      flexBasis: props.width,
      order: props.order,
    }}
  >
    {console.log(IntroHuman)}
    <Icon />
    <span>{props.label}</span>
    {props.children}
  </div>
);

export default IntroBox;
