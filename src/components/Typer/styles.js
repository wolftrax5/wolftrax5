import React from 'react';
import styled from 'styled-components';
import { blink } from '../../styles/animations';

export const TextContainer = styled.span`
  color: ${(props) => props.color || 'var(--main-fnt-color)'};
  background-color: ${(props) => props.bg || 'trasparent'};
  font-size: ${(props) => props.size || 12}px;
  font-family: ${(props) => props.font};
  text-align: center;
`;
export const Cursor = styled.span`
  ${blink({ time: '1s' })}
`;
