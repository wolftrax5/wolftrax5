import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ProfileContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 10px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MapWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.95;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  & svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const MapTooltip = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  pointer-events: none;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--main-fnt-color);
  background: var(--main-bg-color);
  border: 1px solid var(--highligth);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  white-space: nowrap;
  will-change: transform;
`;

export const ProfileCard = styled.article`
  position: relative;
  z-index: 2;
  align-self: center;
  width: min(720px, 92%);
  padding: 32px 36px;
  border-radius: 14px;
  background: var(--transparent-color);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: var(--shadow);
  color: var(--main-fnt-color);
  animation: ${fadeUp} 480ms ease-out both;
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 28px;
  align-items: center;
  pointer-events: auto;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 24px;
    gap: 18px;
  }
`;

export const Photo = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--highligth);
  box-shadow: 0 0 24px var(--highligth);
  justify-self: center;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  color: var(--main-fnt-color);
`;

export const Meta = styled.p`
  margin: 0;
  font-size: 15px;
  opacity: 0.85;

  & > span.age {
    color: var(--highligth);
    font-weight: 700;
  }
`;

export const Role = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--highligth);
`;

export const Bio = styled.p`
  margin: 4px 0 0;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.9;
`;

export const SkillsRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0 0;
  padding: 0;

  @media (max-width: 720px) {
    justify-content: center;
  }
`;

export const SkillChip = styled.li<{ $learning?: boolean }>`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--highligth);
  color: ${(p) =>
    p.$learning ? 'var(--main-bg-color)' : 'var(--main-fnt-color)'};
  background: ${(p) => (p.$learning ? 'var(--highligth)' : 'transparent')};
  display: inline-flex;
  align-items: center;
  gap: 6px;

  & > small {
    font-size: 10px;
    opacity: 0.85;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
`;

export const SocialRow = styled.nav`
  display: flex;
  gap: 14px;
  margin-top: 16px;

  @media (max-width: 720px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--main-fnt-color);
  border: 1px solid var(--transparent-color);
  transition:
    color 180ms ease,
    transform 180ms ease,
    border-color 180ms ease;

  &:hover,
  &:focus-visible {
    color: var(--highligth);
    border-color: var(--highligth);
    transform: translateY(-2px);
  }
`;

export const LocationTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.75;

  & > span.dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--highligth);
    box-shadow: 0 0 8px var(--highligth);
  }
`;
