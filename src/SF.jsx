import React from "react";
import styled, { keyframes } from "styled-components/macro";
import snowflake from "./img/sf.png";
import snowflake2 from "./img/snow-flake.png";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const fallingSnowFlake = keyframes`
  0% {
    opacity: 1;
    transform: translate(0, 0) rotateZ(0deg);
  }
  75% {
    opacity: 1;
    transform: translate(180px, 750px) rotateZ(270deg);
  }
  100% {
    opacity: 0;
    transform: translate(250px, 1000px) rotateZ(360deg);
}
`;

const fallingSnowFlake3d = keyframes`
  0% {opacity: 1; transform: translate(0, 0) rotate3d(1, 1, 0.3, 0deg); }
  50% {opacity: 1; transform: translate(150px, 500px) rotate3d(1, 1,  0.3, 180deg); }
  100% {opacity: 0; transform: translate(300px, 1000px) rotate3d(1, 1,  0.3, 360deg); }
`;

const SnowFlake = styled.img`
  margin-top: -100px;
  perspective: 500px;
  transform-style: preserve-3d;
  animation: ${fallingSnowFlake3d} 15s linear ${({ delay }) => delay}s infinite;
`;

export default function SF({ size, speed, direction, delay }) {
  return (
    <SnowFlake
      src={snowflake}
      width={size}
      height={size}
      alt="sf"
      delay={delay}
      speed={speed}
      direction={direction}
    />
  );
}

const static3dSFanimation = keyframes`'
  0% {
    transform: rotate3d(1, 1, 1, 0deg);
  }
  50% {
    transform: rotate3d(1, 1, 1, 180deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
  }
`;

const StaticSnowFlake = styled.img`
  perspective: 500px;
  transform-style: preserve-3d;
  animation: ${static3dSFanimation} 5s linear infinite;
`;

export function StaticSF() {
  return (
    <div
      css={`
        width: 100%;
        height: 100&;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <StaticSnowFlake src={snowflake} />
    </div>
  );
}
