import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.node,
};
