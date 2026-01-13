import React from 'react';
import { useCanvas } from '../../hooks/useCanvas';

interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  draw: (context: CanvasRenderingContext2D, frameCount: number) => void;
}

export const Canvas: React.FC<CanvasProps> = ({ draw, ...rest }) => {
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...rest} />;
};
