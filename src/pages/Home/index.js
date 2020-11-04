import { format } from 'prettier';
import React from 'react';
import { AppLayout } from '../../components/AppLayout';
import { TypingComponent } from '../../components/Typer';
import { HomeContainer } from './styles';

export const Home = () => (
  <AppLayout>
    <HomeContainer>
      <h1>Home</h1>
      <TypingComponent />
    </HomeContainer>
  </AppLayout>
);
