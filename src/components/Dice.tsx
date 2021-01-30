import './dice.css';
import React, { useRef, useEffect } from 'react';

interface DiceProps {
  size: number;
  speed: number;
  onRoll: (number: number) => number;
}

export const Dice = ({ size, speed, onRoll }: DiceProps) => {
  const cubeRef = useRef();
  const scale = size / 100;
  let cube;
  let rolling = false;
  let rotateX: number = 0;
  let rotateY: number = 0;
  let animationFrame;
  const randRange = (min, max) => Math.random() * (max - min) + min;
  const faceDegrees = [
    [0, 0],
    [0, 90],
    [90, 0],
    [180, 0],
    [0, -90],
    [-90, 0],
  ];
  const randomFace = faceDegrees[Math.floor(randRange(0, 6))];

  useEffect(() => {
    cube = cubeRef.current;
  });

  function animate() {
    rotateX += Math.random() * speed;
    rotateY += Math.random() * speed;
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    animationFrame = requestAnimationFrame(animate);
  }

  function stopAnimation() {
    if (rolling === false) return;
    rolling = false;
    cancelAnimationFrame(animationFrame);
    const randomNumber = Math.floor(randRange(0, 6));
    const randomFace = faceDegrees[randomNumber];
    onRoll(randomNumber + 1);
    cube.style.transform = `rotateX(${randomFace[0]}deg) rotateY(${randomFace[1]}deg)`;
  }

  function startAnimation() {
    rolling = true;
    requestAnimationFrame(animate);
  }

  return (
    <div
      className="container"
      style={{ transform: `scale(${scale},${scale})` }}
    >
      <div
        className="cube"
        ref={cubeRef}
        style={{
          transform: `rotateX(${randomFace[0]}deg) rotateY(${randomFace[1]}deg)`,
        }}
        onMouseDown={startAnimation}
        onMouseUp={stopAnimation}
        onMouseOut={stopAnimation}
        onMouseOver={stopAnimation}
      >
        <div className="face face__one">
          <svg height="20" width="20">
            <circle cx="10" cy="10" r="10" />
          </svg>
        </div>
        <div className="face face__two">
          <svg height="80" width="80">
            <circle cx="15" cy="15" r="10" />
            <circle cx="65" cy="65" r="10" />
          </svg>
        </div>
        <div className="face face__three">
          <svg height="80" width="80">
            <circle cx="15" cy="15" r="10" />
            <circle cx="40" cy="40" r="10" />
            <circle cx="65" cy="65" r="10" />
          </svg>
        </div>
        <div className="face face__four">
          <svg height="80" width="80">
            <circle cx="15" cy="15" r="10" />
            <circle cx="65" cy="65" r="10" />
            <circle cx="65" cy="15" r="10" />
            <circle cx="15" cy="65" r="10" />
          </svg>
        </div>
        <div className="face face__five">
          <svg height="80" width="80">
            <circle cx="15" cy="15" r="10" />
            <circle cx="65" cy="65" r="10" />
            <circle cx="40" cy="40" r="10" />
            <circle cx="65" cy="15" r="10" />
            <circle cx="15" cy="65" r="10" />
          </svg>
        </div>
        <div className="face face__six">
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
