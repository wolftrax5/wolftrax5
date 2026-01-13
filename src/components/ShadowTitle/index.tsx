import React from 'react';
import { H2 } from './styles';

interface ShadowTitleProps {
  children?: React.ReactNode;
}

export const ShadowTitle: React.FC<ShadowTitleProps> = ({
  children = 'HI',
}) => {
  return <H2>{children}</H2>;
};
