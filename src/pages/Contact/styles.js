import styled from 'styled-components';

export const IsometricContainer = styled.div`
  width: 1050px;
  margin-left: 10%;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 75px;
  grid-column-gap: 20px;
  justify-items: space-between;

  transform: skewY(-10deg);

  & div:nth-child(1) {
    grid-column: 1;
  }
  & div:nth-child(2) {
    grid-column: 3;
  }
  & div:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
  }
  & div:nth-child(4) {
    grid-column: 1;
    grid-row: 3;
  }
  & div:nth-child(5) {
    grid-column: 4;
    grid-row: 3;
  }
`;
