import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transition: 0.5s;
  border: 1px solid var(--transparent-color);

  &:hover {
    transform: translateY(-40px);
  }
  &:before {
    content: '';
    position: absolute;
    top: -15px;
    left: 0;
    width: 101%;
    height: 15px;
    background: linear-gradient(
      to top,
      var(--transparent-color),
      var(--highligth)
    );
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
    height: 100%;
    background: linear-gradient(
      to left,
      var(--transparent-color),
      var(--highligth)
    );
    transform-origin: left;
    transform: skewY(45deg);
    transition: 0.5s;
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
      var(--transparent-color)
    );
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
    pointer-events: none;
    z-index: -1;
    filter: blur(4px);
    opacity: 0.9px;
  }

  .card:hover &:before {
    transform: skewX(45deg) translateY(100px);
    filter: blur(10px);
    opacity: 0.5px;
  }
`;
