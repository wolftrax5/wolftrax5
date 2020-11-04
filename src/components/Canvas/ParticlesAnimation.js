import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Canvas } from './index';

class Particle {
  constructor(
    x,
    y,
    directionX,
    directionY,
    size,
    color = 'rgba(29,191,94,0.5)'
  ) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update(ctx) {
    if (this.x > ctx.canvas.width || this.x < this.size / 2) {
      this.directionX = -this.directionX;
    }
    if (this.y > ctx.canvas.height || this.y < this.size / 2) {
      this.directionY = -this.directionY;
    }

    let dx = 500 - this.x;
    let dy = 500 - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    this.x += this.directionX;
    this.y += this.directionY;
    this.draw(ctx);
  }
}
const SerParticles = (n = 1) => {
  let particlearray = [];
  for (let index = 0; index < n; index++) {
    let size = Math.random() * 5 + 1;
    let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
    let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
    let directionX = Math.random() * 2 - 1.5;
    let directionY = Math.random() * 2 - 1.5;

    particlearray.push(new Particle(x, y, directionX, directionY, size));
  }
  return particlearray;
};
function conect(ctx, particlearray) {
  let opacity = 0.7;
  for (let i = 0; i < particlearray.length; i++) {
    for (let j = i; j < particlearray.length; j++) {
      let distance =
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
  width: 90%;
  height: 90%;
`;
export const ParticlesAnimation = ({ number_particles = 2 }) => {
  // eslint-disable-next-line
  let particlearray = SerParticles(number_particles);

  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < particlearray.length; i++) {
      particlearray[i].update(ctx);
    }
    conect(ctx, particlearray);
  };

  return (
    <RelativeCanvas
      draw={draw}
      height={window.innerHeight}
      width={window.innerWidth}
    />
  );
};

ParticlesAnimation.propTypes = {
  number_particles: PropTypes.number,
};
