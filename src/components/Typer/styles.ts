import styled from 'styled-components';
import { blink } from '../../styles/animations';

interface TextContainerProps {
  color?: string;
  bg?: string;
  size?: number;
  font?: string;
}

export const TextContainer = styled.span<TextContainerProps>`
  color: ${(props) => props.color || 'var(--highligth)'};
  background-color: ${(props) => props.bg || 'trasparent'};
  font-size: ${(props) => props.size || 12}px;
  font-family: ${(props) => props.font};
  text-align: center;
  @media (max-width: 950px) {
    font-size: 22px;
  }
`;

export const Cursor = styled.span`
  ${blink({ time: '0.8s' })}
`;
