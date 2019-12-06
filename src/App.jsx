import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import SockJS from "sockjs-client";

import BSF from "./BackgroundSF";
import UserSF from "./UserSF";
import Tree from "./Tree";

const initTbState = {
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0,
  "5": 0,
  "6": 0,
  "7": 0,
  "8": 0,
  "9": 0,
  "10": 0,
  "11": 0,
  "12": 0,
  "13": 0,
  "14": 0
};

const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

function App() {
  const containerSize = useRef({ height: 0, width: 0 });
  const appContainer = useRef(undefined);

  const wsClient = useRef(new SockJS("http://0.0.0.0:9999/echo"));

  const [tbState, setTbState] = useState(initTbState);
  const [user, setUser] = useState({
    userFullName: "",
    userTbType: 0
  });

  wsClient.current.onopen = () => {
    console.log("WS connection is opened");
    wsClient.current.send("test");
  };
  wsClient.current.onmessage = e => {
    const message = JSON.parse(e.data);
    // console.log("WS incoming message", message);

    if (message) {
      const {
        tbCounterValues,
        lowActivityTbType,
        userFullName,
        userTbType
      } = message;

      if (tbCounterValues) {
        setTbState(tbCounterValues);
      }
      if (lowActivityTbType) {
        console.log("TCL: App -> lowActivityTbType", lowActivityTbType);
        let c = tbState[lowActivityTbType];
        const v = { [lowActivityTbType]: c + 1 };
        console.log("TCL: App -> v", v);
        setTbState(prevState => ({
          ...prevState,
          ...v
        }));
      }

      if (userFullName) {
        setUser({ userFullName, userTbType });
      }
    }
  };
  wsClient.current.onclose = function() {
    console.log("WS connection is closed");
  };

  useEffect(() => {
    if (appContainer.current) {
      containerSize.current.height = appContainer.current.clientHeight;
      containerSize.current.width = appContainer.current.clientWidth;
    }

    const ws = wsClient.current;
    return () => ws.close();
  }, []);

  return (
    <AppContainer ref={appContainer}>
      {/* <BSF /> */}
      <UserSF user={user} />
      <TreesContainer>
        {Object.keys(tbState).map(key => {
          const count = tbState[key];
          return <Tree key={key} count={count} size={containerSize.current} />;
        })}
      </TreesContainer>
    </AppContainer>
  );
}

const TreesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
`;

export default App;
