import { format } from 'prettier';
import React from 'react';
import { AppLayout } from '../../components/AppLayout';
import { TypingComponent } from '../../components/Typer';

export const Home = () => (
  <AppLayout>
    <h1>Home</h1>
    <TypingComponent />
  </AppLayout>
);
