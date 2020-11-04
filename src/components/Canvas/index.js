import React from 'react';
import PropTypes from 'prop-types';
import { useCanvas } from '../../hooks/useCanvas';

export const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...rest} />;
};

Canvas.propTypes = {
  draw: PropTypes.func,
};
