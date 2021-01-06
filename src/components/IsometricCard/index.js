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
      <div className='container'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          excepturi beatae recusandae qui facilis sint, in quam quaerat veniam
          non dolores autem quidem repellendus eligendi explicabo aliquid
          incidunt maxime laudantium?
        </p>
      </div>
    </Card>
  );
};
