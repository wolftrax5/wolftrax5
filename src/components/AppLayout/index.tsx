import React from 'react';
import { Navbar } from '../Navbar';
import { MainLayout, WrapperContent, WrapperNav } from '../../styles/Layout';
import { IconContext } from 'react-icons';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
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
