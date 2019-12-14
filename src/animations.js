import { keyframes } from 'styled-components';

const h = window.innerHeight;

export const animateSF = keyframes`
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

export const whirl = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  20% {
    transform: rotateY(0);
  }
  70% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const fallingUserSf = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateY(${h}px);
  }
  100% {
    opacity: 0;
    transform: translateY(${h * 1.1}px);
}
`;

export const fallingSnowFlake = keyframes`
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

export const fallingSnowFlake3d = keyframes`
  0% {opacity: 1; transform: translate(0, 0); }
  20% {opacity: 1; transform: translate(25px, ${h * 0.2}px) rotate3d(1, 1,  0.3, 0deg); }
  50% {opacity: 1; transform: translate(50px, ${h * 0.5}px) rotate3d(1, 1,  0.3, 180deg); }
  75% {opacity: 1; transform: translate(75px, ${h * 0.75}px) rotate3d(1, 1,  0.3, 270deg); }
  100% {opacity: 0; transform: translate(100px, ${h}px) rotate3d(1, 1,  0.3, 360deg); }
`;
