import React, { useRef, useEffect } from 'react';
import theme from '~/theme';

interface DiceProps {
  size: number;
  speed: number;
  onRoll: (number: number) => any;
  face: number;
}

export const Dice = ({ face, size, speed, onRoll }: DiceProps) => {
  const style = useStyles();
  const cubeRef = useRef();
  const scale = size / 100;
  let cube;
  let rolling = false;
  let rotateX: number = 0;
  let rotateY: number = 0;
  let animationFrame;
  const randRange = (min, max) => Math.random() * (max - min) + min;
  const faceDegrees = [
    [20, 20],
    [20, 110],
    [110, 20],
    [200, 20],
    [20, -110],
    [-110, 20],
  ];

  useEffect(() => {
    cube = cubeRef.current;
  });

  function animate() {
    rotateX += Math.random() * speed;
    rotateY += Math.random() * speed;
    const transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    cube.style.transform = transform;
    animationFrame = requestAnimationFrame(animate);
  }

  function stopAnimation() {
    if (rolling === false) return;
    rolling = false;
    cancelAnimationFrame(animationFrame);
    const randomNumber = Math.floor(randRange(0, 6));
    const randomFace = faceDegrees[randomNumber];
    onRoll(randomNumber + 1);
    cube.style.transform = `rotateX(${randomFace[0]}deg) rotateY($:{randomFace[1]}deg)`;
  }

  function startAnimation() {
    if (rolling) return;
    rolling = true;
    requestAnimationFrame(animate);
    setTimeout(stopAnimation, 1000);
  }

  return (
    <div style={{ ...style.container, transform: `scale(${scale},${scale})` }}>
      <div
        onClick={startAnimation}
        ref={cubeRef}
        style={{
          ...style.cube,
          transform: `rotateX(${faceDegrees[face - 1][0]}deg) rotateY(${
            faceDegrees[face - 1][1]
          }deg)`,
        }}
      >
        <div style={{ ...style.face, ...style.one }}>
          <svg height="20" width="20">
            <circle cx="10" cy="10" r="10" />
          </svg>
        </div>
        <div style={{ ...style.face, ...style.two }}>
          <svg height="80" width="80">
            <circle cx="15" cy="15" r="10" />
            <circle cx="65" cy="65" r="10" />
          </svg>
        </div>
        <div style={{ ...style.face, ...style.three }}>
          <svg height="80" width="80">
            <circle cx="15" cy="15" r="10" />
            <circle cx="40" cy="40" r="10" />
            <circle cx="65" cy="65" r="10" />
          </svg>
        </div>
        <div style={{ ...style.face, ...style.four }}>
          <svg height="80" width="80">
            <circle cx="15" cy="15" r="10" />
            <circle cx="65" cy="65" r="10" />
            <circle cx="65" cy="15" r="10" />
            <circle cx="15" cy="65" r="10" />
          </svg>
        </div>
        <div style={{ ...style.face, ...style.five }}>
          <svg height="80" width="80">
            <circle cx="15" cy="15" r="10" />
            <circle cx="65" cy="65" r="10" />
            <circle cx="40" cy="40" r="10" />
            <circle cx="65" cy="15" r="10" />
            <circle cx="15" cy="65" r="10" />
          </svg>
        </div>
        <div style={{ ...style.face, ...style.six }}>
          <svg height="80" width="80">
            <circle cx="15" cy="15" r="10" />
            <circle cx="65" cy="65" r="10" />
            <circle cx="40" cy="15" r="10" />
            <circle cx="40" cy="65" r="10" />
            <circle cx="65" cy="15" r="10" />
            <circle cx="15" cy="65" r="10" />
          </svg>
        </div>
      </div>
    </div>
  );
};
const useStyles = (): { [key: string]: React.CSSProperties } => ({
  container: {
    width: 100,
    height: 100,
    perspective: 2000,
  },

  cube: {
    transformStyle: 'preserve-3d',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    position: 'relative',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: '1',
    animationFillMode: 'forwards',
    transform: 'rotateX(20deg) rotateY(20deg)',
  },

  face: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: theme.white,
    border: '2px solid rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  one: {
    transform: 'rotateX(0deg) translateZ(50px)',
  },

  two: {
    transform: 'rotateY(-90deg) translateZ(50px)',
  },

  four: {
    transform: 'rotateX(-180deg) translateZ(50px)',
  },

  three: {
    transform: 'rotateX(-90deg) translateZ(50px)',
  },

  five: {
    transform: 'rotateY(90deg) translateZ(50px)',
  },

  six: {
    transform: 'rotateX(90deg) translateZ(50px)',
  },
});
