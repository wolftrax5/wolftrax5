import React from 'react';
import { Card, CardImgBox } from './styles';
import { ToxicIcon } from '../Icon';

export const IsometricCard = () => {
  return (
    <Card className='card'>
      <CardImgBox className='card-imgBox'>
        <ToxicIcon />
        <h3>IMG</h3>
      </CardImgBox>
    </Card>
  );
};
