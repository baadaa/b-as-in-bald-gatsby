const animateThis = (
  name,
  duration = '40s',
  direction = 'normal',
  fillMode = 'forwards'
) => `
    animation-name: ${name};
    animation-duration: ${duration};
    animation-timing-function: cubic-bezier(0.64, 0.57, 0.67, 1.53);
    animation-iteration-count: infinite;
    animation-direction: ${direction};
    animation-fill-mode: ${fillMode};
    animation-delay: 0;
`;

const transformBits = (direction, deg, color) => `
  transform: rotate${direction}(${deg});
  background: ${color};
`;

const keyframesRX3 = () => `
  3% {
    ${transformBits('X', '360deg', 'var(--cyan)')};
  }

  30% {
    ${transformBits('X', '360deg', 'var(--cyan)')};
  }

  33% {
    ${transformBits('X', '0deg', 'var(--berry)')};
  }

  60% {
    ${transformBits('X', '0deg', 'var(--berry)')};
  }

  63% {
    ${transformBits('X', '360deg', 'var(--green)')};
  }

  90% {
    ${transformBits('X', '360deg', 'var(--green)')};
  }

  93% {
    ${transformBits('X', '0deg', 'var(--yellow)')};
  }

  100% {
    ${transformBits('X', '0deg', 'var(--yellow)')};
  }

`;

const keyframesRX28 = () => `
  2.8% {
    ${transformBits('X', '360deg', 'var(--cyan)')};
  }

  30% {
    ${transformBits('X', '360deg', 'var(--cyan)')};
  }

  32.8% {
    ${transformBits('X', '0deg', 'var(--berry)')};
  }

  60% {
    ${transformBits('X', '0deg', 'var(--berry)')};
  }

  62.8% {
    ${transformBits('X', '360deg', 'var(--green)')};
  }

  90% {
    ${transformBits('X', '360deg', 'var(--green)')};
  }

  92.8% {
    ${transformBits('X', '0deg', 'var(--yellow)')};
  }

  100% {
    ${transformBits('X', '0deg', 'var(--yellow)')};
  }
`;

const keyframesRY22 = () => `
  2.2% {
    ${transformBits('Y', '360deg', 'var(--cyan)')};
  }

  30% {
    ${transformBits('Y', '360deg', 'var(--cyan)')};
  }

  32.2% {
    ${transformBits('Y', '0deg', 'var(--berry)')};
  }

  60% {
    ${transformBits('Y', '0deg', 'var(--berry)')};
  }

  62.2% {
    ${transformBits('Y', '360deg', 'var(--green)')};
  }

  90% {
    ${transformBits('Y', '360deg', 'var(--green)')};
  }

  92.2% {
    ${transformBits('Y', '0deg', 'var(--yellow)')};
  }

  100% {
    ${transformBits('Y', '0deg', 'var(--yellow)')};
  }
`;

const keyframesRY25 = () => `
  2.5% {
    ${transformBits('Y', '360deg', 'var(--cyan)')};
  }

  30% {
    ${transformBits('Y', '360deg', 'var(--cyan)')};
  }

  32.5% {
    ${transformBits('Y', '0deg', 'var(--berry)')};
  }

  60% {
    ${transformBits('Y', '0deg', 'var(--berry)')};
  }

  62.5% {
    ${transformBits('Y', '360deg', 'var(--green)')};
  }

  90% {
    ${transformBits('Y', '360deg', 'var(--green)')};
  }

  92.5% {
    ${transformBits('Y', '0deg', 'var(--yellow)')};
  }

  100% {
    ${transformBits('Y', '0deg', 'var(--yellow)')};
  }
`;

export {
  animateThis,
  keyframesRX3,
  keyframesRY22,
  keyframesRY25,
  keyframesRX28,
};
