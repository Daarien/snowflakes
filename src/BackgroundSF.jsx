import React from "react";
import styled from "styled-components";
import SF from "./SF";

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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const COUNT = 20;

const flakes = [...Array(COUNT).keys()];

export default React.memo(function BSF(props) {
  return (
    <Container>
      {/* <StaticSF /> */}
      {flakes.map(i => {
        const rotatingSpeed = getRandomInt(10, 20);
        const delay = getRandomInt(1, 30);
        return (
          <SF
            key={i}
            size={50}
            delay={delay}
            speed={rotatingSpeed}
            direction={rotatingSpeed > 5 ? "normal" : "reverse"}
          />
        );
      })}
    </Container>
  );
});
