import React, { useRef, useEffect } from "react";
import styled from "styled-components";
// import SockJS from "sockjs-client";
import SF, { Wrapper } from "./SF";

// const ws = new SockJS("");
// ws.onopen = () => {
//   console.log("WS connection is opened");
//   ws.send("test");
// };
// ws.onmessage = e => {
//   console.log("WS incoming message", e.data);
//   ws.close();
// };
// ws.onclose = function() {
//   console.log("WS connection is closed");
// };

const COUNT = 35;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  const containerSize = useRef({ height: 0, width: 0 });
  const appContainer = useRef(undefined);
  useEffect(() => {
    if (appContainer.current) {
      containerSize.current.height = appContainer.current.clientHeight;
      containerSize.current.width = appContainer.current.clientWidth;
    }
  }, []);

  const flakes = [...Array(COUNT).keys()];
  console.log("TCL: App -> e", flakes);

  return (
    <AppContainer ref={appContainer}>
      {flakes.map(i => {
        const rotatingSpeed = getRandomInt(10, 20);
        const delay = getRandomInt(1, 20);
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
    </AppContainer>
  );
}

export default App;
