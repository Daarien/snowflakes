import React from "react";
import styled, { keyframes } from "styled-components";
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
    transform: translate(100px, 750px) rotateZ(270deg);
  }
  100% {
    opacity: 0;
    transform: translate(150px, 1000px) rotateZ(360deg);
}
`;

const SnowFlake = styled.img`
  margin-top: -100px;
  animation: ${fallingSnowFlake} 20s linear ${({ delay }) => delay}s infinite;
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
