import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';

import { CenterDiv } from '../../styles/GlobalStyles';
import { MainLayout, WrapperContent, WrapperNav } from '../../styles/Layout';
import { useTheme } from '../../contexts/theme-context';

import {
  ToxicIcon,
  ProfileIcon,
  HomeIcon,
  ContactIcon,
  CodeIcon,
} from '../../components/Icon';

const NavContainer = () => {
  let { toggleTheme } = useTheme();
  return (
    <CenterDiv>
      <Link to='/'>
        <HomeIcon />
      </Link>
      <Link to='/profile'>
        <ProfileIcon />
      </Link>
      <Link to='/codes'>
        <CodeIcon />
      </Link>
      <Link to='/findme'>
        <ContactIcon />
      </Link>
      <ToxicIcon onClick={toggleTheme} />
    </CenterDiv>
  );
};
const Home = () => (
  <AppContainer>
    <h1>Home</h1>
  </AppContainer>
);
const Profile = () => (
  <AppContainer>
    <h1>Profile</h1>
  </AppContainer>
);
const Codes = () => (
  <AppContainer>
    <h1>Code</h1>
  </AppContainer>
);
const Contact = () => (
  <AppContainer>
    <h1>Contact</h1>
  </AppContainer>
);
const Fory = () => <h1>404</h1>;

const AppContainer = ({ children }) => {
  return (
    <>
      <MainLayout>
        <WrapperNav>
          <NavContainer />
        </WrapperNav>
        <WrapperContent>{children}</WrapperContent>
      </MainLayout>
    </>
  );
};
AppContainer.propTypes = {
  children: PropTypes.node,
};

export const AppRoutes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/codes' exact component={Codes} />
        <Route path='/findme' exact component={Contact} />
        <Route component={Fory} />
      </Switch>
    </Router>
  );
};
