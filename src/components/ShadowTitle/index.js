import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from './styles';

export const ShadowTitle = ({ children }) => {
  return <H2>{children}</H2>;
};

ShadowTitle.defaultProps = {
  children: 'HI',
};

ShadowTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
