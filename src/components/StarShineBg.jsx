import React, { cloneElement, memo } from 'react';
import styled, { keyframes } from 'styled-components';
import star from '../img/star.png';

const stars_count = 30;
const sparkle = 20;

const stars = [...Array(stars_count).keys()];

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;
const glitter = keyframes`
  0% {
    transform: scale(0.3) rotate(0deg);
    opacity: 0;
  }
  25% {
    transform: scale(1) rotate(180deg);
    opacity: 1;
  }
  50% {
    transform: scale(0.3) rotate(270deg);
    opacity: 0;
  }
  100% {
    transform: scale(0.3) rotate(360deg);
    opacity: 0;
  }
`;

function setSize(size) {
  switch (size) {
    case 'small':
      return '40px';
    case 'medium':
      return '60px';
    case 'large':
      return '80px';
    default:
  }
}

const Star = styled.div`
  display: block;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  height: ${props => setSize(props.size)};
  width: ${props => setSize(props.size)};
  background-image: url(${star});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  overflow: hidden;
  z-index: 0;
  color: transparent;
  opacity: 0;
  animation: ${glitter} 6s linear ${props => props.delay} infinite normal;
`;

const createStar = (key, size) => {
  const props = {
    key,
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    delay: Math.random() * sparkle + 's',
    size,
  };
  return cloneElement(<Star />, props);
};

export default memo(function StarShine() {
  return (
    <Container>
      {stars.map(i => {
        let size = '';
        if (i % 2 === 0) {
          size = 'small';
        } else if (i % 3 === 0) {
          size = 'medium';
        } else {
          size = 'large';
        }

        return createStar(i, size);
      })}
    </Container>
  );
});
