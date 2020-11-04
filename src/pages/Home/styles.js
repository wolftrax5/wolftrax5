import styled from 'styled-components';

export const MainContainer = styled.main`
  font-size: 18px;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 8fr 2fr;

  @media (max-width: 950px) {
    grid-template-rows: 2fr 8fr;
    grid-template-columns: 1fr;
    font-size: 12px;
  }
`;

export const HomeContainer = styled(MainContainer)``;

export const SectionInfo = styled.section`
  place-self: center;
  z-index: 100;
  & h1 {
    font-size: 78px;
  }
`;
