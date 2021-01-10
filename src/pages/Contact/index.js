import React from 'react';
import { IsometricContainer } from './styles';
import { AppLayout } from '../../components/AppLayout';
import { IsometricCard } from '../../components/IsometricCard';
import {
  AiFillCodepenSquare,
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGoogleSquare,
} from 'react-icons/ai';

export const ContactPage = () => {
  return (
    <AppLayout>
      <h1>Profile</h1>
      <p></p>
      <IsometricContainer>
        <IsometricCard>
          <AiFillLinkedin />
        </IsometricCard>

        <IsometricCard>
          <AiFillTwitterSquare />
        </IsometricCard>

        <IsometricCard>
          <AiFillGithub />
        </IsometricCard>

        <IsometricCard>
          <AiFillCodepenSquare />
        </IsometricCard>

        <IsometricCard>
          <AiFillGoogleSquare />
        </IsometricCard>
      </IsometricContainer>
    </AppLayout>
  );
};
