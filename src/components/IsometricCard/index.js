import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImgBox } from './styles';
import { ToxicIcon } from '../Icon';

export const IsometricCard = ({ className, title, children }) => {
  return (
    <Card className={`card ${className}`}>
      <CardImgBox className='card-imgBox'>
        {children}
        <h3>{title}</h3>
      </CardImgBox>
    </Card>
  );
};

IsometricCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
