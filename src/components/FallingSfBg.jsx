import React from 'react';
import styled from 'styled-components';
import { fallingSnowFlake3d } from '../animations';
import { getRandomInt } from '../funx';

import snowflake from '../img/white-small-star.png';

const COUNT = 10;

const flakes = [...Array(COUNT).keys()];

const Container = styled.div`
  perspective: 1000px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  opacity: 0.8;
`;

export default React.memo(() => {
  return (
    <Container>
      {flakes.map(i => {
        // const rotatingSpeed = getRandomInt(10, 20);
        const delay = getRandomInt(1, 20);
        return (
          <SnowFlake
            key={i}
            src={snowflake}
            width={30}
            height={30}
            alt="sf"
            delay={delay}
            // speed={rotatingSpeed}
            // direction={rotatingSpeed > 5 ? "normal" : "reverse"}
          />
        );
      })}
    </Container>
  );
});

const SnowFlake = styled.img`
  margin-top: -100px;
  transform-style: preserve-3d;
  animation: ${fallingSnowFlake3d} 15s linear ${({ delay }) => delay}s infinite;
`;
