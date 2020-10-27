import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../Navbar';
import { MainLayout, WrapperContent, WrapperNav } from '../../styles/Layout';

export const AppLayout = ({ children }) => {
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

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
