import React from 'react';
import { Card, CardImgBox } from './styles';

interface IsometricCardProps {
  className?: string;
  title?: string;
  children?: React.ReactNode;
}

export const IsometricCard: React.FC<IsometricCardProps> = ({
  className,
  title,
  children,
}) => {
  return (
    <Card className={`card ${className || ''}`}>
      <CardImgBox className='card-imgBox'>
        {children}
        <h3>{title}</h3>
      </CardImgBox>
    </Card>
  );
};
