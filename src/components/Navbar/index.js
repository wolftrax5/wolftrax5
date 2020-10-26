import React from 'react';
import { NavLink, NavContainer, NavSection } from './styles';
import { useTheme } from '../../contexts/theme-context';
import { Button } from '../Button';

import {
  ToxicIcon,
  ProfileIcon,
  HomeIcon,
  ContactIcon,
  CodeIcon,
  LogoIcon,
} from '../Icon';

export const Navbar = () => {
  let { toggleTheme } = useTheme();
  return (
    <NavContainer className='navigation_content'>
      <Button>
        <ToxicIcon onClick={toggleTheme} />
      </Button>
      <NavSection>
        <NavLink to='/'>
          <HomeIcon />
        </NavLink>
        <NavLink to='/profile'>
          <ProfileIcon />
        </NavLink>
        <NavLink to='/codes'>
          <CodeIcon />
        </NavLink>
        <NavLink to='/findme'>
          <ContactIcon />
        </NavLink>
      </NavSection>
      <LogoIcon />
    </NavContainer>
  );
};
