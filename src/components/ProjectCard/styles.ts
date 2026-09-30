import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 14px;
  background: var(--transparent-color);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: var(--shadow);
  border: 1px solid var(--transparent-color);
  overflow: hidden;
  color: var(--main-fnt-color);
  ${fadeIn({ time: '480ms', type: 'ease-out' })}
  transition:
    transform 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease;

  &:hover,
  &:focus-within {
    transform: translateY(-6px);
    border-color: var(--highligth);
  }

  @media (max-width: 950px) {
    &:hover,
    &:focus-within {
      transform: none;
    }
  }
`;

export const Preview = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background: var(--color-darkgray);
  overflow: hidden;

  @media (max-width: 950px) {
    aspect-ratio: 16 / 9;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transform: scale(1.55);
`;

export const CanvasArt = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 22px 22px;
  flex: 1;

  @media (max-width: 950px) {
    padding: 16px 16px 18px;
    gap: 10px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.01em;

  @media (max-width: 950px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  opacity: 0.9;
  flex: 1;

  @media (max-width: 950px) {
    font-size: 13px;
    line-height: 1.5;
  }
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 4px 0 0;
  padding: 0;
`;

export const Tag = styled.li`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--highligth);
  color: var(--main-fnt-color);
`;

export const Actions = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;

  @media (max-width: 950px) {
    gap: 8px;
    margin-top: 4px;
  }
`;

export const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--main-fnt-color);
  border: 1px solid var(--transparent-color);
  transition:
    color 180ms ease,
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;

  &:hover,
  &:focus-visible {
    color: var(--highligth);
    border-color: var(--highligth);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid var(--highligth);
    outline-offset: 2px;
  }

  @media (max-width: 950px) {
    min-height: 40px;
    padding: 10px 16px;
  }
`;
