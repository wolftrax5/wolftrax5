import styled from 'styled-components';
import { rotate } from '../../styles/animations';

export const Zero = styled.span`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  background: linear-gradient(to bottom, #fff, #777);
  border-radius: 50%;
  margin: 0 15px;
  box-shadow: -25px 25px 40px rgba(0, 0, 0, 0.5);
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 180px;
    height: 180px;
    background: linear-gradient(to top, #fff, #777);
    border-radius: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(
      315deg,
      var(--highligth),
      var(--highligth) 49%,
      var(--color-gray) 51%,
      var(--color-gray)
    );
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 1);
    ${rotate()}
  }
`;
