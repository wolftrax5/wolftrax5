import styled from 'styled-components';

export const IsometricContainer = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 75px;
  grid-column-gap: 20px;
  justify-items: space-between;

  transform: skewY(-10deg);

  @media (min-width: 1000px) {
    & a:nth-child(1) {
      grid-column: 1;
    }
    & a:nth-child(2) {
      grid-column: 3;
    }
    & a:nth-child(3) {
      grid-column: 2;
      grid-row: 2;
    }
    & a:nth-child(4) {
      grid-column: 1;
      grid-row: 3;
    }
    & a:nth-child(5) {
      grid-column: 4;
      grid-row: 3;
    }
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-row-gap: 35px;
    font-size: 12px;
    justify-items: center;
    & a:nth-child() {
      grid-column: 1;
    }
  }
`;
