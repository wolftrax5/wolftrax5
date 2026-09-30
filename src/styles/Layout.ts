import styled from 'styled-components';

export const MainLayout = styled.main`
  font-family: var(--default-font), sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  height: 100dvh;
  max-height: 100vh;
  max-height: 100dvh;
  overflow: hidden;
  background-color: var(--main-bg-color);
  color: var(--main-fnt-color);
  display: grid;
  grid-template-columns: var(--side-bar-width) 1fr;
  grid-template-areas: 'nav main';

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(0, 1fr) var(--side-bar-width);
    grid-template-areas:
      'main'
      'nav';
  }
`;

export const WrapperContent = styled.section`
  grid-area: main;
  padding: 5px;
  min-width: 0;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const WrapperNav = styled.header`
  grid-area: nav;
  z-index: 20;
  background-color: var(--main-bg-color);
`;
