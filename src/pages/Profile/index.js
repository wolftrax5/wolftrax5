import React from 'react';
import { IsometricContainer } from './styles';
import { AppLayout } from '../../components/AppLayout';
import { MainContainer, SectionInfo } from '../Home/styles';
import { IsometricCard } from '../../components/IsometricCard';

export const Profile = () => {
  return (
    <AppLayout>
      <MainContainer>
        <h1>Profile</h1>
        <SectionInfo>
          {/* TODO beter center of CARDS*/}
          <IsometricContainer>
            <IsometricCard />
            <IsometricCard />
            <IsometricCard />
            <IsometricCard />
          </IsometricContainer>
        </SectionInfo>
      </MainContainer>
    </AppLayout>
  );
};
