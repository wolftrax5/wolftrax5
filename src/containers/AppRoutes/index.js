import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { MainLayout, WrapperContent, WrapperNav } from '../../styles/Layout';

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
          <Navbar />
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
