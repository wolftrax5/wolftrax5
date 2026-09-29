import styled from 'styled-components';

export const CodesContainer = styled.section`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 10px);
  overflow-y: auto;
  padding: 36px 40px 64px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 720px) {
    padding: 24px 16px 80px;
    gap: 20px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 720px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 42px;
  font-weight: 700;
  letter-spacing: 0.02em;

  @media (max-width: 720px) {
    font-size: 32px;
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
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1100px;
`;
