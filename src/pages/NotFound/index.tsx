import React from 'react';
import { ZeroLoad } from '../../components/ZeroLoad';
import { ShadowTitle } from '../../components/ShadowTitle';
import { SectionNotFound } from './styles';

export const NotFound: React.FC = () => (
  <SectionNotFound>
    <ShadowTitle>
      4<ZeroLoad />4
    </ShadowTitle>
  </SectionNotFound>
);
