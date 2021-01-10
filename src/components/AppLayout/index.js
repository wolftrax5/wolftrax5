import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../Navbar';
import { MainLayout, WrapperContent, WrapperNav } from '../../styles/Layout';
import { IconContext } from 'react-icons';

export const AppLayout = ({ children }) => {
  return (
    <IconContext.Provider value={{ size: '2em', className: 'icon-wolftrax' }}>
      <MainLayout>
        <WrapperNav>
          <Navbar />
        </WrapperNav>
        <WrapperContent>{children}</WrapperContent>
      </MainLayout>
    </IconContext.Provider>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
