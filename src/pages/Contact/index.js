import React from 'react';
import { IsometricContainer } from './styles';
import { AppLayout } from '../../components/AppLayout';
import { IsometricCard } from '../../components/IsometricCard';

import {
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillCalendar,
} from 'react-icons/ai';

export const ContactPage = () => {
  return (
    <AppLayout>
      <h1>Profile</h1>
      <p></p>
      <IsometricContainer>
        <a href='https://www.linkedin.com/in/wolftrax/' target='blank'>
          <IsometricCard>
            <AiFillLinkedin />
          </IsometricCard>
        </a>
        <a href='https://twitter.com/wolftrax05' target='blank'>
          <IsometricCard>
            <AiFillTwitterSquare />
          </IsometricCard>
        </a>

        <a href='https://github.com/wolftrax5' target='blank'>
          <IsometricCard>
            <AiFillGithub />
          </IsometricCard>
        </a>

        <a href='https://www.facebook.com/RAM130/' target='blank'>
          <IsometricCard>
            <AiFillFacebook />
          </IsometricCard>
        </a>

        <a href='https://calendly.com/wolftrax/15min' target='blank'>
          <IsometricCard>
            <AiFillCalendar />
          </IsometricCard>
        </a>
      </IsometricContainer>
    </AppLayout>
  );
};
