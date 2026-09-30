import styled from 'styled-components';

export const CodesContainer = styled.section`
  width: 100%;
  min-height: 100%;
  padding: 36px 40px 64px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 950px) {
    padding: 24px 16px 28px;
    gap: 20px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 720px;

  @media (max-width: 950px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 42px;
  font-weight: 700;
  letter-spacing: 0.02em;

  @media (max-width: 950px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  opacity: 0.85;

  & > span {
    color: var(--highligth);
    font-weight: 700;
  }

  @media (max-width: 950px) {
    font-size: 14px;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    gap: 18px;
    max-width: 100%;
  }
`;
