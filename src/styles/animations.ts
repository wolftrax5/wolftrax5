import { css, keyframes } from 'styled-components';

interface AnimationProps {
  time?: string;
  type?: string;
}

const fadeInKeyFrames = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }
    to {
        filter: blur(0);
        opacity: 1;
    }
`;

export const fadeIn = ({
  time = '1s',
  type = 'ease',
}: AnimationProps = {}) => css`
  animation: ${time} ${fadeInKeyFrames} ${type};
`;

const blinkFrames = keyframes`
50% {
      opacity: 0.0;
    }
`;

export const blink = ({ time = '1s' }: { time?: string } = {}) => css`
  animation: ${blinkFrames} ${time} step-start 0s infinite;
`;

const partialSpinFrames = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const rotate = () => css`
  animation: ${partialSpinFrames} 5s steps(4) infinite;
`;
