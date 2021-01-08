import styled from 'styled-components';

export const IsometricContainer = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 75px;
  grid-column-gap: 20px;
  justify-items: space-between;

  transform: skewY(-10deg);

  & div:nth-child(even) {
    grid-column-start: 3;
    grid-row-gap: 1;
  }
  & div:nth-child(3n + 1) {
    grid-column-start: 2;
    grid-row-gap: 2;
  }
  & div:nth-child(odd) {
    grid-column-start: 1;
    grid-row-gap: 1;
  }
`;
