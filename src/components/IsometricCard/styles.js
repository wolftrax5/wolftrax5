import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transition: 0.5s;

  &:hover {
    transform: translateY(-40px);
  }
  &:before {
    content: '';
    position: absolute;
    top: -15px;
    left: 0;
    width: 100%;
    height: 15px;
    background: var(--highligth);
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
  }
  &:after {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    width: 15px;
    height: 50%;
    background: var(--highligth);
    transform-origin: left;
    transform: skewY(45deg);
    transition: 0.5s;
    border-bottom: 200px solid #d9d9d9;
  }
`;

export const CardImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(
      transparent,
      transparent,
      rgba(250, 250, 250, 0.1)
    );
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
    pointer-events: none;
    z-index: -1;
  }

  .card:hover &:before {
    transform: skewX(45deg) translateY(40px);
    filter: blur(5px);
    opacity: 0.5px;
  }
`;
