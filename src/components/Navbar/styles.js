import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  cursor: pointer;
  padding: 10px;
  margin: 5px;
  text-decoration: none;
`;
export const NavContainer = styled.nav`
  display: grid;
  height: 100%;
  grid-template-rows: 1fr 8fr 1fr;
  justify-items: center;
  align-items: center;

  @media (max-width: 950px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 8fr;
  }
`;
export const NavSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 950px) {
    flex-direction: row;
  }
`;
