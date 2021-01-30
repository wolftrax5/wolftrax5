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
      <Button aria-label='theme button'>
        <ToxicIcon onClick={toggleTheme} />
      </Button>
      <NavSection>
        <NavLink to='/' title='navegate to Home'>
          <HomeIcon />
        </NavLink>
        <NavLink to='/profile' title='navegate to Profile'>
          <ProfileIcon />
        </NavLink>
        <NavLink to='/codes' title='navegate to Proyects'>
          <CodeIcon />
        </NavLink>
        <NavLink to='/findme' title='navegate to contact wolftrax'>
          <ContactIcon />
        </NavLink>
      </NavSection>
      <LogoIcon />
    </NavContainer>
  );
};
