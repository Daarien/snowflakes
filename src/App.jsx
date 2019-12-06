import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

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

function initClient() {
  const client = new Client({ brockerUrl: "" });
  client.webSocketFactory = () => new SockJS("/gs-guide-websocket");
  return client;
}

function App() {
  const wsClient = useRef(initClient());
  wsClient.current.onConnect = frame => {
    console.log("Connected: " + frame);

    // wsClient.current.begin("/app/init");

    wsClient.current.subscribe("/topic/init", msg => {
      const message = JSON.parse(msg.body);
      console.log("/topic/init msg => ", message);
      if (message && message.tbCounterValues) {
        setTbState(message.tbCounterValues);
      }
    });

    wsClient.current.subscribe("/topic/greetings_events", msg => {
      const message = JSON.parse(msg.body);
      console.log("/topic/greetings_events => ", message);
      if (message) {
        const { userFullName, userTbType, lowActivityTbType } = message;

        if (userFullName) {
          setUser({ userFullName, userTbType });
        }

        if (lowActivityTbType) {
          const x = lowActivityTbType;
          let c = tbState[x];
          const v = { [x]: c + 1 };
          setTbState(prevState => ({
            ...prevState,
            ...v
          }));
        }
      }
    });
  };

  wsClient.current.debug = str => {
    console.log(str);
  };

  useEffect(() => {
    wsClient.current.activate();
    const client = wsClient.current;
    return () => client.deactivate();
  }, []);

  const containerSize = useRef({ height: 800, width: 1280 });
  const appContainer = useRef(undefined);

  const [tbState, setTbState] = useState(initTbState);
  const [user, setUser] = useState({
    userFullName: "",
    userTbType: 0
  });

  useEffect(() => {
    if (appContainer.current) {
      containerSize.current.height = appContainer.current.clientHeight;
      containerSize.current.width = appContainer.current.clientWidth;
    }
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
