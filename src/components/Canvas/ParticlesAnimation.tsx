import React from 'react';
import styled from 'styled-components';
import { Canvas } from './index';

class Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;

  constructor(
    x: number,
    y: number,
    directionX: number,
    directionY: number,
    size: number,
    color: string = 'rgba(29,191,94,0.5)'
  ) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(ctx: CanvasRenderingContext2D) {
    // make the trayectory until thouch the borders, then change direction
    if (this.x > ctx.canvas.width || this.x < this.size / 2) {
      this.directionX = -this.directionX;
    }
    if (this.y > ctx.canvas.height || this.y < this.size / 2) {
      this.directionY = -this.directionY;
    }

    this.x += this.directionX;
    this.y += this.directionY;
    this.draw(ctx);
  }
}

const SetParticles = (n: number = 1, s: number = 5): Particle[] => {
  const particlearray: Particle[] = [];
  for (let index = 0; index < n; index++) {
    const size = Math.random() * s + 1;
    const x =
      Math.random() * (window.innerWidth - size * 2 - size * 2) + size * 2;
    const y =
      Math.random() * (window.innerHeight - size * 2 - size * 2) + size * 2;
    // velociti of particle
    const directionX = Math.random() * 2 - 1.5;
    const directionY = Math.random() * 2 - 1.5;

    particlearray.push(new Particle(x, y, directionX, directionY, size));
  }
  return particlearray;
};

function conect(ctx: CanvasRenderingContext2D, particlearray: Particle[]) {
  let opacity = 0.7;
  for (let i = 0; i < particlearray.length; i++) {
    for (let j = i; j < particlearray.length; j++) {
      const distance =
        (particlearray[i].x - particlearray[j].x) *
          (particlearray[i].x - particlearray[j].x) +
        (particlearray[i].y - particlearray[j].y) *
          (particlearray[i].y - particlearray[j].y);
      if (distance < 15000) {
        ctx.beginPath();
        opacity = 1 - distance / 15000;
        ctx.strokeStyle = 'rgba(103,232,19,' + opacity + ')';
        ctx.lineWidth = 1;
        ctx.moveTo(particlearray[i].x, particlearray[i].y);
        ctx.lineTo(particlearray[j].x, particlearray[j].y);
        ctx.stroke();
      }
    }
  }
}

const RelativeCanvas = styled(Canvas)`
  position: absolute;
  top: 0;
  width: 93%;
  height: 93%;
`;

interface ParticlesAnimationProps {
  number_particles?: number;
  size_particles?: 4 | 5 | 6 | 7 | 8 | 9 | 10 | 15;
}

export const ParticlesAnimation: React.FC<ParticlesAnimationProps> = ({
  number_particles = 2,
  size_particles = 5,
}) => {
  const particlearray = React.useRef(
    SetParticles(number_particles, size_particles)
  );

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < particlearray.current.length; i++) {
      particlearray.current[i].update(ctx);
    }
    conect(ctx, particlearray.current);
  };

  return (
    <RelativeCanvas
      draw={draw}
      height={window.innerHeight}
      width={window.innerWidth}
    />
  );
};
