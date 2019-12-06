import React from "react";
import styled, { keyframes } from "styled-components";
import snowflake from "./img/sf.png";

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
  0% {opacity: 1; transform: translate(0, 0); }
  25% {opacity: 1; transform: translate(25px, 250px) rotate3d(1, 1,  0.3, 0deg); }
  50% {opacity: 1; transform: translate(50px, 500px) rotate3d(1, 1,  0.3, 180deg); }
  75% {opacity: 1; transform: translate(75px, 750px) rotate3d(1, 1,  0.3, 270deg); }
  100% {opacity: 0; transform: translate(100px, 1000px) rotate3d(1, 1,  0.3, 360deg); }
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
