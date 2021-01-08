import React from 'react';
import { IsometricContainer } from './styles';
import { AppLayout } from '../../components/AppLayout';
import { IsometricCard } from '../../components/IsometricCard';

export const ContactPage = () => {
  return (
    <AppLayout>
      <h1>Profile</h1>
      <p></p>
      <IsometricContainer>
        <IsometricCard title='1' />
        <IsometricCard title='2' />
        <IsometricCard title='3' />
        <IsometricCard title='4' />
      </IsometricContainer>
    </AppLayout>
  );
};
